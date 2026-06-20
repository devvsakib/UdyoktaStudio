import { useState } from "react";
import { Eye, ShoppingCart, Sparkles, Image, ShieldCheck, ArrowLeft, CheckCircle, Languages } from "lucide-react";
import DesignDetailModal from "@/components/demo/design/DesignDetailModal";
import GroceryCheckout from "@/components/demo/grocery/GroceryCheckout";
import GrocerySuccess from "@/components/demo/grocery/GrocerySuccess";
import designData from "@/data/designShowcase.json";

export default function DesignPage() {
    const [currentLang, setCurrentLang] = useState("bn"); // 'bn' | 'en'
    const [viewState, setViewState] = useState("grid"); // grid | checkout | success
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [checkoutItem, setCheckoutItem] = useState(null);
    const [activeOrderId, setActiveOrderId] = useState(null);

    const { sectionTitle, sectionTagline, currency, designs } = designData;

    const handleInitiateCheckout = (design) => {
        setCheckoutItem(design);
        setViewState("checkout");
    };

    const handleOrderSuccess = (orderId) => {
        setActiveOrderId(orderId);
        setViewState("success");
    };

    const toggleLanguage = () => {
        setCurrentLang((prev) => (prev === "bn" ? "en" : "bn"));
    };

    if (viewState === "checkout" && checkoutItem) {
        const pseudoCart = [{
            id: checkoutItem.id,
            name: checkoutItem.title[currentLang] || checkoutItem.title["bn"],
            price: checkoutItem.price,
            weight: checkoutItem.tier,
            quantity: 1,
            image: checkoutItem.previewImage
        }];

        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between antialiased">
                <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <button
                            onClick={() => setViewState("grid")}
                            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={14} /> {currentLang === "bn" ? "ফিরে যান" : "Back"}
                        </button>
                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-md border border-purple-500/20">
                            {currentLang === "bn" ? "নিরাপদ চেকআউট" : "Secure Checkout"}
                        </span>
                    </div>
                </header>

                <div className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-slate-950">
                    <div className="max-w-3xl w-full bg-slate-900/60 border border-slate-800/80 rounded-3xl p-2 shadow-2xl backdrop-blur-md text-slate-100 [&>div]:bg-slate-900 [&>div]:text-slate-100 [&_input]:bg-slate-950 [&_input]:border-slate-800 [&_input]:text-white [&_select]:bg-slate-950 [&_select]:border-slate-800 [&_select]:text-white [&_button]:text-white">
                        <GroceryCheckout
                            cart={pseudoCart}
                            cartTotal={checkoutItem.price}
                            currency={currency}
                            onBack={() => setViewState("grid")}
                            onOrderSuccess={handleOrderSuccess}
                        />
                    </div>
                </div>
            </div>
        );
    }

    if (viewState === "success" && checkoutItem) {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-1 shadow-2xl [&>div]:bg-slate-900 [&>div]:text-slate-100">
                    <GrocerySuccess
                        orderId={activeOrderId}
                        orderTotal={checkoutItem.price}
                        currency={currency}
                        onClose={() => { setCheckoutItem(null); setViewState("grid"); }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased py-20">

            <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center overflow-hidden rounded-3xl border border-slate-900 bg-slate-900/10 backdrop-blur-md shadow-2xl">

                {/* 🌌 ব্যাকগ্রাউন্ড গ্লাস-মরফিজম পার্পল গ্লো এবং ইফেক্টস */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[120px] pointer-events-none rounded-full z-0" />
                <div className="absolute -inset-px bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />

                <div className="relative z-10 space-y-6 max-w-3xl mx-auto">

                    {/* ✨ টপ এনিমেশন ব্যাজ */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-purple-300 shadow-inner backdrop-blur-xl animate-bounce duration-1000">
                        <Sparkles size={12} className="text-purple-400 animate-pulse" />
                        {currentLang === "bn" ? "এক্সক্লুসিভ কালেকশন" : "Exclusive Masterpieces"}
                    </div>

                    {/* 👑 মেইন মেগা হেডিং (গ্রেডিয়েন্ট টেক্সট ইফেক্ট) */}
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white max-w-2xl mx-auto">
                        {currentLang === "bn" ? (
                            <>
                                তোমার সৃজনশীলতাকে অনন্য মাত্রা দিতে{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 animate-gradient-x drop-shadow-[0_2px_10px_rgba(168,85,247,0.2)]">
                                    প্রিমিয়াম আর্টওয়ার্ক
                                </span>
                            </>
                        ) : (
                            <>
                                Elevate Your Brand with{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 animate-gradient-x drop-shadow-[0_2px_10px_rgba(168,85,247,0.2)]">
                                    Curated Artwork
                                </span>
                            </>
                        )}
                    </h2>

                    {/* 📄 ডাইনামিক সাব-ট্যাগলাইন */}
                    <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
                        {sectionTagline[currentLang] || sectionTagline["bn"]}
                    </p>

                    {/* 🛠️ ট্রাস্ট ইন্ডিকেটর ব্যাজেস */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-[11px] font-bold text-slate-500">
                        <div className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            {currentLang === "bn" ? "প্রিন্ট-রেডি CMYK ফাইল" : "Print-Ready CMYK"}
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef]" />
                            {currentLang === "bn" ? "১০০% লেয়ারড সোর্স কোড" : "100% Layered Files"}
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                            {currentLang === "bn" ? "কমার্শিয়াল লাইসেন্স" : "Commercial License"}
                        </div>
                    </div>

                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designs.map((design) => (
                        <div key={design.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-purple-500/40 transition-all group relative shadow-lg">

                            <div className="aspect-square bg-slate-950 overflow-hidden relative border-b border-slate-900">
                                <img
                                    src={design.previewImage}
                                    alt={design.title[currentLang] || design.title["bn"]}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                                />
                                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={() => setSelectedDesign(design)}
                                        className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl shadow-xl text-xs font-bold transition-all flex items-center gap-1"
                                    >
                                        <Eye size={14} /> {currentLang === "bn" ? "কুইক ভিউ" : "Quick View"}
                                    </button>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                                            {design.category[currentLang] || design.category["bn"]}
                                        </span>
                                        <span className="text-[10px] text-slate-500 font-bold">{design.tier}</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-white tracking-tight line-clamp-2 min-h-[32px] group-hover:text-purple-400 transition-colors">
                                        {design.title[currentLang] || design.title["bn"]}
                                    </h4>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-500 line-through font-medium">{design.originalPrice} {currency}</span>
                                        <span className="text-sm font-black text-white">{design.price} {currency}</span>
                                    </div>
                                    <button
                                        onClick={() => handleInitiateCheckout(design)}
                                        className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-xl text-xs font-black shadow-md transition-all active:scale-97"
                                    >
                                        <ShoppingCart size={13} /> {currentLang === "bn" ? "কিনুন" : "Buy Now"}
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </main>

            <DesignDetailModal
                design={selectedDesign}
                currentLang={currentLang}
                onClose={() => setSelectedDesign(null)}
                onSelectPurchase={handleInitiateCheckout}
                currency={currency}
            />
        </div>
    );
}