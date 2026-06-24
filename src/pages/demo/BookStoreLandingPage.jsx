import React, { useState } from 'react';
import {
    BookOpen,
    ShoppingBag,
    Search,
    Heart,
    ArrowRight,
    Star,
    Sparkles,
    Compass,
    Bookmark,
    TrendingUp,
    Check,
    Menu
} from 'lucide-react';

export default function BookStoreLandingPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Fiction', 'Philosophy', 'Art & Design', 'Sci-Fi', 'Biography'];

    const trendingBooks = [
        {
            id: 1,
            title: "The Architecture of Light",
            author: "Elena Rostova",
            price: "$24.99",
            category: "Art & Design",
            tag: "Editor's Choice",
            img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Beyond the Event Horizon",
            author: "Marcus Vance",
            price: "$18.50",
            category: "Sci-Fi",
            tag: "Best Seller",
            img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Fragments of Time & Mind",
            author: "Dr. Julian Finch",
            price: "$29.00",
            category: "Philosophy",
            tag: "New Arrival",
            img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Stories of the Silent Sea",
            author: "Clara Amado",
            price: "$21.00",
            category: "Fiction",
            tag: "Trending",
            img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop"
        }
    ];

    const curatedClubs = [
        { id: 1, name: "The Midnight Thinkers", members: "1.4k members", topic: "Existentialism & Coffee" },
        { id: 2, name: "Visual Aesthetics Guild", members: "920 members", topic: "Modernism & Architecture" },
    ];

    return (
        <div className="min-h-screen bg-[#FBF9F4] text-[#2C2623] font-serif antialiased">

            {/* --- TOP ANNOUNCEMENT BANNER --- */}
            <div className="bg-[#2C2623] text-[#F3EFE6] text-center py-2 text-xs font-sans tracking-wider">
                Join our **Literary Club** today and get free shipping on your first 3 curated parcels.
            </div>

            {/* --- HEADER / NAVIGATION --- */}
            <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-[#2C2623]/10">
                <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-[#C46A45]" />
                    <span className="text-lg font-bold tracking-tight font-sans text-[#2C2623]">FOLIO.</span>
                </div>

                <nav className="hidden md:flex space-x-8 text-xs font-medium font-sans uppercase tracking-widest text-[#2C2623]/80">
                    <a href="#" className="text-[#C46A45] font-bold">Shop</a>
                    <a href="#" className="hover:text-[#C46A45] transition">Curated Boxes</a>
                    <a href="#" className="hover:text-[#C46A45] transition">Reading Clubs</a>
                    <a href="#" className="hover:text-[#C46A45] transition">Our Journal</a>
                </nav>

                <div className="flex items-center space-x-4 text-[#2C2623]">
                    <Search className="w-4 h-4 cursor-pointer hover:text-[#C46A45]" />
                    <Heart className="w-4 h-4 cursor-pointer hover:text-[#C46A45]" />
                    <div className="relative cursor-pointer group">
                        <ShoppingBag className="w-4 h-4 hover:text-[#C46A45]" />
                        <span className="absolute -top-1.5 -right-1.5 bg-[#C46A45] text-white text-[9px] font-sans w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">2</span>
                    </div>
                </div>
            </header>

            {/* --- HERO SECTION: WARM, MINIMALIST HERO --- */}
            <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-[#C46A45]/10 text-[#C46A45] px-3 py-1 rounded-full text-xs font-sans font-medium">
                        <Sparkles className="w-3 h-3" />
                        <span>Independent Bookstore of the Year</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#2C2623] leading-[1.1]">
                        Books that shape your <span className="italic font-serif text-[#C46A45]">inner architecture.</span>
                    </h1>

                    <p className="text-[#2C2623]/70 font-sans font-light max-w-lg text-sm sm:text-base leading-relaxed">
                        We bypass mass-market noise to curate physical literature that demands a permanent place on your shelf. Hand-wrapped, thoughtfully packaged, and built for slow mornings.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2 font-sans">
                        <button className="bg-[#2C2623] text-[#FBF9F4] px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#C46A45] transition-colors shadow-sm">
                            Explore Curated Catalog
                        </button>
                        <button className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider border-b-2 border-[#2C2623] pb-1 hover:text-[#C46A45] hover:border-[#C46A45] transition">
                            <span>Meet Our Archivists</span>
                            <ArrowRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>

                {/* Hero Stacked Interactive Display */}
                <div className="lg:col-span-6 flex justify-center relative">
                    <div className="relative w-72 sm:w-80 aspect-[3/4] bg-[#EFECE3] rounded-2xl p-6 shadow-xl border border-[#2C2623]/5 flex flex-col justify-between group overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-[#2C2623]/20 to-transparent" />

                        <div className="w-full h-[75%] rounded-lg overflow-hidden shadow-md relative">
                            <img
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
                                alt="Featured Book Cover"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="pt-4 font-sans">
                            <p className="text-[10px] uppercase tracking-widest text-[#C46A45] font-bold">This Month's Focal Book</p>
                            <h4 className="text-sm font-bold text-[#2C2623] mt-0.5 truncate">The Architecture of Light</h4>
                            <p className="text-xs text-[#2C2623]/60 italic font-serif">by Elena Rostova</p>
                        </div>

                        {/* Floating Review Widget */}
                        <div className="absolute top-12 -right-8 bg-white p-3 rounded-xl shadow-lg border border-[#2C2623]/5 max-w-[180px] font-sans scale-90">
                            <div className="flex text-amber-500 mb-1"><Star className="w-3 h-3 fill-amber-500" /><Star className="w-3 h-3 fill-amber-500" /><Star className="w-3 h-3 fill-amber-500" /><Star className="w-3 h-3 fill-amber-500" /><Star className="w-3 h-3 fill-amber-500" /></div>
                            <p className="text-[10px] text-[#2C2623] leading-tight">"A breathtaking tactile study on layout."</p>
                            <p className="text-[8px] text-[#2C2623]/40 mt-1">— London Review</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FILTERABLE TRENDING CATALOG --- */}
            <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-3xl border border-[#2C2623]/5 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[#C46A45] text-xs font-sans font-bold uppercase tracking-widest">
                            <TrendingUp className="w-4 h-4" />
                            <span>Highly Requested</span>
                        </div>
                        <h2 className="text-3xl font-normal text-[#2C2623]">Trending Editions</h2>
                    </div>

                    {/* Trendy pill filters */}
                    <div className="flex flex-wrap gap-2 font-sans text-xs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full transition-all duration-200 border ${activeCategory === cat
                                        ? 'bg-[#2C2623] text-white border-[#2C2623]'
                                        : 'bg-[#FBF9F4] text-[#2C2623]/70 border-transparent hover:border-[#2C2623]/20'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Catalog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingBooks
                        .filter(book => activeCategory === 'All' || book.category === activeCategory)
                        .map((book) => (
                            <div key={book.id} className="group cursor-pointer">
                                <div className="bg-[#FBF9F4] aspect-[3/4] rounded-2xl p-6 flex items-center justify-center shadow-inner relative overflow-hidden border border-[#2C2623]/5">
                                    {/* Subtle book shadow design */}
                                    <div className="absolute top-0 left-6 w-1.5 h-full bg-gradient-to-r from-black/10 to-transparent" />

                                    <img
                                        src={book.img}
                                        alt={book.title}
                                        className="h-[85%] object-cover shadow-xl group-hover:scale-105 transition-transform duration-500 rounded-sm"
                                    />

                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-sans uppercase font-bold tracking-wider text-[#2C2623] border border-[#2C2623]/5">
                                        {book.tag}
                                    </span>
                                </div>

                                <div className="mt-4 space-y-1">
                                    <p className="text-[11px] font-sans text-[#C46A45] uppercase tracking-wider font-semibold">{book.category}</p>
                                    <h3 className="font-bold text-base text-[#2C2623] group-hover:text-[#C46A45] transition-colors truncate">{book.title}</h3>
                                    <div className="flex items-center justify-between pt-1">
                                        <p className="text-xs italic text-[#2C2623]/60">by {book.author}</p>
                                        <p className="text-sm font-sans font-bold text-[#2C2623]">{book.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* --- VALUE PROP: THE MONTHLY SUBSCRIPTION PARCEL --- */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                    <img
                        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
                        alt="Curated delivery box parcels"
                        className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover filter sepia-[0.1]"
                    />
                </div>

                <div className="lg:col-span-7 space-y-6 lg:pl-6">
                    <div className="flex items-center space-x-2 text-[#C46A45] text-xs font-sans font-bold uppercase tracking-widest">
                        <Compass className="w-4 h-4" />
                        <span>The Folio Subscription</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-normal leading-tight text-[#2C2623]">
                        A monthly sensory package <br />delivered to your doorstep.
                    </h2>
                    <p className="text-[#2C2623]/70 font-sans font-light text-sm sm:text-base leading-relaxed">
                        Every month, our chief archivist selects one rare or essential piece of fiction, paired with custom-printed annotations, custom blended organic loose-leaf tea, and an exclusive author journal entry.
                    </p>

                    <div className="space-y-3 font-sans text-sm text-[#2C2623]/80">
                        <div className="flex items-center space-x-3"><Check className="w-4 h-4 text-[#C46A45] flex-shrink-0" /> <span>Premium hardcover standard issue editions</span></div>
                        <div className="flex items-center space-x-3"><Check className="w-4 h-4 text-[#C46A45] flex-shrink-0" /> <span>Custom linen bookmark included every month</span></div>
                        <div className="flex items-center space-x-3"><Check className="w-4 h-4 text-[#C46A45] flex-shrink-0" /> <span>Access to digital community salons and live discussions</span></div>
                    </div>

                    <div className="pt-4">
                        <button className="bg-[#2C2623] text-white px-6 py-3.5 rounded-lg text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#C46A45] transition shadow-md">
                            Subscribe — $35 / Month
                        </button>
                    </div>
                </div>
            </section>

            {/* --- COMMUNITY READING CLUBS PANEL --- */}
            <section className="bg-[#EFECE3] border-y border-[#2C2623]/5 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-4 space-y-2">
                        <span className="text-xs font-sans font-bold uppercase text-[#C46A45] tracking-widest">Active Salons</span>
                        <h3 className="text-2xl font-normal text-[#2C2623]">Our Collective Reading Guilds</h3>
                        <p className="text-xs font-sans font-light text-[#2C2623]/60 leading-relaxed">
                            Don’t read alone. Engage in deep asynchronous chapter debates with fine minds spread globally.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {curatedClubs.map(club => (
                            <div key={club.id} className="bg-white p-6 rounded-xl shadow-sm border border-[#2C2623]/5 flex items-center justify-between group hover:border-[#C46A45] transition-all">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-sans bg-[#FBF9F4] text-[#C46A45] px-2 py-0.5 rounded border border-[#C46A45]/20 font-bold uppercase">{club.topic}</span>
                                    <h4 className="text-base font-bold text-[#2C2623] pt-1">{club.name}</h4>
                                    <p className="text-xs font-sans text-[#2C2623]/40">{club.members}</p>
                                </div>
                                <button className="p-3 bg-[#FBF9F4] rounded-full text-[#2C2623] group-hover:bg-[#C46A45] group-hover:text-white transition">
                                    <Bookmark className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- EDITORIAL JOURNAL / NEWSLETTER --- */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
                <h3 className="text-2xl font-normal text-[#2C2623]">Subscribe to Marginalia</h3>
                <p className="text-xs font-sans text-[#2C2623]/60 max-w-sm mx-auto leading-relaxed">
                    Bi-weekly essay dispatches on rare print history, design systems, and literature highlights. No promotions.
                </p>
                <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 pt-2 font-sans">
                    <input
                        type="email"
                        placeholder="Your literary email address"
                        className="flex-1 bg-white border border-[#2C2623]/10 px-4 py-3 rounded-lg text-xs focus:outline-none focus:border-[#C46A45] shadow-inner text-[#2C2623]"
                    />
                    <button className="bg-[#2C2623] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#C46A45] transition whitespace-nowrap">
                        Join Club
                    </button>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-[#2C2623] text-[#F3EFE6]/50 py-12 text-xs font-sans border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-2 text-white">
                        <BookOpen className="w-4 h-4 text-[#C46A45]" />
                        <span className="font-bold tracking-tight">FOLIO.</span>
                    </div>
                    <p>© 2026 Folio Press & Booksellers Ltd. Curated Typography Ecosystem.</p>
                    <div className="flex space-x-6 text-[#F3EFE6]/80">
                        <a href="#" className="hover:text-[#C46A45] transition">Shipping Matrix</a>
                        <a href="#" className="hover:text-[#C46A45] transition">Archival Terms</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}