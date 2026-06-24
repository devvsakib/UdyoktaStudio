import React, { useState } from 'react';
import {
    ArrowUpRight,
    Check,
    ShieldCheck,
    Zap,
    HelpCircle,
    CreditCard,
    Briefcase,
    Coins,
    Star,
    Award,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    UserCheck
} from 'lucide-react';

export default function XenonBankLanding() {
    const [activeTab, setActiveTab] = useState('line-of-credit');

    const productDetails = {
        'line-of-credit': {
            title: "Business Line of Credit",
            tagline: "A flexible and convenient way to access cash for your business needs. Use it as you need it and only pay interest on what you borrow. Perfect for unexpected expenses.",
            benefits: [
                "Easy access to funds as and when needed",
                "Flexible repayment options aligned with revenue",
                "Interest only on funds actively borrowed"
            ],
            img: "https://i.pinimg.com/1200x/ed/d5/dd/edd5dddb66d5ea7abe9473a3b84d534e.jpg"
        },
        'equipment': {
            title: "Equipment Financing",
            tagline: "Acquire business-critical machinery, hardware, or vehicles without depleting active liquid reserves. Preserve capital while boosting team operational output.",
            benefits: [
                "Up to 100% financing options available",
                "Tax benefits through equipment depreciation paths",
                "Fixed competitive monthly terms"
            ],
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
        },
        'merchant': {
            title: "Merchant Services",
            tagline: "Optimize payment infrastructure with modern high-throughput processing layer. Handle omni-channel point-of-sale customer receipts with absolute structural integrity.",
            benefits: [
                "Next-day settlement intervals on core currencies",
                "Built-in cryptographic risk & fraud engine layers",
                "Native conversion optimization dashboards"
            ],
            img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=600&auto=format&fit=crop"
        }
    };

    return (
        <div className="min-h-screen bg-[#F4F6F8] text-[#111622] font-sans antialiased selection:bg-[#00DF89]/20">

            {/* --- HERO / NAV HEADER CONTAINER (Dark Section inspired by image_da41c1.jpg) --- */}
            <div className="bg-[#0A111E] text-white rounded-b-[2.5rem] lg:rounded-b-[4rem] relative overflow-hidden pb-16">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00DF89]/5 rounded-full filter blur-[120px] pointer-events-none" />

                {/* Navigation */}
                <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-[#00DF89] flex items-center justify-center text-[#0A111E] font-black text-sm">X</div>
                        <span className="text-lg font-bold tracking-wider font-sans text-white">XENON</span>
                    </div>
                    <nav className="hidden md:flex space-x-8 text-xs font-semibold tracking-wider uppercase text-slate-400">
                        <a href="#" className="text-white">Home</a>
                        <a href="#" className="hover:text-white transition">Products</a>
                        <a href="#" className="hover:text-white transition">Features</a>
                        <a href="#" className="hover:text-white transition">How to Apply</a>
                        <a href="#" className="hover:text-white transition">Tools</a>
                    </nav>
                    <button className="bg-[#00DF89] text-[#0A111E] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#00c377] transition">
                        Apply Now
                    </button>
                </header>

                {/* Hero Content */}
                <section className="max-w-7xl mx-auto px-6 pt-12 lg:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
                            Unlock Your <span className="font-bold border-b-4 border-[#00DF89]/30 pb-1">Business</span> Potential with Xenon Bank
                        </h1>
                        <p className="text-slate-400 text-sm sm:text-base font-normal max-w-md leading-relaxed">
                            Achieve business success with Xenon Bank. Our comprehensive financial options help unlock your business potential and take your vision to the next level.
                        </p>
                        <div className="pt-2">
                            <button className="inline-flex items-center space-x-2 bg-[#00DF89] text-[#0A111E] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#00c377] transition shadow-lg shadow-[#00DF89]/10">
                                <span>Apply Now</span>
                                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                            </button>
                        </div>

                        {/* Award badge asset placeholder */}
                        <div className="pt-6 border-t border-white/5 flex items-center space-x-3 text-xs text-slate-400">
                            <Award className="w-5 h-5 text-amber-500" />
                            <span>2026 Financial Excellence Winner — Business Banking Category</span>
                        </div>
                    </div>

                    {/* Center Image Frame Layer with Arched Accent */}
                    <div className="lg:col-span-4 flex justify-center relative">
                        <div className="w-72 aspect-[4/5] bg-gradient-to-b from-[#00DF89]/30 to-[#00DF89]/0 rounded-t-[10rem] p-2 relative">
                            <div className="w-full h-full rounded-t-[9.5rem] overflow-hidden bg-slate-800 border border-white/10 shadow-2xl">
                                <img
                                    src="https://i.pinimg.com/1200x/ed/d5/dd/edd5dddb66d5ea7abe9473a3b84d534e.jpg"
                                    alt="Executive business analyst portrait"
                                    className="w-full h-full object-cover object-center filter grayscale contrast-115"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Floating Bullet Connector Items */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start space-x-3">
                            <span className="w-2 h-2 rounded-full bg-[#00DF89] mt-1.5 flex-shrink-0" />
                            <div>
                                <h4 className="text-xs font-bold uppercase text-[#00DF89] tracking-wider">Fast Execution</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Quick application routing window.</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start space-x-3">
                            <span className="w-2 h-2 rounded-full bg-[#00DF89] mt-1.5 flex-shrink-0" />
                            <div>
                                <h4 className="text-xs font-bold uppercase text-[#00DF89] tracking-wider">Flexible Paths</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Custom payment calendars built per profile.</p>
                            </div>
                        </div>

                        {/* 12M Active Users Profile Overlay Group */}
                        <div className="pt-4 flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                            <div className="flex -space-x-2">
                                <div className="w-7 h-7 rounded-full bg-slate-700 border-2 border-[#0A111E]" />
                                <div className="w-7 h-7 rounded-full bg-[#00DF89] border-2 border-[#0A111E]" />
                                <div className="w-7 h-7 rounded-full bg-slate-500 border-2 border-[#0A111E]" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">12M+</p>
                                <p className="text-[10px] text-slate-400 uppercase font-semibold">Active Global Enterprises</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* --- PRODUCT SELECTOR INTERACTIVE TABS SECTION (White Layout from image_da41c1.jpg) --- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center max-w-xl mx-auto space-y-4 mb-12">
                    <h2 className="text-3xl font-light text-slate-900 leading-tight">
                        Financial Freedom with Xenon
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                        Our offerings are tailored to meet the unique needs and challenges of each business, and are designed to provide the funding and support necessary to help businesses reach their full potential.
                    </p>
                </div>

                {/* Tab Controls */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <button
                        onClick={() => setActiveTab('line-of-credit')}
                        className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${activeTab === 'line-of-credit'
                                ? 'bg-white text-[#0A111E] shadow-md border-slate-200'
                                : 'text-slate-500 border-transparent hover:text-slate-900'
                            }`}
                    >
                        Business Line of Credit
                    </button>
                    <button
                        onClick={() => setActiveTab('equipment')}
                        className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${activeTab === 'equipment'
                                ? 'bg-white text-[#0A111E] shadow-md border-slate-200'
                                : 'text-slate-500 border-transparent hover:text-slate-900'
                            }`}
                    >
                        Equipment Financing
                    </button>
                    <button
                        onClick={() => setActiveTab('merchant')}
                        className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${activeTab === 'merchant'
                                ? 'bg-white text-[#0A111E] shadow-md border-slate-200'
                                : 'text-slate-500 border-transparent hover:text-slate-900'
                            }`}
                    >
                        Merchant Services
                    </button>
                </div>

                {/* Tab Panel Content Box */}
                <div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200/60 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-[10px] font-bold tracking-widest text-[#00DF89] bg-[#0A111E] px-3 py-1 rounded uppercase font-sans">Featured Offer</span>
                        <h3 className="text-2xl font-bold text-slate-900">{productDetails[activeTab].title}</h3>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                            {productDetails[activeTab].tagline}
                        </p>

                        <div className="w-full h-[1px] bg-slate-100" />
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Core Benefits :</p>

                        <ul className="space-y-3">
                            {productDetails[activeTab].benefits.map((benefit, bIdx) => (
                                <li key={bIdx} className="flex items-center space-x-3 text-xs sm:text-sm text-slate-600">
                                    <span className="w-5 h-5 bg-[#00DF89]/10 rounded-full flex items-center justify-center text-[#00DF89] flex-shrink-0">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                    </span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <button className="inline-flex items-center space-x-2 bg-[#00DF89] text-[#0A111E] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#00c377] transition">
                                <span>Apply Now</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-7 h-full min-h-[260px] relative rounded-2xl overflow-hidden shadow-inner border border-slate-100">
                        <img
                            src={productDetails[activeTab].img}
                            alt={productDetails[activeTab].title}
                            className="absolute inset-0 w-full h-full object-cover object-top filter brightness-95"
                        />
                    </div>
                </div>
            </section>

            {/* --- ASYMMETRIC GRID FEATURE MODULE (Inspired by Center of image_da41c1.jpg) --- */}
            <section className="bg-white border-y border-slate-200/60 py-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 space-y-4">
                        <h2 className="text-3xl font-light text-slate-900 leading-tight">
                            Empower Your Business with Our <span className="font-bold text-[#00DF89] block lg:inline">Cutting-Edge Features</span>
                        </h2>
                        <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                            We design specialized features explicitly optimized to support complex, moving multi-currency corporate ledgers.
                        </p>
                        <div className="bg-[#0A111E] p-4 rounded-xl text-white flex items-center justify-between">
                            <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Privacy Assurance</p>
                                <p className="text-sm font-bold text-white mt-0.5">End-to-End Encryption</p>
                            </div>
                            <ShieldCheck className="w-8 h-8 text-[#00DF89]" />
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-[#F4F6F8] rounded-2xl space-y-3 border border-slate-200/40">
                            <HelpCircle className="w-6 h-6 text-indigo-600" />
                            <h4 className="font-bold text-slate-900 text-base">Expert Advice and Support</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">Our dedicated support team holds specialized training frameworks to help guide you safely across complex regulatory terrain paths.</p>
                        </div>
                        <div className="p-6 bg-[#F4F6F8] rounded-2xl space-y-3 border border-slate-200/40">
                            <Zap className="w-6 h-6 text-[#00DF89]" />
                            <h4 className="font-bold text-slate-900 text-base">Quick Approval Process</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">Applications route through deep automated compliance processing modules to provide verification parameters under 24 hours.</p>
                        </div>
                        <div className="p-6 bg-[#F4F6F8] rounded-2xl space-y-3 border border-slate-200/40">
                            <CreditCard className="w-6 h-6 text-amber-500" />
                            <h4 className="font-bold text-slate-900 text-base">Wide Range of Loan Products</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">Choose from structured inventory lines, long-term operational expansions, and tactical working capital adjustments seamlessly.</p>
                        </div>
                        <div className="p-6 bg-[#F4F6F8] rounded-2xl space-y-3 border border-slate-200/40">
                            <Coins className="w-6 h-6 text-emerald-600" />
                            <h4 className="font-bold text-slate-900 text-base">Flexible Repayment Structures</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">Configure specialized automated payout intervals matching internal revenue collections cycles accurately.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOCIAL PROOF & TESTIMONIAL PANEL --- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="space-y-1">
                        <span className="text-[10px] font-bold text-[#00DF89] uppercase tracking-widest font-sans">Empowering Communities</span>
                        <h2 className="text-3xl font-light text-slate-900">Our Positive <span className="font-bold">Social Impact</span></h2>
                    </div>

                    {/* Trustpilot Placeholder */}
                    <div className="bg-white border border-slate-200/80 p-4 rounded-xl inline-flex items-center space-x-3 shadow-sm">
                        <div className="flex text-emerald-500"><Star className="w-4 h-4 fill-emerald-500" /><Star className="w-4 h-4 fill-emerald-500" /><Star className="w-4 h-4 fill-emerald-500" /><Star className="w-4 h-4 fill-emerald-500" /><Star className="w-4 h-4 fill-emerald-500" /></div>
                        <span className="text-xs font-bold text-slate-900">Trustpilot 4.9 / 5.0</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border border-slate-200/60 p-6 lg:p-8 rounded-2xl shadow-sm relative">
                        <span className="text-5xl text-slate-200 font-serif absolute top-4 left-4 opacity-60">“</span>
                        <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed relative z-10 pt-4">
                            Working with Xenon Bank was a transformative experience. Their responsive credit allocation allowed us to acquire materials instantly when market pricing bottomed, protecting core margin curves significantly.
                        </p>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
                            {/* <div className="w-9 h-9 rounded-full bg-slate-200 flex-shrink-0" /> */}
                            <div>
                                <h4 className="text-xs font-bold text-slate-900">Cody Fisher</h4>
                                <p className="text-[10px] text-slate-400 font-medium">Small Business Owner</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/60 p-6 lg:p-8 rounded-2xl shadow-sm relative">
                        <span className="text-5xl text-slate-200 font-serif absolute top-4 left-4 opacity-60">“</span>
                        <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed relative z-10 pt-4">
                            The merchant processing architecture layers integrate directly via programmatic hook parameters, cutting out legacy delay overhead loops entirely. Their expert tech desk handles setups beautifully.
                        </p>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
                            {/* <div className="w-9 h-9 rounded-full bg-slate-200 flex-shrink-0" /> */}
                            <div>
                                <h4 className="text-xs font-bold text-slate-900">Jenny Wilson</h4>
                                <p className="text-[10px] text-slate-400 font-medium">Fintech Tech Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DARK LOGO/AWARD BADGES RECOGNITION STRIP (Bottom section of image_da41c1.jpg) --- */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="bg-[#0A111E] rounded-3xl p-8 text-center space-y-6">
                    <div className="flex items-center justify-center space-x-2 text-white/40 text-xs uppercase tracking-widest font-sans font-bold">
                        <span>Awards & Recognition</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-60 filter grayscale text-white text-sm font-bold tracking-wider">
                        <span className="hover:text-[#00DF89] transition cursor-pointer">INC 5000</span>
                        <span className="hover:text-[#00DF89] transition cursor-pointer">FORBES TRUST</span>
                        <span className="hover:text-[#00DF89] transition cursor-pointer">FINTECH 100</span>
                        <span className="hover:text-[#00DF89] transition cursor-pointer">GLOBAL BANK</span>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="border-t border-slate-200 bg-white py-12 text-xs text-slate-400 font-medium font-sans">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded bg-[#0A111E] flex items-center justify-center text-[#00DF89] font-black text-[10px]">X</div>
                        <span className="font-bold tracking-wider text-slate-900 uppercase">XENON BANK</span>
                    </div>
                    <p>© 2026 Xenon Bank & Capital Allocations Inc. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-slate-900 transition">Compliance Terms</a>
                        <a href="#" className="hover:text-slate-900 transition">Privacy Ledger</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}