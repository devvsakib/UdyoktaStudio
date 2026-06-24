import React from 'react';
import {
    Scale,
    ShieldCheck,
    Briefcase,
    Users,
    FileText,
    Gavel,
    Award,
    CheckCircle2,
    PhoneCall,
    ArrowRight,
    Play,
    Star,
    Search,
    Globe
} from 'lucide-react';

export default function LawyerLandingPage() {

    const practices = [
        {
            id: 1,
            title: "Criminal Law",
            desc: "Aggressive defense strategies for complex federal and state criminal allegations, safeguarding your constitutional rights.",
            icon: ShieldCheck,
            active: false
        },
        {
            id: 2,
            title: "Corporate Law",
            desc: "Comprehensive advisory for mergers, structural compliance, asset management, and complex cross-border contract negotiations.",
            icon: Briefcase,
            active: true // Highlights active card style inspired by image_d04d5b.jpg
        },
        {
            id: 3,
            title: "Family Law",
            desc: "Compassionate guidance through high-net-worth divorces, delicate custody arrangements, and generational estate planning.",
            icon: Users,
            active: false
        },
        {
            id: 4,
            title: "Real Estate Law",
            desc: "Structured title defense, zoning compliance mitigation, and risk-managed commercial transaction representation.",
            icon: FileText,
            active: false
        }
    ];

    const testimonials = [
        { id: 1, name: "Evelyn Thorne", role: "CEO, TechVanguard", text: "Their corporate team restructured our global entity structure flawlessly. Unparalleled attention to legal risk." },
        { id: 2, name: "Marcus Sterling", role: "Managing Director", text: "Exceptional strategy during our litigation. They understand both commercial realities and complex laws." },
        { id: 3, name: "Jonathan Drew", role: "Real Estate Investor", text: "Transparent communication and razor-sharp execution. Lexovia is our trusted lifelong legal partner." }
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F5] text-[#1E252B] font-serif selection:bg-amber-700/20 antialiased">

            {/* TOP ANNOUNCEMENT BAR */}
            <div className="bg-[#11161B] text-slate-400 text-xs py-2.5 px-6 border-b border-amber-900/20 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
                    <div className="flex items-center space-x-6">
                        <span>📞 +1 (123) 456-7890</span>
                        <span>✉️ contact@lexovia-law.com</span>
                        <span>📍 450 Lexington Ave, New York, NY 10017</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="hover:text-amber-500 cursor-pointer">In English</span>
                        <span className="text-amber-600/40">|</span>
                        <span className="hover:text-amber-500 cursor-pointer">En Español</span>
                    </div>
                </div>
            </div>

            {/* HEADER / NAVIGATION */}
            <header className="sticky top-0 bg-[#FAF9F5]/90 backdrop-blur-md z-50 border-b border-stone-200/60">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo Brand */}
                    <div className="flex items-center space-x-2">
                        <Scale className="w-6 h-6 text-amber-700" />
                        <span className="text-xl font-bold tracking-widest text-[#11161B] uppercase font-sans">LEXOVIA</span>
                    </div>

                    {/* Navigation Links (As seen in image_d04c84.jpg / image_d04d5b.jpg) */}
                    <nav className="hidden lg:flex space-x-10 text-xs font-semibold tracking-wider uppercase font-sans text-stone-600">
                        <a href="#" className="text-amber-700 font-bold border-b border-amber-700 pb-1">Home</a>
                        <a href="#" className="hover:text-amber-700 transition">About Us</a>
                        <a href="#" className="hover:text-amber-700 transition">Services</a>
                        <a href="#" className="hover:text-amber-700 transition">Cases</a>
                        <a href="#" className="hover:text-amber-700 transition">Blog</a>
                        <a href="#" className="hover:text-amber-700 transition">Contact</a>
                    </nav>

                    {/* Action Call Button */}
                    <div className="flex items-center space-x-4">
                        <button className="hidden sm:inline-flex items-center space-x-2 bg-[#11161B] text-amber-400 border border-amber-500/20 px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider font-sans hover:bg-amber-950 transition">
                            <span>Free Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* HERO SECTION: Combined dark theme with arched framing layout from image_d04d5b.jpg */}
            <section className="bg-[#11161B] text-white py-20 lg:py-28 relative overflow-hidden">
                {/* Subtle decorative geometry backdrop lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="0.5" />
                        <line x1="90%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6 z-10">
                        <div className="flex items-center space-x-2 text-amber-500 text-xs uppercase tracking-widest font-sans font-bold">
                            <span className="h-[1px] w-8 bg-amber-500"></span>
                            <span>Your Trusted Legal Shield</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-stone-100 font-light leading-tight">
                            Experienced Attorneys, <br />
                            <span className="font-serif italic text-amber-400">Trusted Results</span>
                        </h1>
                        <p className="text-stone-400 font-sans font-light max-w-xl text-sm sm:text-base leading-relaxed">
                            Navigating complex corporate structural architectures, high-stakes defense trials, and rigorous legacy protection with over 25 years of proven excellence in elite jurisdictions.
                        </p>

                        {/* Trust Badging inspired by image_d04c84.jpg */}
                        <div className="pt-4 flex flex-wrap items-center gap-6">
                            <button className="bg-amber-600 text-[#11161B] font-sans font-bold uppercase text-xs tracking-wider px-7 py-4 rounded-md shadow-lg shadow-amber-600/10 hover:bg-amber-500 transition">
                                Contact Our Partners
                            </button>

                            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg">
                                <div className="flex -space-x-2">
                                    <div className="w-7 h-7 rounded-full bg-stone-600 border border-stone-800 flex items-center justify-center text-[10px] font-sans">M</div>
                                    <div className="w-7 h-7 rounded-full bg-amber-700 border border-stone-800 flex items-center justify-center text-[10px] font-sans">A</div>
                                    <div className="w-7 h-7 rounded-full bg-stone-500 border border-stone-800 flex items-center justify-center text-[10px] font-sans">S</div>
                                </div>
                                <div>
                                    <div className="flex items-center text-amber-400"><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /><Star className="w-3 h-3 fill-amber-400" /></div>
                                    <p className="text-[11px] text-stone-300 font-sans font-medium mt-0.5">Trusted by 1.2k+ Global Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arched Framed Portrait Container from image_d04d5b.jpg and image_d04c84.jpg */}
                    <div className="lg:col-span-5 flex justify-center relative">
                        <div className="relative w-80 sm:w-96 aspect-[4/5] border border-amber-500/20 rounded-t-[12rem] p-3 backdrop-blur-sm bg-gradient-to-b from-white/5 to-transparent">
                            <div className="w-full h-full rounded-t-[11rem] overflow-hidden bg-stone-800 relative shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                                    alt="Senior Legal Counsel Portfolio"
                                    className="w-full h-full object-cover grayscale opacity-90 contrast-110 object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#11161B] via-transparent to-transparent" />
                            </div>

                            {/* Floating Circular Badge Stamp inspired by image_d04c84.jpg */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500 text-[#11161B] rounded-full p-2 flex flex-col items-center justify-center text-center shadow-xl border-4 border-[#11161B]">
                                <Award className="w-6 h-6 mb-0.5" />
                                <span className="text-[9px] uppercase font-sans font-black tracking-tighter">Top Defense 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUE & LEAN FOUNDATION SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
                    <div className="absolute -inset-4 bg-amber-100/40 rounded-3xl -z-10 blur-xl" />
                    {/* Dual Arched Framed Grid layout option from image_d04d5b.jpg Section 2 */}
                    <div className="rounded-t-full overflow-hidden h-72 border-2 border-stone-200 p-1.5 bg-white">
                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop" alt="Legal Gavel of Justice" className="w-full h-full object-cover rounded-t-full grayscale" />
                    </div>
                    <div className="rounded-t-full overflow-hidden h-72 border-2 border-stone-200 p-1.5 bg-white mt-8">
                        <img src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=400&auto=format&fit=crop" alt="Attorney Office Advisory" className="w-full h-full object-cover rounded-t-full" />
                    </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center space-x-2 text-amber-800 text-xs uppercase tracking-widest font-sans font-bold">
                        <span className="h-[1px] w-8 bg-amber-800"></span>
                        <span>A Legacy Of Legal Excellence</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl text-[#11161B] font-light">
                        Navigating the Law : Your Assurance of Peace
                    </h2>
                    <p className="text-stone-500 font-sans font-light text-sm sm:text-base leading-relaxed">
                        Our firm brings multi-disciplinary expertise to critical situations. Whether dealing with regulatory audits, business acquisitions, or white-collar litigation, we offer meticulous support.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-sm font-medium text-stone-700">
                        <li className="flex items-center space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" /> <span>Committed to elite practices</span></li>
                        <li className="flex items-center space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" /> <span>Absolute honesty & ethics</span></li>
                        <li className="flex items-center space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" /> <span>Trial-tested precision strategy</span></li>
                        <li className="flex items-center space-x-3"><CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" /> <span>98% Transaction execution rate</span></li>
                    </ul>
                </div>
            </section>

            {/* WORK PROCESS TIMELINE/CASE ADVISORY (Inspired by image_d04d5b.jpg Section 3) */}
            <section className="bg-[#11161B] text-stone-300 py-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-xs font-bold font-sans uppercase text-amber-500 tracking-widest">Work Process</span>
                        <h3 className="text-3xl font-light text-white">How We Secure Your Favorable Outcome</h3>
                        <p className="text-stone-400 font-sans font-light text-sm leading-relaxed">
                            Every profile requires calculated precision. We break down defense and compliance architecture into transparent checkpoints.
                        </p>
                        <div className="pt-4 hidden lg:block">
                            <div className="w-40 h-40 rounded-tr-[5rem] overflow-hidden border border-amber-500/20 p-1">
                                <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=300&auto=format&fit=crop" alt="Law library books" className="w-full h-full object-cover rounded-tr-[4.5rem] opacity-40 grayscale" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-start space-x-4 bg-white/5 border border-white/10 p-5 rounded-xl">
                            <span className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-sans font-bold text-amber-400 text-xs flex-shrink-0 mt-0.5">01</span>
                            <div>
                                <h4 className="text-white font-bold tracking-wide font-sans text-sm">Initial Case Consultation</h4>
                                <p className="text-xs text-stone-400 font-sans font-light mt-1 leading-relaxed">Our senior partners analyze the deep evidentiary architecture of the scenario, ensuring code conflicts are discovered immediately.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 bg-white/5 border border-white/10 p-5 rounded-xl">
                            <span className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-sans font-bold text-amber-400 text-xs flex-shrink-0 mt-0.5">02</span>
                            <div>
                                <h4 className="text-white font-bold tracking-wide font-sans text-sm">Risk & Impact Evaluation</h4>
                                <p className="text-xs text-stone-400 font-sans font-light mt-1 leading-relaxed">We calibrate legal exposure limits, aligning financial safety with the highest jurisdictional protective measures.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 bg-white/5 border border-white/10 p-5 rounded-xl">
                            <span className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-sans font-bold text-amber-400 text-xs flex-shrink-0 mt-0.5">03</span>
                            <div>
                                <h4 className="text-white font-bold tracking-wide font-sans text-sm">Pre-Trial Litigation Strategy</h4>
                                <p className="text-xs text-stone-400 font-sans font-light mt-1 leading-relaxed">A custom defense framework is engineered to challenge opposing arguments before the bench or negotiation panels meet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRACTICE SERVICES LIST (Inspired by grid cards across image_d04c84.jpg & image_d04d5b.jpg) */}
            <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
                <div className="text-center space-y-3 mb-16">
                    <span className="text-xs font-bold font-sans uppercase text-amber-700 tracking-widest">What We Do</span>
                    <h2 className="text-3xl sm:text-4xl text-[#11161B] font-light">Legal Services We Offer</h2>
                    <div className="w-16 h-[1px] bg-amber-600 mx-auto mt-2" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {practices.map((practice) => {
                        const IconComponent = practice.icon;
                        return (
                            <div
                                key={practice.id}
                                className={`p-6 rounded-xl transition-all duration-300 flex flex-col justify-between group ${practice.active
                                        ? 'bg-[#11161B] text-white shadow-xl scale-105 border-t-4 border-amber-500'
                                        : 'bg-white text-stone-800 border border-stone-200/80 hover:shadow-xl hover:border-amber-500/40'
                                    }`}
                            >
                                <div>
                                    <div className={`p-3 rounded-lg w-fit mb-6 ${practice.active ? 'bg-amber-500 text-[#11161B]' : 'bg-stone-100 text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition-colors'}`}>
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <h3 className={`text-lg font-medium tracking-wide ${practice.active ? 'text-amber-400' : 'text-[#11161B]'}`}>{practice.title}</h3>
                                    <p className={`font-sans font-light text-xs mt-3 leading-relaxed ${practice.active ? 'text-stone-300' : 'text-stone-500'}`}>
                                        {practice.desc}
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <a href="#" className={`inline-flex items-center space-x-2 text-xs font-bold font-sans tracking-wider uppercase ${practice.active ? 'text-amber-400 hover:text-white' : 'text-amber-800 hover:text-[#11161B]'}`}>
                                        <span>Read More</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* WHY CHOOSE US STATS */}
            <section className="bg-stone-100 py-16 border-y border-stone-200">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-4xl font-light text-amber-800">70+</p>
                        <p className="text-xs uppercase font-sans font-bold text-stone-500 tracking-widest mt-1">Trial Verdicts Won</p>
                    </div>
                    <div>
                        <p className="text-4xl font-light text-amber-800">25+</p>
                        <p className="text-xs uppercase font-sans font-bold text-stone-500 tracking-widest mt-1">Years of Advocacy</p>
                    </div>
                    <div>
                        <p className="text-4xl font-light text-amber-800">8k+</p>
                        <p className="text-xs uppercase font-sans font-bold text-stone-500 tracking-widest mt-1">Resolved Corporate Cases</p>
                    </div>
                    <div>
                        <p className="text-4xl font-light text-amber-800">99.4%</p>
                        <p className="text-xs uppercase font-sans font-bold text-stone-500 tracking-widest mt-1">Client Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SLIDER BANNER (Structured clean format like image_d04c84.jpg) */}
            <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
                <div className="text-center space-y-2 mb-12">
                    <span className="text-xs font-bold font-sans uppercase text-amber-700 tracking-widest">Client Feedback</span>
                    <h2 className="text-3xl font-light text-[#11161B]">Satisfied With Our Service</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white border border-stone-200 p-8 rounded-xl shadow-sm relative">
                            <span className="text-5xl font-serif text-amber-300 absolute top-4 left-4 opacity-40">“</span>
                            <p className="text-stone-600 font-sans text-xs italic leading-relaxed relative z-10 pt-4">
                                {t.text}
                            </p>
                            <div className="mt-6 border-t border-stone-100 pt-4 flex items-center justify-between font-sans">
                                <div>
                                    <h4 className="text-xs font-bold text-[#11161B]">{t.name}</h4>
                                    <p className="text-[10px] text-stone-400 mt-0.5">{t.role}</p>
                                </div>
                                <div className="flex text-amber-500"><Star className="w-2.5 h-2.5 fill-amber-500" /><Star className="w-2.5 h-2.5 fill-amber-500" /><Star className="w-2.5 h-2.5 fill-amber-500" /><Star className="w-2.5 h-2.5 fill-amber-500" /><Star className="w-2.5 h-2.5 fill-amber-500" /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CONSULTATION FOOTER BANNER */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="bg-[#11161B] text-white rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-light text-amber-400">Schedule An Immediate Appointment</h3>
                        <p className="text-stone-400 font-sans font-light text-xs sm:text-sm max-w-2xl leading-relaxed">
                            Don't wait for legal conflicts to spiral. Protect your legacy, corporate assets, or personal freedoms by retaining elite counsel immediately.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex lg:justify-end">
                        <a href="tel:1234567890" className="inline-flex items-center space-x-3 bg-amber-600 text-[#11161B] font-sans font-bold uppercase text-xs tracking-wider px-6 py-4 rounded-md shadow-lg shadow-amber-600/20 hover:bg-amber-500 transition">
                            <PhoneCall className="w-4 h-4" />
                            <span>Call +1 (123) 456-7890</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER METADATA */}
            <footer className="bg-[#0B0E11] text-stone-500 py-12 border-t border-stone-900 font-sans text-xs">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-2">
                        <Scale className="w-4 h-4 text-amber-600" />
                        <span className="text-stone-300 font-bold tracking-widest uppercase">LEXOVIA</span>
                    </div>
                    <p>© 2026 Lexovia Capital Attorneys Ltd. Private Regulatory Practice. All rights reserved.</p>
                    <div className="flex space-x-6 text-stone-400">
                        <a href="#" className="hover:text-amber-500 transition">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-500 transition">Terms of Use</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}