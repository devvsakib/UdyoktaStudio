import React, { useState } from 'react';
import {
    Activity,
    Layers,
    Zap,
    Shield,
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Users,
    ChevronRight,
    Star,
    Globe,
    Lock,
    Menu,
    X
} from 'lucide-react';

export default function BusinessLandingPage() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            id: 1,
            title: "Automated Data Streams",
            desc: "Synchronize raw operational data streams across global pipelines using our proprietary edge routing layer.",
            icon: Zap
        },
        {
            id: 2,
            title: "Predictive Analytics Engine",
            desc: "Leverage advanced heuristics to spot churn trends and system bottlenecks up to 14 days before they manifest.",
            icon: Activity
        },
        {
            id: 3,
            title: "Isolation Architecture",
            desc: "Bank-grade tenant partitioning combined with end-to-end cryptographic payload signing.",
            icon: Shield
        }
    ];

    const pricingPlans = [
        {
            name: "Growth",
            desc: "Ideal for accelerating modern software teams.",
            monthlyPrice: 49,
            annualPrice: 39,
            features: ["Up to 10 team seats", "50GB secure data storage", "Next-day email intervals", "Core analytical dashboard access"],
            isPopular: false
        },
        {
            name: "Scale Pro",
            desc: "Optimized for large cross-functional operations.",
            monthlyPrice: 99,
            annualPrice: 79,
            features: ["Unlimited live team seats", "500GB secure data storage", "Instant Slack webhook webhooks", "Advanced predictive models", "Dedicated account audit support"],
            isPopular: true
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-600!/10">

            {/* NAVIGATION BAR */}
            <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50 transition-all">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600! flex items-center justify-center text-white font-black text-lg tracking-wider">Ω</div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">STRATOS</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
                        <a href="#features" className="hover:text-indigo-600 transition">Features</a>
                        <a href="#solutions" className="hover:text-indigo-600 transition">Solutions</a>
                        <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
                        <a href="#testimonials" className="hover:text-indigo-600 transition">Clients</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition">Sign In</button>
                        <button className="bg-indigo-600! text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-sm">
                            Start Free Trial
                        </button>
                    </div>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1 text-slate-600">
                        {mobileMenuOpen ? <X className="w-6 trim" /> : <Menu className="w-6 trim" />}
                    </button>
                </div>

                {/* Mobile Dropdown Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 shadow-xl">
                        <a href="#features" className="block text-sm font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Features</a>
                        <a href="#solutions" className="block text-sm font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
                        <a href="#pricing" className="block text-sm font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                        <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                            <button className="w-full text-center py-2 text-sm font-medium text-slate-600">Sign In</button>
                            <button className="w-full text-center py-2 text-sm bg-indigo-600! text-white rounded-lg font-medium">Start Free Trial</button>
                        </div>
                    </div>
                )}
            </nav>

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Stratos v4.2 Release Architecture</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
                        Consolidate your <span className="text-indigo-600">business intelligence</span> architecture.
                    </h1>

                    <p className="text-slate-500 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg font-normal leading-relaxed">
                        Eliminate fragmented analytics silos. Build, audit, deploy, and observe micro-conversions across infinite data ecosystems with zero engineering friction.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
                        <button className="w-full sm:w-auto bg-indigo-600! text-white px-8 py-4 rounded-xl font-bold text-sm shadow-md shadow-indigo-600/10 hover:bg-indigo-700 transition">
                            Deploy Stratos Free
                        </button>
                        <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-6 py-4 rounded-xl font-bold text-sm hover:bg-slate-50 transition flex items-center justify-center space-x-2">
                            <span>Schedule Architecture Demo</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Dashboard Preview Module */}
                <div className="lg:col-span-6">
                    <div className="bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-2xl border border-slate-800 relative">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                            <div className="flex space-x-1.5">
                                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-500">stratos-cluster-01 // analytics</span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
                                <p className="text-[10px] text-slate-400 font-medium">Ingestion Rate</p>
                                <p className="text-base sm:text-lg font-bold text-emerald-400 mt-1">99.98%</p>
                            </div>
                            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
                                <p className="text-[10px] text-slate-400 font-medium">Query Latency</p>
                                <p className="text-base sm:text-lg font-bold text-slate-100 mt-1">12ms</p>
                            </div>
                            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/30">
                                <p className="text-[10px] text-slate-400 font-medium">Active Nodes</p>
                                <p className="text-base sm:text-lg font-bold text-indigo-400 mt-1">1,024</p>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                                alt="Analytical platform graph chart overview"
                                className="w-full h-full object-cover opacity-85 contrast-125"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE CAPABILITIES GRID */}
            <section id="features" className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-[2rem] shadow-sm border border-slate-200/50">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                    <span className="text-xs uppercase tracking-widest text-indigo-600 font-bold">Enterprise Engine</span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Engineered for intense workloads</h2>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
                        Stratos scales elastically to meet global application requirements without database locking, manual indexing, or expensive pipeline overhauls.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feat) => {
                        const IconComponent = feat.icon;
                        return (
                            <div key={feat.id} className="p-6 bg-slate-50 rounded-xl border border-slate-100 group hover:border-indigo-500/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="p-3 bg-indigo-600! text-white rounded-lg w-fit mb-6 shadow-md shadow-indigo-600/10">
                                    <IconComponent className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{feat.title}</h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                                    {feat.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* INTERACTIVE PRICING MATRIX */}
            <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
                <div className="text-center space-y-4 mb-12">
                    <span className="text-xs uppercase tracking-widest text-indigo-600 font-bold">Transparent Subscription Models</span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Flexible pricing plans built to grow</h2>

                    {/* Dynamic Price Toggle Switch Control */}
                    <div className="pt-4 flex items-center justify-center space-x-3">
                        <span className={`text-xs font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly Billing</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-12 h-6 bg-indigo-600! rounded-full p-1 transition-colors relative focus:outline-none"
                        >
                            <div className={`w-4 h-4 bg-white rounded-full transition-all shadow-md transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-xs font-semibold ${isAnnual ? 'text-indigo-600' : 'text-slate-400'} flex items-center space-x-1.5`}>
                            <span>Annual Billing</span>
                            <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase">Save 20%</span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    {pricingPlans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${plan.isPopular
                                    ? 'border-indigo-600 shadow-xl scale-105 md:z-10'
                                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                                }`}
                        >
                            {plan.isPopular && (
                                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600! text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    Recommended Choice
                                </span>
                            )}

                            <div>
                                <h4 className="text-xl font-bold text-slate-900">{plan.name}</h4>
                                <p className="text-slate-400 text-xs mt-1">{plan.desc}</p>

                                <div className="my-6 flex items-baseline">
                                    <span className="text-4xl font-black tracking-tight text-slate-900">
                                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-slate-400 text-xs font-medium ml-2">/ month / billed annually</span>
                                </div>

                                <div className="w-full h-[1px] bg-slate-100 my-6" />

                                <ul className="space-y-3">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8">
                                <button
                                    className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition ${plan.isPopular
                                            ? 'bg-indigo-600! text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/10'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    Acquire {plan.name} License
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SOCIAL PROOF / BUSINESS CONVERSION BANNER */}
            <section id="testimonials" className="max-w-7xl mx-auto px-6 pb-24">
                <div className="bg-slate-900 rounded-[2rem] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-white relative overflow-hidden">
                    <div className="lg:col-span-7 space-y-4 z-10">
                        <div className="flex text-amber-400"><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /></div>
                        <p className="text-lg sm:text-xl font-medium leading-relaxed italic text-slate-200">
                            "Transitioning our historical logs over to Stratos prevented a major pipeline saturation failure during peak transaction intervals. The predictive heuristics modeling paid for itself inside the first financial deployment cycle."
                        </p>
                        <div>
                            <p className="text-sm font-bold text-white font-sans">Theresa Mayers</p>
                            <p className="text-xs text-slate-500">VP of Infrastructure, CloudScale Systems</p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                        <div className="w-64 sm:w-72 aspect-square rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800 p-2">
                            <img
                                src="https://i.pinimg.com/1200x/57/be/84/57be849433fc4628a2b82122fd2284d8.jpg"
                                alt="Executive VP of Engineering Customer Review Profile"
                                className="w-full h-full object-top object-cover rounded-xl grayscale contrast-115"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* STANDARD CORPORATE FOOTER LINK INDEX */}
            <footer className="bg-white border-t border-slate-200 text-xs text-slate-500 py-12 font-medium">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-indigo-600! flex items-center justify-center text-white font-black text-xs">Ω</div>
                        <span className="font-bold tracking-tight text-slate-900 uppercase">STRATOS INC.</span>
                    </div>
                    <p>© 2026 Stratos Cloud Infrastructure Architecture. All rights reserved globally.</p>
                    <div className="flex space-x-6 text-slate-400">
                        <span className="flex items-center space-x-1"><Lock className="w-3 h-3" /> <span>SOC2 Type II Certified</span></span>
                        <span className="flex items-center space-x-1"><Globe className="w-3 h-3" /> <span>ISO 27001</span></span>
                    </div>
                </div>
            </footer>

        </div>
    );
}