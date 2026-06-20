import { X, Star, ShoppingCart, Shield } from "lucide-react";

export default function ProductQuickView({ product, onClose, onAddToCart, currency }) {
    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-100 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row">
                <button onClick={onClose} className="absolute top-4 right-4 z-10 p-1.5 bg-white/80 hover:bg-white text-slate-500 hover:text-slate-950 rounded-full shadow-xs transition-all">
                    <X size={16} />
                </button>

                <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-slate-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">{product.weight}</span>
                        <h3 className="text-sm font-black text-slate-900 tracking-tight leading-snug">{product.name}</h3>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold"><Star size={12} fill="currentColor" /> {product.rating} (Verified Sourcing)</div>
                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed pt-1">আমাদের এই পণ্যটি সরাসরি নিজস্ব তত্ত্বাবধানে মাঠ পর্যায় থেকে সংগৃহীত এবং শতভাগ রাসায়নিক মুক্ত।</p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-100">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-black text-slate-900">{product.price} {currency}</span>
                            <span className="text-xs text-slate-400 line-through">{product.originalPrice} {currency}</span>
                        </div>

                        <button
                            onClick={() => { onAddToCart(product); onClose(); }}
                            className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={14} /> কার্টে যোগ করুন
                        </button>

                        <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-bold justify-center"><Shield size={12} className="text-emerald-800" /> 100% Secure Fresh Sourcing Guarantee</div>
                    </div>
                </div>
            </div>
        </div>
    );
}