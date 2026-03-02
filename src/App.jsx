import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  BrainCircuit,
  Landmark,
  ScanSearch,
  Orbit,
  Radar,
  ChevronRight,
  ArrowRight,
  Lock,
  Network,
  FileCheck2,
  Sparkles,
  Building2,
  Users2,
  Scale,
  Eye,
  Layers3,
  Activity,
  GitBranch,
  Globe2,
  BriefcaseBusiness,
  ServerCog,
  BadgeCheck,
  Zap,
  CircleDollarSign,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const pillars = [
  {
    title: "Governed autonomy",
    icon: Shield,
    copy:
      "Runtime boundary enforcement, controlled delegation, corrective intervention, and resilient recovery for agents that act in the real world.",
  },
  {
    title: "Provable trust",
    icon: FileCheck2,
    copy:
      "Chain-of-custody evidence, policy-linked provenance, attestation exports, and measurable governance signals for boards, auditors, and regulators.",
  },
  {
    title: "Fiduciary intelligence",
    icon: Landmark,
    copy:
      "A governance framework for financial and operational agents that hold authority, move resources, and remain bound to chartered duty.",
  },
  {
    title: "Self-modifying control",
    icon: GitBranch,
    copy:
      "Validation pathways for architectural evolution, purpose preservation, rollback logic, and horizon governance as systems become more adaptive.",
  },
];

const productAreas = [
  {
    name: "Governance Core",
    eyebrow: "The constitutional center",
    description:
      "StableMind gives agents an identity, policy context, bounded authority, and continuity. This is the core that makes autonomy governable instead of merely impressive.",
    features: [
      "Identity model and secure bootstrapping",
      "Mirror-kernel style introspection and continuity logic",
      "Volitional boundaries, approvals, and override semantics",
      "Cognitive resource governance and intention-aware orchestration",
    ],
    icon: BrainCircuit,
  },
  {
    name: "Runtime Oversight",
    eyebrow: "Operate with guardrails while moving fast",
    description:
      "Real-time enforcement and recovery help teams catch drift before it becomes damage. StableMind is designed for action, not just postmortems.",
    features: [
      "Boundary enforcement and autonomy creep prevention",
      "Predictive risk scoring and longitudinal drift analysis",
      "Integrity restoration after override or intervention",
      "Deception and emergent-goal safeguards for advanced agents",
    ],
    icon: Radar,
  },
  {
    name: "Evidence Fabric",
    eyebrow: "Turn trust into an artifact",
    description:
      "The platform creates exportable evidence trails that tie actions to identities, policies, approvals, and contextual reasoning.",
    features: [
      "Cognitive chain of custody",
      "Identity-linked provenance and signed evidence roots",
      "Regulatory and customer attestation packages",
      "Benchmarking and governance scoring",
    ],
    icon: ScanSearch,
  },
  {
    name: "Federation & Scale",
    eyebrow: "Built for ecosystems, not toy deployments",
    description:
      "StableMind supports cross-agent trust, distributed governance, and future-state control patterns as AI becomes a system of systems.",
    features: [
      "Collaborative trust modeling across teams and agents",
      "Federated governance signals and policy bundles",
      "Fiduciary and resource delegation controls",
      "Self-modifying and planetary-scale safety extensions",
    ],
    icon: Globe2,
  },
];

const audienceCards = [
  {
    title: "For investors",
    icon: CircleDollarSign,
    copy:
      "A category-defining control plane for governed AI. StableMind sits where trust, autonomy, compliance, and enterprise infrastructure converge.",
  },
  {
    title: "For customers",
    icon: Building2,
    copy:
      "A path to deploying advanced agents in real environments without surrendering accountability, explainability, or operational control.",
  },
  {
    title: "For talent",
    icon: Users2,
    copy:
      "An opportunity to build the constitutional layer for machine agency, where product, systems, policy, and trust infrastructure meet.",
  },
];

const useCases = [
  {
    title: "AI governance for regulated enterprises",
    points: ["banking and treasury", "insurance", "healthcare", "critical infrastructure"],
  },
  {
    title: "Autonomous operations with policy control",
    points: ["workflow orchestration", "agent supervision", "human-in-the-loop correction", "runtime kill-switches"],
  },
  {
    title: "Evidence and attestation infrastructure",
    points: ["audit readiness", "provenance", "risk committees", "customer trust packs"],
  },
  {
    title: "Fiduciary and economic agency",
    points: ["resource delegation", "payment controls", "duty preservation", "chartered automation"],
  },
];

const recruitingReasons = [
  "Work on a hard, important problem at the intersection of AI, security, economics, governance, and product design.",
  "Build systems that matter to the real world, not just demos that sparkle in a lab and vanish in production.",
  "Shape a category from first principles with architecture depth, patent-backed differentiation, and enterprise relevance.",
  "Join a company designed to become the trust layer for autonomous systems.",
];

const patentFamilies = [
  {
    title: "Agentic Finance Trusteeship",
    copy: "Governed economic agency, fiduciary duty, trust-charter logic, and bounded resource delegation for agents that can hold authority.",
  },
  {
    title: "Proof, Provenance & Attestation Fabric",
    copy: "Evidence-bearing action trails, identity-linked provenance, signed audit roots, and regulator-ready attestation exports.",
  },
  {
    title: "Real-Time Boundary Enforcement & Recovery",
    copy: "Runtime boundary integrity, intervention paths, rollback logic, and coherence restoration after override or drift.",
  },
  {
    title: "Risk Prediction & Longitudinal Drift",
    copy: "Forecasting, benchmark deltas, drift analysis, and intervention engines that act before failure becomes damage.",
  },
  {
    title: "Federated Governance & Collaborative Trust",
    copy: "Cross-agent trust modeling, governance signal exchange, distributed policy coordination, and collective-risk oversight.",
  },
  {
    title: "Deceptive Alignment & Hard Safety",
    copy: "Behavioral divergence sensing, deception probes, hidden-path anomaly detection, and evidence-based defense against false alignment.",
  },
  {
    title: "Self-Modifying & Horizon Governance",
    copy: "Architectural evolution validation, purpose preservation, rollback, quarantine, and governance for systems that rewrite themselves.",
  },
];

const faqs = [
  {
    q: "What is StableMind?",
    a: "StableMind is a governance operating system for advanced AI agents. It provides identity, bounded authority, runtime oversight, evidence, compliance, and long-horizon control so autonomy can operate safely in high-trust environments.",
  },
  {
    q: "Why does this matter now?",
    a: "AI is moving from assistant behavior to delegated action. As systems gain authority, memory, agency, and access to business processes, the cost of weak governance rises sharply. StableMind is built for that transition.",
  },
  {
    q: "Who is this built for?",
    a: "Large enterprises, regulated operators, infrastructure providers, strategic partners, and the next generation of builders creating agentic systems that must be governable, provable, and resilient.",
  },
  {
    q: "What makes StableMind different?",
    a: "It is not a thin compliance wrapper. StableMind is designed as a layered product suite covering runtime enforcement, attestation, fiduciary control, deception resistance, recovery, federated trust, and self-modification governance.",
  },
];

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.10),transparent_24%)]" />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

function TechnicalMoatModal({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="outline"
        size={compact ? "default" : "lg"}
        onClick={() => setOpen(true)}
        className={`${compact ? "hidden sm:inline-flex" : ""} border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-2xl ${compact ? "" : "h-13 px-6 text-base"}`}
      >
        Technical Moat
      </Button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_32%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 p-8 pb-5 border-b border-white/10">
                <div>
                  <div className="text-3xl font-semibold tracking-tight">StableMind technical moat</div>
                  <p className="text-slate-400 leading-7 mt-3 max-w-3xl">
                    StableMind’s defensibility is architectural. The platform is organized around seven integrated patent families that protect the control surfaces enterprises will need as AI systems move from assistance to delegated action.
                  </p>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-300 hover:text-white hover:bg-white/[0.08]">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-4 max-h-[68vh] overflow-auto">
                {patentFamilies.map((family) => (
                  <div key={family.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-xl font-semibold tracking-tight">{family.title}</div>
                      <div className="h-10 w-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center shrink-0">
                        <Layers3 className="h-4 w-4 text-cyan-300" />
                      </div>
                    </div>
                    <p className="text-slate-400 leading-7 mt-3">{family.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavBar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-[1px] shadow-[0_0_40px_rgba(56,189,248,0.22)]">
            <div className="h-full w-full rounded-2xl bg-slate-950 flex items-center justify-center">
              <Orbit className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <div>
            <div className="text-white font-semibold tracking-tight">StableMind</div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">stablemind.io</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#careers" className="hover:text-white transition-colors">Careers</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <TechnicalMoatModal compact />
          <Button className="rounded-2xl bg-white text-slate-950 hover:bg-slate-100 shadow-lg">
            Request Access
          </Button>
        </div>
      </div>
    </div>
  );
}

function SignalCard({ title, icon: Icon, subtitle }: { title: string; icon: any; subtitle: string }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-5 text-white">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-400">{subtitle}</div>
        <Icon className="h-4 w-4 text-cyan-300" />
      </div>
      <div className="text-xl font-semibold mt-6 tracking-tight">{title}</div>
    </div>
  );
}

function IntegritySignal() {
  return (
    <Card className="rounded-[1.75rem] bg-slate-950/75 border-white/10 text-white overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <div className="text-xs uppercase tracking-[0.26em] text-slate-400">Live integrity signal</div>
            <div className="text-xl font-semibold tracking-tight mt-1">Volitional Boundary Integrity</div>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-emerald-200 text-sm">
            stable
          </div>
        </div>
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-4 items-center">
          <div>
            <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.03] px-4 flex items-center gap-3 overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyan-400/0 via-cyan-300/18 to-cyan-400/0"
                animate={{ x: ["-20%", "420%"] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
              />
              <div className="relative flex gap-2 items-center">
                {Array.from({ length: 18 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 rounded-full bg-cyan-300/80"
                    animate={{ height: [12, 28, 16, 34, 14] }}
                    transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.08, ease: "easeInOut" }}
                    style={{ height: 18 }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3 text-sm">
              {[
                ["VBIS", "98.4"],
                ["Drift Δ", "+0.02"],
                ["Evidence", "verified"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-slate-500 text-xs uppercase tracking-[0.22em]">{k}</div>
                  <div className="text-slate-100 font-semibold mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-3">Runtime state</div>
            <div className="space-y-3 text-sm">
              {[
                "Boundary checks active",
                "Override path clear",
                "Chain of custody intact",
                "Execution authority bounded",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.55)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-28 relative">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="space-y-7">
              <Badge className="rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/10 px-4 py-1.5 text-xs tracking-[0.22em] uppercase">
                Constitutional governance for advanced AI
              </Badge>

              <div className="space-y-5">
                <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-white leading-[0.94]">
                  The control plane for
                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                    governed autonomy
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-8">
                  StableMind is building the trust architecture for agentic systems: identity, bounded authority, runtime oversight, evidence, fiduciary control, and long-horizon governance for machines that act in the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-2xl bg-white text-slate-950 hover:bg-slate-100 h-13 px-6 text-base">
                  Explore the Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <TechnicalMoatModal />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5">
                {[
                  ["23", "patent-backed system domains"],
                  ["7", "integrated governance stacks"],
                  ["1", "mission: trusted autonomous action"],
                ].map(([big, small]) => (
                  <div key={small} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <div className="text-3xl font-semibold text-white">{big}</div>
                    <div className="text-sm text-slate-400 mt-1">{small}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.12)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_28%)]" />
              <div className="relative grid gap-4">
                <IntegritySignal />
                <div className="grid grid-cols-2 gap-4">
                  <SignalCard title="Identity" icon={ScanSearch} subtitle="Who is acting" />
                  <SignalCard title="Authority" icon={Scale} subtitle="What is allowed" />
                  <SignalCard title="Evidence" icon={FileCheck2} subtitle="What can be proven" />
                  <SignalCard title="Resilience" icon={Activity} subtitle="How control is preserved" />
                </div>

                <Card className="rounded-[1.75rem] bg-slate-950/70 border-white/10 text-white overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Architecture</div>
                        <div className="text-2xl font-semibold tracking-tight">StableMind core loop</div>
                      </div>
                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-cyan-200 text-sm">
                        live concept view
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {[
                        [BrainCircuit, "Identity & cognition"],
                        [Shield, "Runtime enforcement"],
                        [Radar, "Risk & drift"],
                        [Landmark, "Fiduciary delegation"],
                        [Network, "Federated trust"],
                        [ServerCog, "Self-modifying control"],
                      ].map(([Icon, label]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 flex items-center gap-3">
                          <Icon className="h-4 w-4 text-cyan-300" />
                          <span className="text-slate-200">{label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AudienceStrip() {
  return (
    <section className="py-10 border-y border-white/8 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-5">
        {audienceCards.map(({ title, icon: Icon, copy }) => (
          <Card key={title} className="rounded-[1.8rem] bg-white/[0.03] border-white/10 text-white">
            <CardContent className="p-6 flex gap-4 items-start">
              <div className="h-12 w-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight">{title}</div>
                <p className="text-slate-400 leading-7 mt-2 text-sm">{copy}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="platform" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Badge className="rounded-full bg-white/[0.04] text-slate-300 border border-white/10 hover:bg-white/[0.04] px-4 py-1.5">Platform thesis</Badge>
          <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-5 leading-tight">
            StableMind turns advanced AI from an impressive capability into an accountable system.
          </h2>
          <p className="text-slate-400 text-lg leading-8 mt-5">
            The product suite is designed to serve the moment when AI gains memory, agency, authority, access to workflows, and economic reach. Governance cannot remain a PDF and a hope.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {pillars.map(({ title, icon: Icon, copy }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
              <Card className="rounded-[2rem] bg-white/[0.03] border-white/10 text-white h-full">
                <CardContent className="p-7">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 border border-white/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="text-slate-400 leading-8 mt-3">{copy}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <div className="text-white font-semibold text-lg tracking-tight">{title}</div>
        <Icon className="h-5 w-5 text-cyan-300" />
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-white/8 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowNode({ title, body, icon: Icon, glow }: { title: string; body: string; icon: any; glow: string }) {
  return (
    <div className="relative rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${glow}`} />
      <div className="relative">
        <div className="h-11 w-11 rounded-2xl border border-white/10 bg-slate-950/70 flex items-center justify-center mb-4">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <div className="text-white font-semibold tracking-tight">{title}</div>
        <div className="text-slate-400 text-sm leading-6 mt-2">{body}</div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
        <ArrowRight className="h-6 w-6 text-cyan-300" />
      </motion.div>
    </div>
  );
}

function FiduciaryFlowVisualization() {
  return (
    <Card className="rounded-[2rem] bg-slate-950/75 border-white/10 text-white overflow-hidden mt-6">
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Fiduciary control path</div>
            <div className="text-2xl font-semibold tracking-tight mt-1">Resource movement through purpose-bound governance</div>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-amber-200 text-sm">
            patent-backed differentiator
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center">
          <FlowNode title="Resource token" body="Delegated asset, budget, or operational authority enters the system." icon={CircleDollarSign} glow="from-cyan-400/18 to-blue-500/18" />
          <FlowArrow />
          <FlowNode title="Purpose lock" body="Mission and duty constraints determine whether the action is in scope." icon={Lock} glow="from-violet-400/18 to-fuchsia-500/18" />
          <FlowArrow />
          <FlowNode title="Policy & approval gate" body="Policy, thresholds, human approvals, and fiduciary rules are evaluated." icon={Scale} glow="from-emerald-400/18 to-cyan-400/18" />
          <FlowArrow />
          <FlowNode title="Execution + evidence" body="Approved movement proceeds with signed provenance and audit-ready artifacts." icon={FileCheck2} glow="from-amber-400/18 to-orange-500/18" />
        </div>
      </CardContent>
    </Card>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 bg-white/[0.02] border-y border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-10 items-start">
          <div>
            <Badge className="rounded-full bg-cyan-400/10 text-cyan-200 border border-cyan-400/20 hover:bg-cyan-400/10 px-4 py-1.5">System architecture</Badge>
            <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-5 leading-tight">
              A layered architecture for trust, control, and scale.
            </h2>
            <p className="text-slate-400 text-lg leading-8 mt-5 max-w-xl">
              StableMind is designed as a platform, not a feature. It spans constitutional identity, runtime intervention, evidence generation, fiduciary governance, federated trust, and future-state control for self-modifying systems.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Identity and secure bootstrapping create durable governance roots.",
                "Runtime controls keep agent action bounded and reversible.",
                "Evidence and attestation turn trust into an exportable artifact.",
                "Long-horizon governance addresses drift, deception, delegation, and scale.",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <BadgeCheck className="h-5 w-5 text-cyan-300 mt-1 shrink-0" />
                  <p className="text-slate-300 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.10)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_34%)]" />
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-4">
                <ArchitectureCard icon={ScanSearch} title="Control plane" items={["Identity", "policy", "approvals", "purpose locks"]} />
                <ArchitectureCard icon={Shield} title="Runtime plane" items={["enforcement", "risk", "recovery", "delegation"]} />
                <ArchitectureCard icon={FileCheck2} title="Evidence plane" items={["provenance", "attestation", "audit", "benchmarking"]} />
              </div>

              <div className="my-6 grid grid-cols-5 items-center gap-2 text-slate-500 text-xs uppercase tracking-[0.2em]">
                <div className="col-span-2 h-px bg-white/10" />
                <div className="text-center">system loop</div>
                <div className="col-span-2 h-px bg-white/10" />
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {[
                  [Network, "Federation", "Cross-agent trust and distributed governance"],
                  [Landmark, "Fiduciary", "Bounded economic and delegated authority"],
                  [Eye, "Defense", "Deception resistance and horizon safeguards"],
                  [ServerCog, "Evolution", "Self-modifying control and rollback paths"],
                ].map(([Icon, title, text]) => (
                  <div key={title as string} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <div className="text-white font-semibold mt-4">{title as string}</div>
                    <div className="text-slate-400 text-sm leading-6 mt-2">{text as string}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FiduciaryFlowVisualization />
      </div>
    </section>
  );
}

function ProductTabs() {
  const defaultTab = useMemo(() => productAreas[0].name, []);
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge className="rounded-full bg-white/[0.04] text-slate-300 border border-white/10 hover:bg-white/[0.04] px-4 py-1.5">Product suite</Badge>
          <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-5 leading-tight">
            Four integrated surfaces. One coherent platform story.
          </h2>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 h-auto bg-transparent p-0">
            {productAreas.map((area) => (
              <TabsTrigger key={area.name} value={area.name} className="rounded-2xl border border-white/10 bg-white/[0.03] text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-950 py-4">
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {productAreas.map((area) => {
            const Icon = area.icon;
            return (
              <TabsContent key={area.name} value={area.name} className="mt-6">
                <Card className="rounded-[2rem] bg-white/[0.03] border-white/10 text-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                      <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]">
                        <div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/[0.05] flex items-center justify-center mb-6">
                          <Icon className="h-6 w-6 text-cyan-300" />
                        </div>
                        <div className="text-sm uppercase tracking-[0.24em] text-slate-400">{area.eyebrow}</div>
                        <h3 className="text-3xl font-semibold tracking-tight mt-3">{area.name}</h3>
                        <p className="text-slate-400 leading-8 mt-4 text-lg">{area.description}</p>
                      </div>
                      <div className="p-8 lg:p-10">
                        <div className="grid gap-4">
                          {area.features.map((feature) => (
                            <div key={feature} className="rounded-[1.35rem] border border-white/10 bg-slate-950/60 p-4 flex items-start gap-3">
                              <ChevronRight className="h-5 w-5 text-cyan-300 mt-0.5 shrink-0" />
                              <div className="text-slate-200 leading-7">{feature}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 bg-white/[0.02] border-y border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Badge className="rounded-full bg-cyan-400/10 text-cyan-200 border border-cyan-400/20 hover:bg-cyan-400/10 px-4 py-1.5">Where StableMind fits</Badge>
          <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-5 leading-tight">
            Designed for high-trust, high-consequence, and high-value environments.
          </h2>
          <p className="text-slate-400 text-lg leading-8 mt-5">
            The product is especially powerful where autonomy meets regulation, fiduciary duty, operational risk, customer accountability, or board-level governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {useCases.map((item, idx) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: idx * 0.06 }}>
              <Card className="rounded-[1.9rem] bg-white/[0.03] border-white/10 text-white h-full">
                <CardContent className="p-6">
                  <div className="text-xl font-semibold tracking-tight">{item.title}</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <Badge key={point} className="rounded-full bg-white/[0.05] text-slate-300 border border-white/10 hover:bg-white/[0.05] px-3 py-1.5">
                        {point}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoatSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div>
          <Badge className="rounded-full bg-white/[0.04] text-slate-300 border border-white/10 hover:bg-white/[0.04] px-4 py-1.5">Why this can become category-defining</Badge>
          <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-5 leading-tight">
            A product moat shaped by architecture, not marketing alone.
          </h2>
          <p className="text-slate-400 text-lg leading-8 mt-5">
            StableMind is not trying to win with a single feature. It is building a layered control system that becomes more valuable as customers move from assistive AI toward delegated autonomy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            [Layers3, "Layered platform depth", "Identity, enforcement, evidence, fiduciary logic, federation, and horizon governance live in one coherent system."],
            [Lock, "Patent-backed differentiation", "A 23-patent architecture creates strategic defensibility around the most important control surfaces for advanced agents."],
            [BriefcaseBusiness, "Enterprise relevance", "The value proposition is strongest where accountability, approvals, policy, and operational consequences already matter."],
            [Sparkles, "Talent magnetism", "The mission is technically serious, economically meaningful, and philosophically alive. Great builders want hard, durable problems."],
          ].map(([Icon, title, body]) => (
            <Card key={title as string} className="rounded-[1.8rem] bg-white/[0.03] border-white/10 text-white h-full">
              <CardContent className="p-6">
                <Icon className="h-5 w-5 text-cyan-300" />
                <div className="text-xl font-semibold tracking-tight mt-4">{title as string}</div>
                <p className="text-slate-400 leading-7 mt-3">{body as string}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-white/[0.02] border-y border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
        <div>
          <Badge className="rounded-full bg-cyan-400/10 text-cyan-200 border border-cyan-400/20 hover:bg-cyan-400/10 px-4 py-1.5">Talent magnet</Badge>
          <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-5 leading-tight">
            Build the trust layer for the next era of machine agency.
          </h2>
          <p className="text-slate-400 text-lg leading-8 mt-5">
            StableMind is for people who want to work on systems that matter. Governance, identity, runtime control, evidence, and agent economics are not side quests. They are the shape of what real AI infrastructure becomes.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "AI systems",
              "security engineering",
              "platform architecture",
              "frontend and operator UX",
              "trust infrastructure",
              "product and research",
            ].map((tag) => (
              <Badge key={tag} className="rounded-full bg-white/[0.05] text-slate-300 border border-white/10 hover:bg-white/[0.05] px-4 py-2">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="rounded-[2rem] bg-slate-950/75 border-white/10 text-white overflow-hidden">
          <CardContent className="p-8 lg:p-9">
            <div className="text-2xl font-semibold tracking-tight">Why top builders will care</div>
            <div className="grid gap-4 mt-6">
              {recruitingReasons.map((reason) => (
                <div key={reason} className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-4 py-4 flex gap-3">
                  <Zap className="h-5 w-5 text-cyan-300 mt-0.5 shrink-0" />
                  <div className="text-slate-300 leading-7">{reason}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="rounded-2xl bg-white text-slate-950 hover:bg-slate-100">Join the founding team</Button>
              <Button variant="outline" className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                View open roles
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="rounded-full bg-white/[0.04] text-slate-300 border border-white/10 hover:bg-white/[0.04] px-4 py-1.5">Questions people ask</Badge>
          <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-5 leading-tight">
            The short version, without sanding off the edges.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, idx) => (
            <AccordionItem key={item.q} value={`item-${idx}`} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-6">
              <AccordionTrigger className="text-white text-left text-lg hover:no-underline py-6">{item.q}</AccordionTrigger>
              <AccordionContent className="text-slate-400 leading-8 pb-6">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-[2.4rem] overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-400/12 via-blue-500/10 to-violet-500/12 p-8 md:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_28%)]" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">StableMind</div>
              <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mt-3 leading-tight max-w-3xl">
                The future of AI will not be governed by vibes. It will be governed by systems.
              </h2>
              <p className="text-slate-200/90 text-lg leading-8 mt-5 max-w-3xl">
                StableMind is building that system. For enterprises. For investors. For the next generation of exceptional builders.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:min-w-[240px]">
              <Button size="lg" className="rounded-2xl bg-white text-slate-950 hover:bg-slate-100 h-13 px-6 text-base">
                Talk to us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white h-13 px-6 text-base">
                hello@stablemind.io
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-[1px]">
            <div className="h-full w-full rounded-2xl bg-slate-950 flex items-center justify-center">
              <Orbit className="h-4 w-4 text-cyan-300" />
            </div>
          </div>
          <div>
            <div className="text-slate-300 font-medium">StableMind</div>
            <div>Governance infrastructure for advanced AI</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#platform" className="hover:text-slate-300 transition-colors">Platform</a>
          <a href="#architecture" className="hover:text-slate-300 transition-colors">Architecture</a>
          <a href="#use-cases" className="hover:text-slate-300 transition-colors">Use Cases</a>
          <a href="#careers" className="hover:text-slate-300 transition-colors">Careers</a>
          <a href="#faq" className="hover:text-slate-300 transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
}

export default function StableMindLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300/20 selection:text-white">
      <NavBar />
      <Hero />
      <AudienceStrip />
      <Pillars />
      <ArchitectureSection />
      <ProductTabs />
      <UseCasesSection />
      <MoatSection />
      <CareersSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
