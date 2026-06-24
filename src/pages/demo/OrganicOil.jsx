import React from 'react';
import {
    ShoppingBag,
    Search,
    User,
    Droplet,
    Leaf,
    Sun,
    Sparkles,
    ArrowRight,
    ChevronRight,
    Instagram,
    Facebook,
    Twitter
} from 'lucide-react';

export default function OrganicOil() {
    const bestProducts = [
        { id: 1, name: "Pure Argan Elixir", price: "$45.00", oldPrice: "$60.00", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop" },
        { id: 2, name: "Organic Jojoba Glow", price: "$32.00", oldPrice: "$40.00", img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop" },
        { id: 3, name: "Cold-Pressed Rosehip", price: "$38.00", oldPrice: "$50.00", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop" },
        { id: 4, name: "Essential Lavender Blend", price: "$28.00", oldPrice: "$35.00", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop" },
        { id: 5, name: "Premium Marula Serum", price: "$55.00", oldPrice: "$70.00", img: "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=600&auto=format&fit=crop" },
        { id: 6, name: "Herbal Infused Body Oil", price: "$42.00", oldPrice: "$52.00", img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop" },
    ];

    return (
        <div className="min-h-screen bg-[#fcfdfa] text-slate-800 font-sans antialiased">

            {/* --- HEADER / NAV --- */}
            <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <div className="text-xl font-bold tracking-wider text-emerald-800">O-OIL</div>
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                    <a href="#" className="text-emerald-700 font-semibold">Home</a>
                    <a href="#" className="hover:text-emerald-700 transition">Shop</a>
                    <a href="#" className="hover:text-emerald-700 transition">About Us</a>
                    <a href="#" className="hover:text-emerald-700 transition">Blogs</a>
                    <a href="#" className="hover:text-emerald-700 transition">Contact Us</a>
                </nav>
                <div className="flex items-center space-x-4 text-slate-600">
                    <Search className="w-5 h-5 cursor-pointer hover:text-emerald-700" />
                    <User className="w-5 h-5 cursor-pointer hover:text-emerald-700" />
                    <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-emerald-700" />
                </div>
            </header>

            {/* --- HERO SECTION --- */}
            <section className="max-w-7xl mx-auto px-6 pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
                {/* Abstract soft green background glow */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl -z-10" />

                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-950">
                        NURTURE SKIN <br />
                        CREATE A <span className="text-emerald-600">GLOWING FUTURE</span>
                    </h1>
                    <p className="text-slate-500 max-w-md leading-relaxed">
                        100% cold-pressed organic oils formulated to feed your skin barrier, rich in vitamins and essential fatty acids your skin craves.
                    </p>
                    <div className="flex items-center space-x-4 pt-2">
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition font-medium text-sm">
                            Buy Now
                        </button>
                        <button className="flex items-center space-x-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition">
                            <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"><ChevronRight className="w-4 h-4 ml-0.5" /></span>
                            <span>Learn to Apply</span>
                        </button>
                    </div>

                    {/* Subtle metrics matching the source design layout */}
                    <div className="flex space-x-8 pt-6 border-t border-slate-100 max-w-xs">
                        <div className="flex items-center space-x-2">
                            <Sun className="w-5 h-5 text-amber-500" />
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Purity</p>
                                <p className="text-xs font-bold text-slate-700">100% Organic</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Droplet className="w-5 h-5 text-emerald-500" />
                            <div>
                                <p className="text-xs text-slate-400 font-medium">Moisture</p>
                                <p className="text-xs font-bold text-slate-700">24hr Hydration</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image Frame */}
                <div className="flex justify-center relative">
                    <div className="w-[85%] aspect-square bg-gradient-to-tr from-emerald-50 to-emerald-200/40 rounded-[2.5rem] p-8 flex items-center justify-center shadow-inner">
                        <img
                            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop"
                            alt="Organic Oil Premium Bottle"
                            className="h-[110%] object-contain drop-shadow-2xl transform hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* --- RECENT FEATURES / TEASERS --- */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-emerald-50/60 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl flex items-center space-x-4 shadow-sm border border-emerald-100/50">
                        <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><Leaf className="w-6 h-6" /></div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Ethically Sourced</h4>
                            <p className="text-xs text-slate-500 mt-0.5">Supporting local fair-trade micro-farms globally.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl flex items-center space-x-4 shadow-sm border border-emerald-100/50">
                        <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><Sparkles className="w-6 h-6" /></div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Reveal Radiant Skin</h4>
                            <p className="text-xs text-slate-500 mt-0.5">Rich botanical formulas designed to reveal natural dewiness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BEST PRODUCT GRID --- */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center space-y-2 mb-12">
                    <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">All Items</span>
                    <h2 className="text-3xl font-black text-slate-900">OUR BEST PRODUCTS</h2>
                    <div className="w-12 h-1 bg-emerald-500 mx-auto mt-2 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bestProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group">
                            <div className="bg-slate-50 rounded-xl aspect-square overflow-hidden mb-4 flex items-center justify-center relative">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <button className="absolute bottom-3 right-3 bg-white p-2.5 rounded-xl shadow-md text-slate-700 hover:bg-emerald-600 hover:text-white transition opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                    <ShoppingBag className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="px-2 pb-2">
                                <p className="text-xs uppercase font-bold tracking-wider text-emerald-700">Organic Line</p>
                                <h3 className="font-bold text-slate-900 mt-1 text-base truncate">{product.name}</h3>
                                <div className="flex items-center space-x-2 mt-2">
                                    <span className="text-sm font-black text-slate-900">{product.price}</span>
                                    <span className="text-xs text-slate-400 line-through font-medium">{product.oldPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-md hover:bg-emerald-700 transition">
                        View All Products
                    </button>
                </div>
            </section>

            {/* --- VALUE PROP / CONTENT SECTION --- */}
            <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-emerald-50/30 rounded-[2.5rem] my-12">
                <div className="p-4 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop"
                        alt="Eco-friendly production extraction"
                        className="rounded-2xl max-h-80 w-full object-cover shadow-md"
                    />
                </div>
                <div className="space-y-4 px-4">
                    <h3 className="text-2xl font-bold text-slate-900">WE PRIORITIZE YOUR SIGNIFICANT MOMENTS</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Self-care isn't a luxury; it's a daily ritual. Our clean-crafted oils target hyperpigmentation, dryness, and pollution stress while giving you that quiet, calming moment every morning and night.
                    </p>
                    <button className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium text-xs shadow-md hover:bg-emerald-700 transition">
                        <span>Read Our Story</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>

            {/* --- GRID GALLERY --- */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">Lifestyle</span>
                    <h2 className="text-2xl font-black text-slate-900 mt-1">OUR GALLERY</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400&auto=format&fit=crop" alt="Gallery 1" className="w-full h-48 object-cover rounded-xl shadow-sm" />
                    <img src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop" alt="Gallery 2" className="w-full h-48 object-cover rounded-xl shadow-sm" />
                    <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop" alt="Gallery 3" className="w-full h-48 object-cover rounded-xl shadow-sm" />
                    <img src="https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?q=80&w=400&auto=format&fit=crop" alt="Gallery 4" className="w-full h-48 object-cover rounded-xl shadow-sm" />
                </div>
            </section>

            {/* --- NEWSLETTER --- */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-4">
                <h3 className="text-xl font-bold text-slate-950 tracking-wide uppercase">STAY TUNED FOR MORE UPDATES</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">Subscribe to claim 15% off your first organic purchase order.</p>
                <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 pt-2">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                    />
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition shadow-md whitespace-nowrap">
                        Sign Up
                    </button>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="border-t border-slate-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                    <span className="font-bold text-emerald-800 text-sm">O-OIL</span>
                    <p>© 2026 O-Oil Inc. All rights reserved.</p>
                    <div className="flex space-x-4 text-slate-400">
                        <Instagram className="w-4 h-4 cursor-pointer hover:text-emerald-600" />
                        <Facebook className="w-4 h-4 cursor-pointer hover:text-emerald-600" />
                        <Twitter className="w-4 h-4 cursor-pointer hover:text-emerald-600" />
                    </div>
                </div>
            </footer>

        </div>
    );
}