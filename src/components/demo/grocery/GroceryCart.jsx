import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";

export default function GroceryCart({ isOpen, onClose, cart, updateQuantity, removeFromCart, cartTotal, totalItemsCount, currency, onCheckout }) {
    return (
        <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
            <div onClick={onClose} className={`absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />
            <div className={`absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="text-emerald-800" size={16} />
                        <h3 className="text-xs font-black text-slate-900">আপনার শপিং কার্ট ({totalItemsCount})</h3>
                    </div>
                    <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-900 rounded-lg"><X size={16} /></button>
                </div>

                <div className="flex-grow overflow-y-auto p-5 space-y-4">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-2 p-6">
                            <ShoppingBag size={24} className="text-slate-300" />
                            <p className="text-xs font-bold text-slate-600">আপনার কার্টটি বর্তমানে খালি আছে</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex gap-4 p-3 border border-slate-100 rounded-xl bg-slate-50/50 items-center justify-between">
                                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover bg-slate-100" />
                                <div className="flex-grow min-w-0 px-1">
                                    <h4 className="text-[11px] font-bold text-slate-900 truncate">{item.name}</h4>
                                    <span className="text-[11px] font-black text-emerald-800 block mt-0.5">{item.price} &times; {item.quantity}</span>
                                </div>
                                <div className="flex items-center gap-1 border border-slate-200 bg-white p-1 rounded-md">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-0.5 hover:bg-slate-100 rounded"><Minus size={8} /></button>
                                    <span className="text-xs font-black px-1 min-w-[12px] text-center">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-0.5 hover:bg-slate-100 rounded"><Plus size={8} /></button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="p-1 text-slate-300 hover:text-red-600"><Trash2 size={12} /></button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
                        <div className="flex justify-between items-center text-xs font-bold">
                            <span className="text-slate-500">সর্বমোট প্রডাক্ট মূল্য:</span>
                            <span className="text-base font-black text-emerald-950">{cartTotal} {currency}</span>
                        </div>
                        {/* 🚀 এখানে onClick={onCheckout} হ্যান্ডলারটি ম্যাপ করা হয়েছে */}
                        <button
                            onClick={onCheckout}
                            className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs rounded-xl shadow-md transition-all active:scale-[0.98]"
                        >
                            অর্ডার সম্পন্ন করুন
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}