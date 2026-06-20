import { useState } from "react";
import { ShoppingCart, ShieldCheck, Truck, RotateCcw, ChevronRight } from "lucide-react";

function DemoStoreTemplate({ storeData }) {
    const [cartCount, setCartCount] = useState(0);
    const [selectedSizes, setSelectedSizes] = useState({});

    if (!storeData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white font-medium">
                Loading Demo Store...
            </div>
        );
    }

    const { storeName, category, currency, hero, products, features } = storeData;

    const handleSizeSelect = (productId, size) => {
        setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">

            {/* Mini Navbar */}
            <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block">
                            {category}
                        </span>
                        <h1 className="text-xl font-black text-white tracking-tight">{storeName}</h1>
                    </div>

                    <div className="relative p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer border border-white/5">
                        <ShoppingCart size={20} className="text-slate-200" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative py-20 px-6 border-b border-white/5 bg-radial from-slate-900 via-slate-950 to-slate-950">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                        {hero.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                        {hero.subtitle}
                    </p>
                    <button className="px-6 py-3 bg-white text-slate-950 font-semibold text-sm rounded-lg hover:bg-slate-200 transition-all shadow-md">
                        {hero.ctaText}
                    </button>
                </div>
            </header>

            {/* Core Values / Features */}
            <section className="py-8 px-6 bg-slate-900/40 border-b border-white/5">
                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/20">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                                {idx === 0 ? <Truck size={18} /> : <ShieldCheck size={18} />}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-0.5">{feature.title}</h4>
                                <p className="text-xs text-slate-400">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Catalog Grid */}
            <main className="py-16 px-6 max-w-6xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-8 tracking-tight flex items-center gap-2">
                    Featured Products <ChevronRight size={16} className="text-slate-500" />
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-col bg-slate-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-200"
                        >
                            {/* Product Image Placeholder */}
                            <div className="aspect-square bg-slate-900 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                                {product.image ? (
                                    <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                                ) : (
                                    <span className="text-xs text-slate-600 font-medium tracking-wider uppercase">
                                        No Image Available
                                    </span>
                                )}
                                {!product.inStock && (
                                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-red-400 border border-red-500/30 px-3 py-1 bg-red-500/5 rounded">
                                            Out of Stock
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h4 className="text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-purple-400 transition-colors">
                                    {product.name}
                                </h4>
                                <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed flex-grow">
                                    {product.description}
                                </p>

                                {/* Dynamic Attributes Based on Meta Properties */}
                                {product.sizes && (
                                    <div className="mb-4">
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
                                            Select Size
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {product.sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => handleSizeSelect(product.id, size)}
                                                    className={`text-xs px-2.5 py-1 rounded font-semibold border transition-all ${selectedSizes[product.id] === size
                                                            ? "bg-purple-600 border-purple-500 text-white"
                                                            : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {product.volume && (
                                    <div className="mb-4 text-xs font-medium text-slate-400">
                                        <span className="text-slate-500">Volume:</span> {product.volume}
                                    </div>
                                )}

                                {product.warranty && (
                                    <div className="mb-4 text-xs font-medium text-slate-400">
                                        <span className="text-slate-500">Warranty:</span> {product.warranty}
                                    </div>
                                )}

                                {/* Price and Action button */}
                                <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
                                    <div>
                                        <span className="text-lg font-black text-white">
                                            {product.price} {currency}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-xs text-slate-500 line-through block">
                                                {product.originalPrice} {currency}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        disabled={!product.inStock}
                                        onClick={() => setCartCount((prev) => prev + 1)}
                                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-40 disabled:hover:bg-white/5 text-white font-semibold text-xs rounded-lg transition-all"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 text-center text-xs text-slate-600 border-t border-white/5 bg-slate-950">
                &copy; {new Date().getFullYear()} {storeName}. Powered by UdyoktaStudio.
            </footer>
        </div>
    );
}

export default DemoStoreTemplate;