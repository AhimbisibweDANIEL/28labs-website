import React, { useState } from 'react';
import { HERO_DATA } from '../data/content';
import { ArrowRight, Sparkles, CheckCircle2, Terminal, Code2, Cpu, Zap, Shield, Play } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onNavigateToEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onNavigateToEstimator }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'ai' | 'api'>('ai');

  const codeSnippets = {
    ai: `// 28labs Multi-Modal AI Reasoning Pipeline
import { GoogleGenAI } from '@google/genai';
import { QdrantClient } from '@qdrant/js-client-rest';

export async function processAuditReport(fileUri: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const vectorDb = new QdrantClient({ url: process.env.QDRANT_URL });

  // 1. Semantic Embedding & Vector Search
  const searchResults = await vectorDb.search('financial_reports', {
    vector: await generateEmbedding(fileUri),
    limit: 5,
  });

  // 2. Deterministic Reasoning Engine
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: [
      { text: "Extract EBIDTA metrics & cross-reference citations." },
      { inlineData: { mimeType: "application/pdf", data: fileUri } }
    ],
    config: { responseMimeType: "application/json" }
  });

  return { verifiedData: JSON.parse(response.text), latencyMs: 340 };
}`,
    web: `// 28labs High-Performance Edge-Cached API Route
import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { db } from '@/db/schema';

export async function GET(request: Request) {
  const cacheKey = 'tenant:dashboard:analytics';
  const cached = await redis.get(cacheKey);
  if (cached) return NextResponse.json(JSON.parse(cached));

  // Sub-20ms PostgreSQL query with indexed aggregations
  const analytics = await db.query.metrics.findMany({
    limit: 100,
    orderBy: (m, { desc }) => [desc(m.timestamp)],
  });

  await redis.setex(cacheKey, 60, JSON.stringify(analytics));
  return NextResponse.json({ data: analytics, status: '200_OK' });
}`,
    api: `// 28labs Zero-Downtime Deployment & Health Checks
# Docker Container Healthcheck & Cloud Run Spec
healthcheck:
  test: ["CMD-SHELL", "curl -f http://localhost:3000/api/health || exit 1"]
  interval: 10s
  timeout: 3s
  retries: 3

# Performance Benchmark Output:
# [SUCCESS] GET /api/v1/ai/reasoning - 200 OK (28ms)
# [SUCCESS] GET /api/v1/auth/session  - 200 OK (12ms)
# [SUCCESS] POST /api/v1/sync/events  - 201 Created (18ms)
# P99 Latency: 32ms | Memory: 142MB | CPU: 0.12 Cores`
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-indigo-950/50">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Senior Engineering & AI Lab</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-slate-400 font-normal">Shipped in Weeks, Not Months</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {HERO_DATA.headlinePrefix}{' '}
              <span className="text-gradient-cyan block sm:inline">
                {HERO_DATA.headlineAccent}
              </span>{' '}
              {HERO_DATA.headlineSuffix}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {HERO_DATA.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onNavigateToEstimator}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Zap className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Estimate Project Scope & Cost</span>
              </button>
            </div>

            {/* Trust Bullet Strip */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Shipped Systems, Not Decks</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Shield className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>100% Code & IP Ownership</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fixed Sprint Guarantees</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Code Terminal */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-500/20 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

              {/* Terminal Box */}
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Terminal Header Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      28labs-engine // architecture.ts
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded text-[10px] text-emerald-400 border border-emerald-500/30 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    PROD READY
                  </div>
                </div>

                {/* Tab Controls */}
                <div className="flex border-b border-slate-800/80 bg-slate-950/60 p-1 text-xs">
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'ai'
                        ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>AI Reasoning</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('web')}
                    className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'web'
                        ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Web/Mobile</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('api')}
                    className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'api'
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>High-Speed API</span>
                  </button>
                </div>

                {/* Code Window */}
                <div className="p-4 bg-slate-950 font-mono text-xs overflow-x-auto min-h-[300px] max-h-[360px] leading-relaxed text-slate-300">
                  <pre className="text-slate-300">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Terminal Footer Bar */}
                <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Play className="w-3 h-3 text-cyan-400" /> Average Latency: <strong className="text-emerald-400">28ms</strong>
                  </span>
                  <span>TypeScript 5.8 // Node 22</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Hero Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {HERO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl border border-slate-800/80">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
