import React, { useState } from 'react';
import { Cpu, Sparkles, Terminal, Play, ArrowRight, Shield, Database, CheckCircle2, RefreshCw } from 'lucide-react';

export const AIEngineeringPlayground: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string>('architecture');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [output, setOutput] = useState<string | null>(null);

  const presets = [
    {
      id: 'architecture',
      title: 'Generate RAG System Blueprint',
      desc: 'Generates vector search & LLM cost routing specs for enterprise data',
      result: `{
  "system_type": "Hybrid Multimodal RAG Pipeline",
  "recommended_models": {
    "primary_reasoning": "Gemini 2.5 Pro (340ms p95)",
    "vector_embedding": "text-embedding-004",
    "fallback_model": "Gemini 2.5 Flash (cost optimization)"
  },
  "vector_db": "Qdrant / Pinecone (HNSW Indexing)",
  "security_controls": ["Zero retention data policy", "Prompt injection guardrails"],
  "estimated_token_cost_per_10k_queries": "$4.20",
  "architectural_readiness": "100% Deterministic Schema Validated"
}`
    },
    {
      id: 'workflow',
      title: 'Multi-Agent Logistics Auto-Dispatch',
      desc: 'Simulates autonomous document extraction & ERP booking trigger',
      result: `[AGENT 1: OCR_Extract] Processed Manifest #40921 (PDF -> JSON Schema)
[AGENT 2: Compliance_Check] Verified Customs Duty HS Code: 8471.30.00
[AGENT 3: Risk_Evaluator] Zero anomalies detected in freight value declaration.
[AGENT 4: ERP_Dispatcher] Executing POST https://erp.logistics.internal/api/v1/shipments
>>> Status: 201 Created | Dispatch Confirmed in 1.2 seconds.`
    },
    {
      id: 'audit',
      title: 'Code Security & Performance Benchmark',
      desc: 'Checks React/Next.js bundle size and security vulnerabilities',
      result: `=== 28labs Code Quality Audit ===
✓ Lighthouse Performance Score: 99 / 100
✓ OWASP Top 10 Security Audit: PASS (0 High / 0 Med)
✓ Sub-100ms API Latency Verified on Cloud Run Containers
✓ 100% Type-Safe TypeScript Standards Enforced`
    }
  ];

  const handleRunSimulation = (id: string) => {
    setSelectedPrompt(id);
    setIsProcessing(true);
    setOutput(null);

    setTimeout(() => {
      const preset = presets.find((p) => p.id === id);
      setOutput(preset ? preset.result : '');
      setIsProcessing(false);
    }, 800);
  };

  return (
    <section className="py-20 relative bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive AI Lab Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            See How 28labs <span className="text-gradient-cyan">Engineers AI Systems</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Select an AI architecture simulation below to preview how our custom reasoning pipelines operate under production constraints.
          </p>
        </div>

        {/* Playground Container */}
        <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
          
          {/* Preset Buttons */}
          <div className="grid sm:grid-cols-3 gap-3">
            {presets.map((p) => (
              <button
                key={p.id}
                onClick={() => handleRunSimulation(p.id)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                  selectedPrompt === p.id
                    ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{p.title}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">{p.desc}</div>
              </button>
            ))}
          </div>

          {/* Terminal Console */}
          <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                28labs-ai-lab // output_stream
              </span>
              <button
                onClick={() => handleRunSimulation(selectedPrompt)}
                className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isProcessing ? 'animate-spin' : ''}`} />
                <span>Re-run Test</span>
              </button>
            </div>

            <div className="p-4 font-mono text-xs text-slate-300 min-h-[200px] flex items-center justify-center">
              {isProcessing ? (
                <div className="flex flex-col items-center gap-3 text-slate-400">
                  <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin" />
                  <span>Processing reasoning engine request...</span>
                </div>
              ) : (
                <pre className="w-full text-left overflow-x-auto text-emerald-400">
                  <code>{output || presets[0].result}</code>
                </pre>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
