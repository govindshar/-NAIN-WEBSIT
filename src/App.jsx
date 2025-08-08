import './index.css'
import React from "react";
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Shield, Headphones, Globe, Mic, MapPin, HeartPulse, BookOpenCheck, Radio, BrainCircuit, Server, Cpu, Sparkles, ArrowRight, ArrowUpRight, BadgeCheck, CheckCircle2, Linkedin, Github, Twitter, Mail } from "lucide-react";

// ----------------------
// Theme helpers
// ----------------------
const cx = (...cls) => cls.filter(Boolean).join(" ");
const brand = {
  bg: "bg-black",
  panel: "bg-zinc-900",
  card: "bg-zinc-900/60",
  border: "border-zinc-800",
  text: "text-zinc-200",
  subtext: "text-zinc-400",
  accent: "text-blue-400",
  accentBg: "bg-blue-500",
  accentRing: "ring-blue-500/30",
};

// ----------------------
// Shared UI
// ----------------------
const Container = ({ className = "", children }) => (
  <div className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);

const Button = ({ as = "button", href, onClick, children, variant = "primary", className = "" }) => {
  const base = "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2";
  const variants = {
    primary: `${brand.accentBg} text-white hover:brightness-110 focus-visible:${brand.accentRing}`,
    ghost: `bg-transparent ${brand.text} ring-1 ring-inset ring-zinc-800 hover:ring-zinc-700`,
    outline: `bg-transparent ${brand.text} border border-zinc-700 hover:border-zinc-600`,
  };
  const cls = cx(base, variants[variant], className);
  if (as === "a") return (<a href={href} className={cls}>{children}</a>);
  return (<button onClick={onClick} className={cls}>{children}</button>);
};

const Pill = ({ children, className = "" }) => (
  <span className={cx("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium", brand.border, brand.subtext, className)}>{children}</span>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mb-10 text-center">
    {eyebrow && <div className="mb-3"><Pill>{eyebrow}</Pill></div>}
    <h2 className={cx("text-3xl sm:text-4xl font-bold tracking-tight", brand.text)}>{title}</h2>
    {subtitle && <p className={cx("mt-3 max-w-2xl mx-auto", brand.subtext)}>{subtitle}</p>}
  </div>
);

// ----------------------
// Nav + Footer
// ----------------------
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/solutions", label: "Solutions" },
  { to: "/technology", label: "Technology" },
  { to: "/pricing", label: "Pricing" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className={cx("sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-black/50", brand.border)}>
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600" />
          <span className={cx("text-lg font-bold", brand.text)}>NAIN</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => cx("text-sm font-medium", isActive ? "text-blue-400" : brand.subtext, "hover:text-zinc-200")}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/contact"><Button variant="ghost"><Phone className="h-4 w-4"/> Talk to Sales</Button></NavLink>
          <NavLink to="/signup"><Button>Get Started <ArrowRight className="h-4 w-4"/></Button></NavLink>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className={brand.text} /> : <Menu className={brand.text} />}
        </button>
      </Container>
      {open && (
        <div className={cx("md:hidden border-t", brand.border)}>
          <Container className="py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => cx("text-sm font-medium", isActive ? "text-blue-400" : brand.subtext)}>{l.label}</NavLink>
            ))}
            <div className="pt-2 flex gap-3">
              <NavLink to="/contact" onClick={() => setOpen(false)}><Button variant="ghost" className="w-full justify-center"><Phone className="h-4 w-4"/> Talk to Sales</Button></NavLink>
              <NavLink to="/signup" onClick={() => setOpen(false)}><Button className="w-full justify-center">Get Started</Button></NavLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className={cx("mt-24 border-t", brand.border)}>
    <Container className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="col-span-2">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600" />
          <span className={cx("text-lg font-bold", brand.text)}>NAIN</span>
        </div>
        <p className={cx("mt-4 max-w-md", brand.subtext)}>Talk to AI without apps, screens, or internet. The No‑Internet AI Network that works over landlines and 2G.</p>
        <div className="mt-4 flex items-center gap-3">
          <a href="#" aria-label="LinkedIn" className={brand.subtext}><Linkedin /></a>
          <a href="#" aria-label="Twitter" className={brand.subtext}><Twitter /></a>
          <a href="#" aria-label="GitHub" className={brand.subtext}><Github /></a>
          <a href="mailto:hello@nain.ai" aria-label="Email" className={brand.subtext}><Mail /></a>
        </div>
      </div>
      <div>
        <h4 className={cx("font-semibold", brand.text)}>Product</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li><NavLink to="/product" className="hover:text-zinc-200">Overview</NavLink></li>
          <li><NavLink to="/technology" className="hover:text-zinc-200">How it works</NavLink></li>
          <li><NavLink to="/pricing" className="hover:text-zinc-200">Pricing</NavLink></li>
          <li><NavLink to="/case-studies" className="hover:text-zinc-200">Case studies</NavLink></li>
        </ul>
      </div>
      <div>
        <h4 className={cx("font-semibold", brand.text)}>Company</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li><NavLink to="/about" className="hover:text-zinc-200">About</NavLink></li>
          <li><NavLink to="/careers" className="hover:text-zinc-200">Careers</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-zinc-200">Contact</NavLink></li>
          <li><NavLink to="/legal/privacy" className="hover:text-zinc-200">Privacy</NavLink></li>
        </ul>
      </div>
    </Container>
    <div className="border-t border-zinc-800 py-6">
      <Container className="flex items-center justify-between text-xs">
        <p className={brand.subtext}>© {new Date().getFullYear()} NAIN Protocol. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <NavLink to="/legal/terms" className={brand.subtext}>Terms</NavLink>
          <NavLink to="/legal/privacy" className={brand.subtext}>Privacy</NavLink>
          <NavLink to="/legal/security" className={brand.subtext}>Security</NavLink>
        </div>
      </Container>
    </div>
  </footer>
);

// ----------------------
// Home
// ----------------------
const Home = () => {
  const navigate = useNavigate();
  return (
    <main className={brand.bg}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.15),transparent_50%)]" />
        <Container className="pt-16 pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Pill><BadgeCheck className="h-4 w-4"/> No‑Internet AI Network</Pill>
              <h1 className={cx("mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight", brand.text)}>
                Talk to AI over a simple phone call.
              </h1>
              <p className={cx("mt-4 text-lg max-w-xl", brand.subtext)}>
                NAIN lets anyone access AI via landline or 2G — no apps, no screens, no internet. Healthcare, government schemes, education, and more — in any language.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => navigate("/signup")}>Get Started <ArrowRight className="h-4 w-4"/></Button>
                <Button variant="ghost" onClick={() => navigate("/technology")}>See how it works <ArrowUpRight className="h-4 w-4"/></Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { k: "2.5B", v: "2G users" },
                  { k: "900M+", v: "2G in India" },
                  { k: "₹30–60", v: "Avg. call cost" },
                ].map((s) => (
                  <div key={s.k} className={cx("rounded-2xl p-4 border", brand.border, brand.card)}>
                    <p className="text-2xl font-bold text-blue-400">{s.k}</p>
                    <p className={cx("text-xs mt-1", brand.subtext)}>{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border shadow-2xl ring-1 ring-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-md">
                  {[
                    { icon: <Globe/>, label: "Govt Services" },
                    { icon: <HeartPulse/>, label: "Healthcare" },
                    { icon: <BookOpenCheck/>, label: "Education" },
                    { icon: <Radio/>, label: "News & Radio" },
                  ].map((it) => (
                    <div key={it.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 flex flex-col items-center text-center">
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">{it.icon}</div>
                      <p className="mt-2 text-xs text-zinc-300">{it.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rotate-2">
                <Pill className="bg-blue-500/10 text-blue-300 border-blue-700">Built for low-connectivity regions</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Logos */}
      <section className="border-t border-zinc-800">
        <Container className="py-10">
          <p className={cx("text-center text-xs uppercase tracking-widest", brand.subtext)}>Recognitions & Wins</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
            {[
              "IEEE Hackathon Winner",
              "IIT Hyderabad Hackathon",
              "Aithemis Legal LLM",
              "Nirwana.AI $13M Valuation",
            ].map((name) => (
              <div key={name} className="h-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs text-zinc-400">
                {name}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800">
        <Container className="py-16">
          <SectionTitle eyebrow="Why NAIN" title="AI access with zero tech barriers" subtitle="Designed for landlines, 2G and low‑literacy users. Multilingual, resilient, and secure."/>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Mic/>, title: "Voice‑only Interface", text: "Call a number, speak naturally, get answers. No apps or data required." },
              { icon: <Shield/>, title: "Private & Secure", text: "End‑to‑end safeguards with on‑prem inference options for sensitive use‑cases." },
              { icon: <Headphones/>, title: "Scale Helplines", text: "Augment hotlines with AI triage to reduce wait times and costs." },
              { icon: <MapPin/>, title: "Rural‑ready", text: "Optimized for patchy networks with graceful fallbacks to SMS/IVR flows." },
              { icon: <BrainCircuit/>, title: "Domain LLMs", text: "Plug domain‑specific models for healthcare, agriculture, education and more." },
              { icon: <Sparkles/>, title: "Multilingual", text: "Serve users in local languages with intent routing and TTS/STT pipelines." },
            ].map((f) => (
              <div key={f.title} className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 w-fit">{f.icon}</div>
                <h3 className={cx("mt-3 font-semibold", brand.text)}>{f.title}</h3>
                <p className={cx("mt-2 text-sm", brand.subtext)}>{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-zinc-800">
        <Container className="py-16">
          <SectionTitle eyebrow="How it works" title="Telephony → Voice AI → On‑device LLM" subtitle="Modular stack that runs on low‑cost, offline‑friendly hardware."/>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: <Phone/>, title: "Telephony Layer", text: "GSM/SIP call capture & routing with IVR orchestration and queueing." },
              { icon: <Mic/>, title: "Voice Interface", text: "Speech‑to‑text + text‑to‑speech pipelines tuned for noisy calls." },
              { icon: <Cpu/>, title: "Core Intelligence", text: "On‑device LLM inference engine with domain tools and guardrails." },
            ].map((s, i) => (
              <div key={s.title} className={cx("rounded-2xl p-6 border relative overflow-hidden", brand.border, brand.card)}>
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10"/>
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 w-fit">{s.icon}</div>
                <p className="mt-3 text-sm text-blue-300">Step {i+1}</p>
                <h3 className={cx("font-semibold", brand.text)}>{s.title}</h3>
                <p className={cx("mt-2 text-sm", brand.subtext)}>{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800">
        <Container className="py-16">
          <div className="rounded-3xl border border-blue-700 bg-gradient-to-br from-blue-600 to-blue-500 px-8 py-12 text-white">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold">Ready to pilot NAIN in your organization?</h3>
                <p className="mt-2 text-white/90">Deploy in weeks, not months. Works with existing helplines. Start with one workflow and scale.</p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <Button as="a" href="#" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/15">View Integration Guide</Button>
                <Button as="a" href="#" className="bg-black text-white hover:bg-black/90">Book a Demo</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

// ----------------------
// Product Page
// ----------------------
const Product = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Product" title="Everything you need to run Voice‑AI without internet" subtitle="NAIN ships with admin console, call flows, model adapters, analytics, and tools for domain tuning."/>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Server/>, title: "Edge/On‑Prem Deployments", text: "Run on low‑cost edge servers. Keep data local for compliance." },
          { icon: <Headphones/>, title: "Smart Helplines", text: "AI triage + live agent handoff. Reduce average handling time." },
          { icon: <Shield/>, title: "Governance", text: "Audit logs, red teaming, and content safety guardrails by design." },
          { icon: <Sparkles/>, title: "LLM Adapters", text: "Plug in domain models (healthcare, agri, education) and tools." },
          { icon: <Globe/>, title: "Language Packs", text: "Hindi, English, and regional languages with TTS/STT tuning." },
          { icon: <BadgeCheck/>, title: "Reliability", text: "Designed for patchy networks: retries, SMS fallbacks, caching." },
        ].map((f) => (
          <div key={f.title} className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 w-fit">{f.icon}</div>
            <h3 className={cx("mt-3 font-semibold", brand.text)}>{f.title}</h3>
            <p className={cx("mt-2 text-sm", brand.subtext)}>{f.text}</p>
          </div>
        ))}
      </div>
    </Container>
  </main>
);

// ----------------------
// Solutions Page
// ----------------------
const Solutions = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Solutions" title="Purpose‑built playbooks" subtitle="Healthcare triage, government schemes advisor, agri support, education tutoring, voice news, and more."/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <HeartPulse/>, title: "Healthcare Helpline", items: ["Symptom triage", "Protocol‑based guidance", "Escalation & handoff"] },
          { icon: <Globe/>, title: "Govt Schemes", items: ["Eligibility Q&A", "Document checklist", "Deadline reminders"] },
          { icon: <BookOpenCheck/>, title: "Education", items: ["Concept explainers", "Practice questions", "Local languages"] },
          { icon: <Radio/>, title: "Voice News", items: ["Daily bulletins", "IVR subscriptions", "Regional feeds"] },
          { icon: <MapPin/>, title: "Rural Services", items: ["Navigation & info", "Kiosk mode", "SMS fallback"] },
          { icon: <Headphones/>, title: "Call Centers", items: ["Agent assist", "Deflection flows", "Analytics"] },
        ].map((s) => (
          <div key={s.title} className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 w-fit">{s.icon}</div>
            <h3 className={cx("mt-3 font-semibold", brand.text)}>{s.title}</h3>
            <ul className={cx("mt-2 space-y-1 text-sm list-disc list-inside", brand.subtext)}>
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </main>
);

// ----------------------
// Technology Page
// ----------------------
const Technology = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Technology" title="Modular, secure, and offline‑friendly" subtitle="Telephony → Voice → LLM stack with governance and analytics."/>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
          <h3 className={cx("font-semibold", brand.text)}>Architecture</h3>
          <ol className={cx("mt-3 space-y-2 list-decimal list-inside", brand.subtext)}>
            <li>GSM/SIP ingress with IVR router and queue.</li>
            <li>STT pipeline → Intent Router → Tools/KB.</li>
            <li>On‑device LLM inference with guardrails.</li>
            <li>TTS pipeline → Telephony egress with fallbacks.</li>
            <li>Observability: Logs, red‑teaming, analytics.</li>
          </ol>
        </div>
        <div className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
          <h3 className={cx("font-semibold", brand.text)}>Security & Compliance</h3>
          <ul className={cx("mt-3 space-y-2 list-disc list-inside", brand.subtext)}>
            <li>PII minimization with on‑prem storage option.</li>
            <li>Access controls, audit trails, and rate‑limits.</li>
            <li>Content safety filters and jailbreak protection.</li>
            <li>Region‑specific data residency.</li>
          </ul>
        </div>
      </div>
    </Container>
  </main>
);

// ----------------------
// Pricing Page
// ----------------------
const Pricing = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Pricing" title="Simple plans for pilots and scale" subtitle="Start small, pay as you grow. Custom SLAs available."/>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Pilot", price: "₹29,000/mo", features: ["Up to 5K minutes", "1 use‑case", "Email support"] },
          { name: "Growth", price: "₹99,000/mo", features: ["Up to 50K minutes", "3 use‑cases", "9×5 support"] },
          { name: "Enterprise", price: "Talk to Sales", features: ["Unlimited minutes", "On‑prem options", "24×7 support"] },
        ].map((p, i) => (
          <div key={p.name} className={cx("rounded-2xl p-6 border", brand.border, i===1 ? "ring-2 ring-blue-500" : brand.card)}>
            <h3 className={cx("font-semibold", brand.text)}>{p.name}</h3>
            <p className="mt-1 text-2xl text-blue-400">{p.price}</p>
            <ul className={cx("mt-3 text-sm space-y-1", brand.subtext)}>
              {p.features.map((f) => <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400"/>{f}</li>)}
            </ul>
            <Button as="a" href="#" className="mt-4 w-full justify-center">Choose {p.name}</Button>
          </div>
        ))}
      </div>
      <p className={cx("mt-6 text-center text-xs", brand.subtext)}>Prices are indicative. Taxes extra. Volume discounts available.</p>
    </Container>
  </main>
);

// ----------------------
// Case Studies Page
// ----------------------
const CaseStudies = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Case Studies" title="Real‑world impact" subtitle="Selected wins and pilots across sectors."/>
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2,3,4].map((id) => (
          <article key={id} className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
            <h3 className={cx("font-semibold", brand.text)}>Project #{id}</h3>
            <p className={cx("mt-2 text-sm", brand.subtext)}>Describe the problem, solution, and outcome in 4–6 lines. Include baseline metrics and measured improvements (e.g., 40% faster response, 60% call deflection).</p>
            <div className="mt-3 flex gap-3">
              <Pill>Healthcare</Pill>
              <Pill>2G</Pill>
              <Pill>On‑prem</Pill>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </main>
);

// ----------------------
// Resources Page (Blog/Docs placeholder)
// ----------------------
const Resources = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Resources" title="Guides, docs, and updates" subtitle="Everything you need to evaluate, integrate, and deploy NAIN."/>
      <div className="grid md:grid-cols-3 gap-6">
        {["Integration Guide","Telephony Playbook","Safety & Guardrails","Rural UX Checklist","LLM Tuning","FAQ"].map((t) => (
          <div key={t} className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
            <h3 className={cx("font-semibold", brand.text)}>{t}</h3>
            <p className={cx("mt-2 text-sm", brand.subtext)}>Short intro paragraph and a link to learn more.</p>
            <Button as="a" href="#" variant="ghost" className="mt-3">Read more</Button>
          </div>
        ))}
      </div>
    </Container>
  </main>
);

// ----------------------
// About Page
// ----------------------
const About = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="About" title="Built by practitioners of applied AI" subtitle="Founder: Govind Sharma — Data Scientist, Researcher."/>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
          <h3 className={cx("font-semibold", brand.text)}>Mission</h3>
          <p className={cx("mt-2 text-sm", brand.subtext)}>We believe AI should not be a luxury. Every human voice deserves access to intelligence — no matter where they are or what device they use.</p>
        </div>
        <div className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
          <h3 className={cx("font-semibold", brand.text)}>Highlights</h3>
          <ul className={cx("mt-2 text-sm list-disc list-inside", brand.subtext)}>
            <li>Built India’s first domain‑specific Legal LLM for law schools and firms.</li>
            <li>Scaled a GenAI product to $13M valuation by cutting delivery time by 85%.</li>
            <li>Offline SMS‑based AI clinical care system for low‑connectivity regions.</li>
            <li>Winners/shortlists at IEEE + IIT Hyderabad hackathons.</li>
          </ul>
        </div>
      </div>
    </Container>
  </main>
);

// ----------------------
// Contact Page
// ----------------------
const Contact = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Contact" title="Let’s talk" subtitle="Tell us about your use‑case and timeline. We’ll get back within 24 hours."/>
      <div className="grid lg:grid-cols-2 gap-8">
        <form className={cx("rounded-2xl p-6 border", brand.border, brand.card)} onSubmit={(e)=>e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={cx("text-xs", brand.subtext)}>Name</label>
              <input className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100" placeholder="Your name"/>
            </div>
            <div>
              <label className={cx("text-xs", brand.subtext)}>Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100" placeholder="you@company.com"/>
            </div>
            <div className="sm:col-span-2">
              <label className={cx("text-xs", brand.subtext)}>Company</label>
              <input className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100" placeholder="Organization"/>
            </div>
            <div className="sm:col-span-2">
              <label className={cx("text-xs", brand.subtext)}>Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100" placeholder="What would you like to build with NAIN?"/>
            </div>
          </div>
          <Button className="mt-4">Send</Button>
        </form>
        <div className="space-y-6">
          <div className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
            <h3 className={cx("font-semibold", brand.text)}>Sales</h3>
            <p className={cx("mt-2 text-sm", brand.subtext)}>hello@nain.ai</p>
          </div>
          <div className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
            <h3 className={cx("font-semibold", brand.text)}>Support</h3>
            <p className={cx("mt-2 text-sm", brand.subtext)}>support@nain.ai</p>
          </div>
        </div>
      </div>
    </Container>
  </main>
);

// ----------------------
// Legal Pages (placeholders)
// ----------------------
const LegalPage = ({ title }) => (
  <main className={brand.bg}>
    <Container className="py-16">
      <h1 className={cx("text-3xl font-bold", brand.text)}>{title}</h1>
      <p className={cx("mt-4", brand.subtext)}>Your {title.toLowerCase()} content goes here. Update with your policies and compliance statements.</p>
    </Container>
  </main>
);

// ----------------------
// Careers (placeholder)
// ----------------------
const Careers = () => (
  <main className={brand.bg}>
    <Container className="py-16">
      <SectionTitle eyebrow="Careers" title="Join us" subtitle="We’re hiring builders who care about access and inclusion."/>
      <div className="grid md:grid-cols-2 gap-6">
        {["Voice/Telephony Engineer","Full‑stack Engineer (React)","AI Engineer (LLMs)","Customer Success"].map((role)=> (
          <div key={role} className={cx("rounded-2xl p-6 border", brand.border, brand.card)}>
            <h3 className={cx("font-semibold", brand.text)}>{role}</h3>
            <p className={cx("mt-2 text-sm", brand.subtext)}>Describe responsibilities, requirements, and impact. Add an Apply link.</p>
            <Button as="a" href="#" variant="ghost" className="mt-3">View role</Button>
          </div>
        ))}
      </div>
    </Container>
  </main>
);

// ----------------------
// Signup (placeholder)
// ----------------------
const Signup = () => (
  <main className={brand.bg}>
    <Container className="py-16 max-w-xl">
      <SectionTitle eyebrow="Get Started" title="Create your pilot account" subtitle="We’ll set up a sandbox with sample call flows."/>
      <form className={cx("rounded-2xl p-6 border", brand.border, brand.card)} onSubmit={(e)=>e.preventDefault()}>
        <div className="grid gap-4">
          <input className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100" placeholder="Work email"/>
          <input className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100" placeholder="Company"/>
          <select className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-100">
            <option>Use‑case: Healthcare</option>
            <option>Use‑case: Govt Schemes</option>
            <option>Use‑case: Education</option>
            <option>Use‑case: Other</option>
          </select>
          <Button>Create account</Button>
        </div>
      </form>
    </Container>
  </main>
);

// ----------------------
// App Shell
// ----------------------
export default function App() {
  return (
    <div className={cx(brand.bg, brand.text, "min-h-screen font-sans")}> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/legal/privacy" element={<LegalPage title="Privacy Policy" />} />
          <Route path="/legal/terms" element={<LegalPage title="Terms of Service" />} />
          <Route path="/legal/security" element={<LegalPage title="Security" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
