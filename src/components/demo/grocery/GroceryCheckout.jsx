import { useState } from "react";
import { ArrowLeft, CreditCard, Truck, ShieldCheck, ShoppingBag } from "lucide-react";

export default function GroceryCheckout({ cart, cartTotal, currency, onBack, onOrderSuccess }) {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
        zilla: ""
    });
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "আপনার নাম লিখুন";
        if (!formData.phone.trim()) newErrors.phone = "সঠিক মোবাইল নম্বর দিন";
        if (!formData.address.trim()) newErrors.address = "পূর্ণাঙ্গ ঠিকানা লিখুন";
        if (!formData.zilla.trim()) newErrors.zilla = "জেলার নাম সিলেক্ট বা টাইপ করুন";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const randomOrderId = Math.floor(100000 + Math.random() * 900000);
            onOrderSuccess(randomOrderId);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-20">
            <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-30">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                        <ArrowLeft size={14} /> কার্ট-এ ফিরে যান
                    </button>
                    <h2 className="text-sm font-black text-slate-900 tracking-tight">চেকআউট প্রসেস</h2>
                    <div className="w-14" />
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-12 gap-8 items-start">
                <form onSubmit={handleSubmit} className="md:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-6 space-y-6 shadow-xs">
                    <h3 className="text-sm font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">ডেলিভারি ইনফরমেশন</h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Full Name *</label>
                            <input
                                type="text"
                                placeholder="আপনার নাম লিখুন"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className={`w-full bg-slate-50 border ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-emerald-600'} text-slate-950 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.fullName && <p className="text-[10px] font-bold text-red-500">{errors.fullName}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Phone Number *</label>
                            <input
                                type="tel"
                                placeholder="017XXXXXXXX"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-emerald-600'} text-slate-950 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.phone && <p className="text-[10px] font-bold text-red-500">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Zilla / District *</label>
                            <input
                                type="text"
                                placeholder="যেমন: সিলেট, ঢাকা"
                                value={formData.zilla}
                                onChange={(e) => setFormData({ ...formData, zilla: e.target.value })}
                                className={`w-full bg-slate-50 border ${errors.zilla ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-emerald-600'} text-slate-950 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.zilla && <p className="text-[10px] font-bold text-red-500">{errors.zilla}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Full Address *</label>
                            <input
                                type="text"
                                placeholder="গ্রাম/রোড, ইউনিয়ন, থানা উল্লেখ করুন"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className={`w-full bg-slate-50 border ${errors.address ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-emerald-600'} text-slate-950 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:bg-white transition-all`}
                            />
                            {errors.address && <p className="text-[10px] font-bold text-red-500">{errors.address}</p>}
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <h3 className="text-sm font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">পেমেন্ট মেথড</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            <div
                                onClick={() => setPaymentMethod("cod")}
                                className={`border rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "cod" ? 'border-emerald-600 bg-emerald-50/40' : 'border-slate-200 hover:bg-slate-50'}`}
                            >
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "cod" ? 'border-emerald-600' : 'border-slate-300'}`}>
                                    {paymentMethod === "cod" && <div className="w-2 h-2 rounded-full bg-emerald-600" />}
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1"><Truck size={14} className="text-emerald-800" /> Cash on Delivery</h4>
                                    <p className="text-[10px] text-slate-400 mt-0.5">পণ্য হাতে পেয়ে পেমেন্ট করুন</p>
                                </div>
                            </div>

                            <div
                                onClick={() => setPaymentMethod("bkash")}
                                className={`border rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === "bkash" ? 'border-pink-600 bg-pink-50/20' : 'border-slate-200 hover:bg-slate-50'}`}
                            >
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "bkash" ? 'border-pink-600' : 'border-slate-300'}`}>
                                    {paymentMethod === "bkash" && <div className="w-2 h-2 rounded-full bg-pink-600" />}
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1"><CreditCard size={14} className="text-pink-600" /> bKash Wallet</h4>
                                    <p className="text-[10px] text-slate-400 mt-0.5">বিকাশ গেটওয়ের মাধ্যমে পেমেন্ট</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-black text-sm rounded-xl shadow-md transition-all text-center mt-4 active:scale-[0.99]"
                    >
                        অর্ডার নিশ্চিত করুন ({cartTotal} {currency})
                    </button>
                </form>

                <div className="md:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-5 space-y-4 shadow-xs sticky top-28">
                    <h3 className="text-sm font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">অর্ডার সামারি</h3>
                    <div className="max-h-[220px] overflow-y-auto space-y-3 pr-1">
                        {cart.map(item => (
                            <div key={item.id} className="flex gap-3 items-center justify-between py-1">
                                <img src={item.image} alt={item.name} className="w-9 h-9 rounded-lg object-cover bg-slate-100 flex-shrink-0" />
                                <div className="flex-grow min-w-0">
                                    <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                                    <span className="text-[10px] font-medium text-slate-400">{item.weight} &times; {item.quantity}</span>
                                </div>
                                <span className="text-xs font-bold text-slate-900 whitespace-nowrap">{item.price * item.quantity} {currency}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-slate-100 pt-4 space-y-2.5 text-xs font-bold">
                        <div className="flex justify-between text-slate-500">
                            <span>উপমোট মূল্য</span>
                            <span>{cartTotal} {currency}</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>ডেলিভারি চার্জ</span>
                            <span className="text-emerald-700">ফ্রি</span>
                        </div>
                        <div className="border-t border-slate-100 pt-3 flex justify-between text-sm font-black text-emerald-950">
                            <span>সর্বমোট</span>
                            <span>{cartTotal} {currency}</span>
                        </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[10px] text-slate-400 font-medium leading-relaxed flex gap-2 items-start">
                        <ShieldCheck size={16} className="text-emerald-800 flex-shrink-0 mt-0.5" />
                        আপনার সমস্ত ট্রানজ্যাকশন এবং তথ্য এন্ড-টু-এন্ড এনক্রিপশনের মাধ্যমে সম্পূর্ণ সুরক্ষিত।
                    </div>
                </div>
            </main>
        </div>
    );
}