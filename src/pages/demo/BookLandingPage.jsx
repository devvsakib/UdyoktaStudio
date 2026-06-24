import React, { useState } from 'react';
import {
    BookOpen,
    Star,
    Award,
    Bookmark,
    ArrowRight,
    Check,
    CheckCircle2,
    Volume2,
    FileText,
    Coffee,
    ChevronDown,
    Quote,
    Flame,
    Sparkles,
    HelpCircle,
    MapPin,
    Calendar,
    Lock
} from 'lucide-react';

export default function BookLandingPage() {
    // Interactive Format State Configurator
    const [format, setFormat] = useState('hardcover'); // 'hardcover' | 'ebook' | 'audiobook'
    const [emailSigned, setEmailSigned] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [activeTab, setActiveTab] = useState('synopsis'); // 'synopsis' | 'chapters' | 'author'
    const [faqOpen, setFaqOpen] = useState(null);

    const formatDetails = {
        hardcover: { price: "$28.00", delivery: "Premium foil-stamped hardcover + ribbon marker. Dispatches within 24 hours.", bonus: "Includes complimentary digital edition link." },
        ebook: { price: "$9.99", delivery: "Instant wireless structural layout delivery (.epub, .mobi, PDF).", bonus: "DRM-Free formatting across all modern readers." },
        audiobook: { price: "$22.50", delivery: "Unabridged audio ecosystem layer read impeccably by the author (14h 22m).", bonus: "Includes auxiliary high-fidelity ambient soundtrack companion." }
    };

    const faqs = [
        { q: "Does the digital version include the architectural prints?", a: "Yes, both the physical hardcover and the universal digital EPUB/PDF bundle come embedded with ultra-high-resolution schematic plates designed by Dr. Sterling." },
        { q: "Can I upgrade my purchase to the complete bundle later?", a: "Absolutely. Once your core order completes, a specialized cryptographic key token is dispatched to your email allowing you to secure the companion layers at structural discount costs." },
        { q: "Are international delivery routes fully tracking certified?", a: "Yes. All physical hardcovers route through certified global courier pipelines with immediate real-time tracking signals." }
    ];

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (emailInput.trim()) {
            setEmailSigned(true);
            setEmailInput('');
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#2D2A26] font-sans antialiased selection:bg-[#D4AF37]/20">

            <div className="bg-[#1A1816] text-[#EADCC9] text-[11px] font-medium tracking-[0.2em] uppercase text-center py-2.5 px-4 border-b border-[#3A3530]">
                🏆 Winner of the 2026 International Fiction Design Medallion
            </div>

            <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#EAE4D9]">
                <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-[#D4AF37] stroke-[1.5]" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#1A1816]">VERITAS PRESS</span>
                </div>
                <a
                    href="#purchase-matrix"
                    className="bg-[#1A1816] hover:bg-[#3A3530] text-[#FDFBF7] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-sm"
                >
                    Secure Copy
                </a>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative group perspective-1000">
                            <div className="w-[280px] sm:w-[320px] aspect-[2/3] rounded-r-xl overflow-hidden shadow-2xl transition-transform duration-500 transform group-hover:rotate-y-[-4deg] relative border-y border-r border-[#1A1816]/10">
                                <img
                                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
                                    alt="Book Cover Art: The Structural Horizon"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-white/10" />
                                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-white border-2 border-[#D4AF37] p-3 rounded-full shadow-lg transform -rotate-12">
                                <Award className="w-6 h-6 text-[#D4AF37]" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                            <span>New Release</span>
                            <span className="text-[#8C8275]">•</span>
                            <span>Literary Fiction</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#1A1816] leading-none tracking-tight">
                                The Structural <br className="hidden sm:inline" />Horizon
                            </h1>
                            <p className="text-lg sm:text-xl font-light italic text-[#5C544C] leading-relaxed">
                                "A masterful critique of digital permanence and physical legacy."
                            </p>
                        </div>

                        <div className="flex items-center space-x-4 text-xs font-medium text-[#5C544C] bg-[#F2EDE2] w-fit px-3 py-1.5 rounded-lg border border-[#E3DAC9]">
                            <div className="flex text-[#D4AF37]"><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /></div>
                            <span>5.0 Core Rating across 1,200 Verified Pre-Orders</span>
                        </div>

                        <p className="text-[#4A433D] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                            Set against the backcloth of an architectural project that bridges decades, this celebrated work explores human architecture, memory drift, and the physical footprints we leave behind in a collapsing digital epoch.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="#purchase-matrix"
                                className="bg-[#1A1816] text-[#FDFBF7] hover:bg-[#3A3530] px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition flex items-center space-x-2 group shadow-lg shadow-black/5"
                            >
                                <span>Acquire Book Copy</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                            </a>
                            <a
                                href="#deep-dive"
                                className="border border-[#D2C8B7] bg-white/40 hover:bg-white text-[#1A1816] px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition"
                            >
                                Read Sample Chapter
                            </a>
                        </div>
                    </div>

                </div>
            </main>

            <section className="bg-[#1A1816] text-[#EADCC9] py-16 border-y border-[#3A3530]">
                <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
                    <Quote className="w-8 h-8 text-[#D4AF37] mx-auto opacity-40" />
                    <blockquote className="text-lg sm:text-2xl font-serif font-light leading-relaxed italic text-[#FDFBF7]">
                        "An absolute milestone in modern publishing. It reads like structural architecture converted purely into raw prose. Completely unmissable."
                    </blockquote>
                    <cite className="block text-xs uppercase font-bold tracking-widest text-[#D4AF37] mt-2 not-italic">
                        — The London Review of Letters
                    </cite>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 border-b border-[#EAE4D9]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="space-y-1 bg-white p-4 rounded-xl border border-[#EAE4D9]/60 shadow-sm">
                        <span className="block text-2xl sm:text-3xl font-serif text-[#1A1816]">14</span>
                        <span className="block text-[10px] uppercase font-bold tracking-wider text-[#8C8275]">Weeks at #1</span>
                    </div>
                    <div className="space-y-1 bg-white p-4 rounded-xl border border-[#EAE4D9]/60 shadow-sm">
                        <span className="block text-2xl sm:text-3xl font-serif text-[#1A1816]">24k+</span>
                        <span className="block text-[10px] uppercase font-bold tracking-wider text-[#8C8275]">Copies Distributed</span>
                    </div>
                    <div className="space-y-1 bg-white p-4 rounded-xl border border-[#EAE4D9]/60 shadow-sm">
                        <span className="block text-2xl sm:text-3xl font-serif text-[#1A1816]">18</span>
                        <span className="block text-[10px] uppercase font-bold tracking-wider text-[#8C8275]">Global Translations</span>
                    </div>
                    <div className="space-y-1 bg-white p-4 rounded-xl border border-[#EAE4D9]/60 shadow-sm">
                        <span className="block text-2xl sm:text-3xl font-serif text-[#1A1816]">4.9</span>
                        <span className="block text-[10px] uppercase font-bold tracking-wider text-[#8C8275]">Goodreads Index</span>
                    </div>
                </div>
            </section>

            <section id="deep-dive" className="max-w-4xl mx-auto px-6 py-16 space-y-8">

                <div className="flex border-b border-[#EAE4D9] justify-center sm:justify-start space-x-6 text-xs uppercase font-bold tracking-wider">
                    {[
                        { id: 'synopsis', label: 'Extended Synopsis', icon: FileText },
                        { id: 'chapters', label: 'Chapter Outline', icon: Bookmark },
                        { id: 'author', label: 'The Author Profile', icon: Coffee }
                    ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 flex items-center space-x-2 border-b-2 transition ${activeTab === tab.id ? 'border-[#1A1816] text-[#1A1816]' : 'border-transparent text-[#8C8275] hover:text-[#1A1816]'
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                <span>{tab.label}</span>
                            </button>
                        )
                    })}
                </div>

                <div className="bg-white border border-[#EAE4D9] rounded-2xl p-6 sm:p-8 shadow-sm text-sm text-[#4A433D] leading-relaxed">
                    {activeTab === 'synopsis' && (
                        <div className="space-y-4">
                            <p>The Structural Horizon traces three intertwined generational loops of master stone sculptors and modern neural network architects. When a multi-decade blueprint vanishes from a central physical repository layer, the family line is pushed into a race against decaying server clusters.</p>
                            <p className="font-medium text-[#1A1816]">Themes explored include: physical structural preservation paradigms, architectural heuristics, and generational trauma mitigation protocols.</p>
                        </div>
                    )}

                    {activeTab === 'chapters' && (
                        <div className="divide-y divide-[#EAE4D9]">
                            <div className="py-3 flex justify-between items-center">
                                <span><strong>Chapter 1:</strong> The Granite Baseline Ledger</span>
                                <span className="text-xs font-mono text-[#8C8275]">pp. 1-45</span>
                            </div>
                            <div className="py-3 flex justify-between items-center">
                                <span><strong>Chapter 2:</strong> Digital Decay Vector Models</span>
                                <span className="text-xs font-mono text-[#8C8275]">pp. 46-92</span>
                            </div>
                            <div className="py-3 flex justify-between items-center">
                                <span><strong>Chapter 3:</strong> Foundations Across Collapsed Archives</span>
                                <span className="text-xs font-mono text-[#8C8275]">pp. 93-154</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'author' && (
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <div className="w-20 h-20 bg-[#EADCC9] rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Author Headshot" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-base font-bold text-[#1A1816]">Dr. Helena Sterling</h4>
                                <p>Helena Sterling is an architectural historian and formal systems designer based out of Zurich. <em>The Structural Horizon</em> is her third full-length novel publication, drawing directly upon her research regarding physical memory preservation algorithms.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-[#F2EDE2] border-y border-[#EAE4D9] py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center space-y-2 mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Premium Production Values</span>
                        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1816]">Meticulously Crafted Artifacts</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3 bg-white p-6 rounded-2xl border border-[#EAE4D9] shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center text-[#D4AF37]"><Sparkles className="w-5 h-5" /></div>
                            <h3 className="font-bold text-[#1A1816] text-sm uppercase tracking-wide">Foil-Stamped Binding</h3>
                            <p className="text-xs text-[#5C544C] leading-relaxed">Bound in authentic archival linen spine wrap finished with direct geometric deep gold-leaf embossing layouts.</p>
                        </div>
                        <div className="space-y-3 bg-white p-6 rounded-2xl border border-[#EAE4D9] shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center text-[#D4AF37]"><Flame className="w-5 h-5" /></div>
                            <h3 className="font-bold text-[#1A1816] text-sm uppercase tracking-wide">Acid-Free Stock</h3>
                            <p className="text-xs text-[#5C544C] leading-relaxed">Interior sheets utilize sustainably milled 120gsm high-opacity cream paper constructed to withstand oxidation cycles over generations.</p>
                        </div>
                        <div className="space-y-3 bg-white p-6 rounded-2xl border border-[#EAE4D9] shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] flex items-center justify-center text-[#D4AF37]"><BookOpen className="w-5 h-5" /></div>
                            <h3 className="font-bold text-[#1A1816] text-sm uppercase tracking-wide">Detailed Plate Insets</h3>
                            <p className="text-xs text-[#5C544C] leading-relaxed">Includes 12 custom dual-page architectural gatefolds map drawings explicitly conceptualized by the narrative thread.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="purchase-matrix" className="py-16 lg:py-24 max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                    <div className="md:col-span-6 space-y-4">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8275] block">Acquisition Panel</span>
                            <h3 className="text-2xl font-serif text-[#1A1816]">Choose Edition Format</h3>
                        </div>

                        <div className="space-y-2.5">
                            {[
                                { id: 'hardcover', title: 'Collector Hardcover', icon: BookOpen },
                                { id: 'ebook', title: 'Digital E-Book Asset', icon: Bookmark },
                                { id: 'audiobook', title: 'High-Fidelity Audiobook', icon: Volume2 }
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setFormat(item.id)}
                                        className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition ${format === item.id
                                                ? 'border-[#1A1816] bg-white text-[#1A1816] shadow-md ring-1 ring-[#1A1816]'
                                                : 'border-[#D2C8B7] bg-white/40 text-[#5C544C] hover:border-[#1A1816]/40 hover:bg-white/80'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon className={`w-4 h-4 ${format === item.id ? 'text-[#D4AF37]' : 'text-[#8C8275]'}`} />
                                            <span className="text-xs font-bold uppercase tracking-wider">{item.title}</span>
                                        </div>
                                        {format === item.id && <Check className="w-4 h-4 text-emerald-600" />}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="md:col-span-6 bg-white border border-[#EAE4D9] rounded-2xl p-6 space-y-4 shadow-xl">
                        <div className="flex justify-between items-baseline border-b border-[#F2EDE2] pb-3">
                            <span className="text-xs uppercase font-bold text-[#8C8275]">Selected Asset Tier Cost</span>
                            <span className="text-3xl font-serif text-[#1A1816] font-medium">{formatDetails[format].price}</span>
                        </div>

                        <div className="text-xs space-y-2 text-[#5C544C] leading-relaxed">
                            <p>✨ <strong>Delivery Metric:</strong> {formatDetails[format].delivery}</p>
                            <p>🎁 <strong>Bonus Layer:</strong> {formatDetails[format].bonus}</p>
                        </div>

                        <button
                            onClick={() => alert(`Secure tunnel framework linked successfully for the ${format} configuration routing layout.`)}
                            className="w-full bg-[#1A1816] hover:bg-[#3A3530] text-white text-center py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition shadow-md flex items-center justify-center space-x-2"
                        >
                            <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Dispatch Secure Transaction</span>
                        </button>

                        <p className="text-[10px] text-center text-[#8C8275]">
                            Guaranteed secure 256-bit SSL transaction channel routing.
                        </p>
                    </div>

                </div>
            </section>

            <section className="bg-[#FAF6EE] border-t border-[#EAE4D9] py-16">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <div className="text-center sm:text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8275]">Live Engagements</span>
                        <h2 className="text-2xl font-serif text-[#1A1816]">2026 Author Keynotes & Signings</h2>
                    </div>

                    <div className="space-y-3">
                        {[
                            { city: "London", venue: "The Royal Literary Institute", date: "July 12, 2026" },
                            { city: "Zurich", venue: "Kulturhaus Central Archive", date: "August 04, 2026" },
                            { city: "New York", venue: "Metropolitan Structural Library", date: "September 19, 2026" }
                        ].map((event, index) => (
                            <div key={index} className="bg-white border border-[#EAE4D9] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#1A1816]"><MapPin className="w-4 h-4 text-[#D4AF37]" /></div>
                                    <div>
                                        <h4 className="font-bold text-[#1A1816]">{event.city} — {event.venue}</h4>
                                        <p className="text-[#8C8275] text-[11px] flex items-center mt-0.5"><Calendar className="w-3 h-3 mr-1" /> {event.date}</p>
                                    </div>
                                </div>
                                <button className="text-[10px] uppercase font-bold tracking-wider border border-[#D2C8B7] px-3 py-1.5 rounded-lg hover:bg-[#1A1816] hover:text-white transition whitespace-nowrap">
                                    Reserve Pass
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 py-16 space-y-6">
                <div className="text-center">
                    <HelpCircle className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                    <h2 className="text-xl sm:text-2xl font-serif text-[#1A1816]">Frequently Anticipated Inquiries</h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-[#EAE4D9] bg-white rounded-xl overflow-hidden">
                            <button
                                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#1A1816] flex items-center justify-between"
                            >
                                <span>{faq.q}</span>
                                <ChevronDown className={`w-4 h-4 text-[#8C8275] transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} />
                            </button>
                            {faqOpen === idx && (
                                <div className="p-4 bg-[#FDFBF7] border-t border-[#EAE4D9] text-xs text-[#5C544C] leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#1A1816] text-[#FDFBF7] py-16 text-center border-t border-[#3A3530]">
                <div className="max-w-md mx-auto px-6 space-y-4">
                    <h3 className="text-xl font-serif text-white">Join Author's Ledger Circle</h3>
                    <p className="text-xs text-[#8C8275] leading-relaxed">
                        Receive exclusive notifications concerning auxiliary follow-up chapters, textual breakdowns, and private speaking schedules directly.
                    </p>

                    {emailSigned ? (
                        <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded-xl text-xs inline-flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Address recognized. Welcome to the ledger loop.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                            <input
                                type="email"
                                required
                                placeholder="reader@legacy.com"
                                className="bg-[#2D2A26] border border-[#3A3530] rounded-xl text-xs px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] flex-1"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                            />
                            <button type="submit" className="bg-[#D4AF37] hover:bg-[#Bfa030] text-[#1A1816] font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition">
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <footer className="bg-[#FDFBF7] border-t border-[#EAE4D9] py-8 text-center text-[10px] uppercase tracking-widest text-[#8C8275]">
                <p>© 2026 Veritas Press Group LLC. All Architectural Rights Reserved.</p>
            </footer>

        </div>
    );
}