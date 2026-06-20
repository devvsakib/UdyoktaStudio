import { ShoppingBag, Search, Phone, Mail } from "lucide-react";

export default function GroceryHeader({ storeName, hotline, email, searchQuery, setSearchQuery, totalItemsCount, onCartOpen }) {
    return (
        <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
            <div className="bg-emerald-900 text-emerald-100 text-[11px] py-2 px-6 hidden sm:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5"><Phone size={12} className="text-amber-400" /> হটলাইন: {hotline}</span>
                        <span className="flex items-center gap-1.5"><Mail size={12} className="text-amber-400" /> {email}</span>
                    </div>
                    <div className="font-medium text-amber-300">১০০% পিওর ও ন্যাচারাল ফুড প্রোডাক্টস</div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto gap-4">
                    <h1 className="text-xl font-black tracking-tight text-emerald-950 flex items-center gap-2">
                        <span className="bg-emerald-800 text-white p-1.5 rounded-lg text-sm">GB</span>
                        {storeName}
                    </h1>
                    <button onClick={onCartOpen} className="md:hidden relative p-2 bg-emerald-50 text-emerald-800 rounded-xl">
                        <ShoppingBag size={18} />
                        {totalItemsCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white rounded-full text-[9px] font-black flex items-center justify-center">
                                {totalItemsCount}
                            </span>
                        )}
                    </button>
                </div>

                <div className="relative w-full md:max-w-md">
                    <input
                        type="text"
                        placeholder="কাঙ্ক্ষিত প্রোডাক্টটি খুঁজুন..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-100 border border-slate-200 text-slate-950 rounded-xl px-4 py-2 pl-9 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                    />
                    <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
                </div>

                <button onClick={onCartOpen} className="hidden md:flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all">
                    <ShoppingBag size={14} />
                    আমার কার্ট ({totalItemsCount})
                </button>
            </div>
        </header>
    );
}