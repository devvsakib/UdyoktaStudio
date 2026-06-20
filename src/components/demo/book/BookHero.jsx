import { BookOpen, Layers, User } from "lucide-react";

export default function BookHero({ hero, product, currency, onBuyClick }) {
    return (
        <header className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center border-b border-white/5">
            {/* Left Column: Cover Placeholder */}
            <div className="aspect-[3/4] max-w-sm mx-auto w-full bg-slate-900 rounded-xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                ) : (
                    <div className="space-y-3">
                        <BookOpen size={48} className="text-slate-700 mx-auto" />
                        <span className="text-xs text-slate-500 font-medium tracking-wider uppercase block">
                            Book Cover Placeholder
                        </span>
                    </div>
                )}
            </div>

            {/* Right Column: Identity & CTA */}
            <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                    {hero.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <User size={12} className="text-purple-400" /> {product.author}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Layers size={12} className="text-purple-400" /> {product.pages}
                    </span>
                </div>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {product.description}
                </p>

                <div className="p-4 rounded-xl border border-white/5 bg-slate-900/60 max-w-md flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-black text-white">
                            {product.price} {currency}
                        </span>
                        {product.originalPrice && (
                            <span className="text-xs text-slate-500 line-through block">
                                {product.originalPrice} {currency}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onBuyClick}
                        className="px-6 py-3 bg-white text-slate-950 font-bold text-sm rounded-lg hover:bg-slate-200 transition-all shadow-md"
                    >
                        {hero.ctaText}
                    </button>
                </div>
            </div>
        </header>
    );
}