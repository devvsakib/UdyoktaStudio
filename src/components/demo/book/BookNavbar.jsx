import { ShoppingCart } from "lucide-react";

export default function BookNavbar({ storeName, cartCount, onBuyClick }) {
    return (
        <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block">
                        {storeName}
                    </span>
                    <h1 className="text-lg font-black text-white tracking-tight">Featured Edition</h1>
                </div>

                <button
                    onClick={onBuyClick}
                    className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2"
                >
                    <ShoppingCart size={14} /> Buy Now ({cartCount})
                </button>
            </div>
        </nav>
    );
}