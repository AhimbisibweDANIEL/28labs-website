import { LeadSubmissionPayload, LeadSubmissionResponse } from '../types';

/**
 * Reusable client-side service for lead and project inquiry submissions.
 * Connects both ProjectEstimator and ConsultationModal to the unified /api/leads endpoint.
 */
export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadSubmissionResponse> {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data: LeadSubmissionResponse = await response.json().catch(() => ({
      success: false,
      error: 'Received an invalid response from the server.',
    }));

    if (!response.ok) {
      return {
        success: false,
        error: data.error || `Submission failed (HTTP ${response.status}). Please try again or email hello@28labs.net`,
      };
    }

    return {
      success: true,
      message: data.message || "Thanks — we've received your idea.",
      delivered: data.delivered,
    };
  } catch (error) {
    console.error('[leadService] Network or fetch error:', error);
    return {
      success: false,
      error: 'Unable to connect to the server. Please check your internet connection or email hello@28labs.net directly.',
    };
  }
}
