import React, { useState } from 'react';
import {
    ShoppingBag,
    Heart,
    Star,
    ChevronDown,
    ArrowRight,
    Info,
    Check,
    Sparkles,
    Sliders,
    Menu,
    X
} from 'lucide-react';

export default function CosmeticsShop() {
    const [selectedProduct, setSelectedProduct] = useState({
        id: 1,
        name: "Hydrating Hydra-Gel Serum",
        subtitle: "Deep Moisture Infusion with Botanicals",
        rating: 4.9,
        reviews: 142,
        basePrice: 38,
        volumes: [
            { size: "30ml", premium: 0 },
            { size: "50ml", premium: 14 },
            { size: "100ml", premium: 32 }
        ],
        images: [
            "https://i.pinimg.com/1200x/51/a2/f0/51a2f047f3bf72f567df1c99719ad20f.jpg",
            "https://i.pinimg.com/736x/27/b8/64/27b864bdba238024427a40e2d2ed6310.jpg"
        ],
        description: "An ultra-lightweight fluid engineered with low-molecular hyaluronic matrices and structural organic botanical extracts to lock down moisture barriers up to 72 hours."
    });

    const [activeVolumeIdx, setActiveVolumeIdx] = useState(1); // Default to 50ml
    const [activeImgIdx, setActiveImgIdx] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [isFavorited, setIsFavorited] = useState(false);
    const [addedNotify, setAddedNotify] = useState(false);

    const currentPrice = selectedProduct.basePrice + selectedProduct.volumes[activeVolumeIdx].premium;

    const handleAddToCart = () => {
        setCartCount(prev => prev + 1);
        setAddedNotify(true);
        setTimeout(() => setAddedNotify(false), 2500);
    };

    // Static items for grid display
    const collectionProducts = [
        {
            id: 2,
            name: "Squalane Purifying Cleanser",
            price: 26,
            size: "150ml",
            img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop",
            tag: "Best Seller"
        },
        {
            id: 3,
            name: "Ceramide Barrier Repair Balm",
            price: 42,
            size: "50ml",
            img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop",
            tag: "New Formulation"
        },
        {
            id: 4,
            name: "Vitamin C Radiance Oil",
            price: 48,
            size: "30ml",
            img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop",
            tag: "Brightening"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F5] text-[#2C2623] font-sans antialiased">

            {addedNotify && (
                <div className="fixed bottom-6 right-6 z-50 bg-[#2C2623] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider px-5 py-4 rounded-xl shadow-xl flex items-center space-x-3 border border-white/10 animate-fade-in-up">
                    <Check className="w-4 h-4 text-[#C1A287]" />
                    <span>Product added to basket</span>
                </div>
            )}

            <div className="bg-[#2C2623] text-[#FAF9F5] text-[10px] uppercase tracking-widest text-center py-2 font-medium">
                Complimentary global courier tracking on orders exceeding $75
            </div>

            <header className="sticky top-0 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE5DC] z-40">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <nav className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-wider text-[#60524C]">
                        <a href="#" className="text-[#2C2623] border-b border-[#2C2623] pb-0.5">Shop All</a>
                        <a href="#" className="hover:text-[#2C2623] transition">Serums</a>
                        <a href="#" className="hover:text-[#2C2623] transition">Rituals</a>
                        <a href="#" className="hover:text-[#2C2623] transition">Philosophy</a>
                    </nav>

                    <div className="text-center">
                        <span className="text-lg font-bold tracking-[0.25em] uppercase text-[#2C2623]">AURA</span>
                        <span className="block text-[8px] tracking-[0.4em] text-[#A6958A] uppercase -mt-1">BOTANICALS</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <button className="text-xs font-semibold uppercase tracking-wider text-[#60524C] hover:text-[#2C2623] hidden sm:inline-block">
                            Account
                        </button>
                        <button className="relative p-1 group flex items-center space-x-2">
                            <ShoppingBag className="w-4 h-4 text-[#2C2623] group-hover:scale-105 transition" />
                            <span className="text-xs font-bold bg-[#2C2623] text-[#FAF9F5] w-4 h-4 rounded-full flex items-center justify-center text-[9px]">
                                {cartCount}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    <div className="lg:col-span-7 space-y-4">
                        <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#F3ECE3] border border-[#EAE5DC] relative shadow-inner">
                            <img
                                src={selectedProduct.images[activeImgIdx]}
                                alt={selectedProduct.name}
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                            <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm border border-[#EAE5DC] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-[#60524C]">
                                Clean Formulation
                            </span>
                        </div>

                        <div className="flex space-x-3">
                            {selectedProduct.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImgIdx(idx)}
                                    className={`w-20 aspect-square rounded-xl overflow-hidden bg-[#F3ECE3] border transition-all ${activeImgIdx === idx ? 'border-[#2C2623] ring-1 ring-[#2C2623]' : 'border-[#EAE5DC] opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-6 lg:pt-2">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-[#A6958A]">
                                <div className="flex text-[#C1A287]"><Star className="w-3.5 h-3.5 fill-[#C1A287]" /><Star className="w-3.5 h-3.5 fill-[#C1A287]" /><Star className="w-3.5 h-3.5 fill-[#C1A287]" /><Star className="w-3.5 h-3.5 fill-[#C1A287]" /><Star className="w-3.5 h-3.5 fill-[#C1A287]" /></div>
                                <span className="text-xs font-semibold tracking-wide text-[#60524C]">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                            </div>
                            <h1 className="text-3xl font-normal tracking-tight text-[#2C2623] leading-tight">
                                {selectedProduct.name}
                            </h1>
                            <p className="text-sm font-medium text-[#A6958A] italic">
                                {selectedProduct.subtitle}
                            </p>
                        </div>

                        <div className="text-2xl font-light text-[#2C2623]">
                            ${currentPrice}.00
                        </div>

                        <div className="h-[1px] bg-[#EAE5DC]" />

                        <p className="text-[#60524C] text-xs sm:text-sm leading-relaxed font-normal">
                            {selectedProduct.description}
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2C2623]">
                                <span>Select Volume Attribute</span>
                                <span className="text-[#A6958A] font-medium normal-case">
                                    Active: {selectedProduct.volumes[activeVolumeIdx].size}
                                </span>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {selectedProduct.volumes.map((vol, vIdx) => (
                                    <button
                                        key={vIdx}
                                        onClick={() => setActiveVolumeIdx(vIdx)}
                                        className={`p-3.5 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 ${activeVolumeIdx === vIdx
                                                ? 'border-[#2C2623] bg-[#2C2623] text-[#FAF9F5] shadow-md shadow-[#2C2623]/10'
                                                : 'border-[#EAE5DC] bg-white text-[#60524C] hover:border-[#2C2623]/40'
                                            }`}
                                    >
                                        <span className="text-xs font-bold tracking-wide">{vol.size}</span>
                                        <span className={`text-[10px] mt-0.5 ${activeVolumeIdx === vIdx ? 'text-[#FAF9F5]/70' : 'text-[#A6958A]'}`}>
                                            {vol.premium === 0 ? "Base Size" : `+$${vol.premium}`}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex space-x-3 pt-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-[#2C2623] text-[#FAF9F5] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#433B37] transition shadow-lg shadow-[#2C2623]/5 flex items-center justify-center space-x-2"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                <span>Add to Basket</span>
                            </button>

                            <button
                                onClick={() => setIsFavorited(!isFavorited)}
                                className={`px-4 rounded-xl border border-[#EAE5DC] flex items-center justify-center transition-all ${isFavorited ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-white text-[#60524C] hover:text-[#2C2623]'
                                    }`}
                            >
                                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500' : ''}`} />
                            </button>
                        </div>

                        <div className="bg-[#F3ECE3]/60 rounded-xl p-4 border border-[#EAE5DC]/60 grid grid-cols-2 gap-4 text-[11px] text-[#60524C] font-medium">
                            <div className="flex items-center space-x-2">
                                <Check className="w-3.5 h-3.5 text-[#C1A287]" />
                                <span>Cruelty-Free Certified</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-3.5 h-3.5 text-[#C1A287]" />
                                <span>100% Recyclable Glass</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-3.5 h-3.5 text-[#C1A287]" />
                                <span>Vegan Formulation</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className="w-3.5 h-3.5 text-[#C1A287]" />
                                <span>No Artificial Fillers</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <section className="border-t border-[#EAE5DC] bg-white/50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A6958A] block">Curated Pairings</span>
                            <h2 className="text-xl font-normal tracking-tight text-[#2C2623]">Complete the Glow Daily Ritual</h2>
                        </div>
                        <button className="text-xs font-bold uppercase tracking-wider text-[#2C2623] hover:translate-x-1 transition flex items-center space-x-1.5">
                            <span>View All</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {collectionProducts.map((prod) => (
                            <div key={prod.id} className="group cursor-pointer space-y-3">
                                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F3ECE3] border border-[#EAE5DC] relative">
                                    <img
                                        src={prod.img}
                                        alt={prod.name}
                                        className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                                    />
                                    <span className="absolute bottom-3 left-3 bg-white px-2 py-0.5 rounded text-[9px] font-bold text-[#60524C] shadow-sm uppercase tracking-wider">
                                        {prod.tag}
                                    </span>
                                </div>
                                <div className="flex justify-between items-start pt-1">
                                    <div>
                                        <h4 className="text-xs font-bold text-[#2C2623] group-hover:text-[#C1A287] transition">{prod.name}</h4>
                                        <p className="text-[11px] text-[#A6958A] mt-0.5">{prod.size}</p>
                                    </div>
                                    <span className="text-xs font-medium text-[#2C2623]">${prod.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#2C2623] text-[#FAF9F5] py-16 text-center space-y-4">
                <div className="max-w-xl mx-auto px-6 space-y-4">
                    <Sparkles className="w-5 h-5 text-[#C1A287] mx-auto opacity-80" />
                    <h3 className="text-xl font-normal tracking-wide">Radical Transparency. Botanical Potency.</h3>
                    <p className="text-[#A6958A] text-xs sm:text-sm leading-relaxed font-light">
                        We believe you deserve exact structural honesty in your personal rituals. Every organic fluid metric is completely audited for biochemical density from harvest pipeline straight to your mirror shelf.
                    </p>
                </div>
            </section>

            <footer className="bg-[#FAF9F5] border-t border-[#EAE5DC] text-[11px] text-[#A6958A] py-10 text-center tracking-wide">
                <p>© 2026 Aura Botanicals Group LLC. Infinite Radiance Engineered Responsibly.</p>
            </footer>

        </div>
    );
}