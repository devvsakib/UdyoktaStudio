import { useState } from "react";
import { Eye, ShoppingCart, Sparkles, Image, Languages, MessageCircle, Mail, Filter } from "lucide-react";
import DesignDetailModal from "@/components/demo/design/DesignDetailModal";
import designData from "@/data/designShowcase.json";
import { useApp } from "@/hooks/useApp";

export default function DesignPage() {
    const { lang, setLang } = useApp();
    const [selectedDesign, setSelectedDesign] = useState(null);
    const { sectionTitle, sectionTagline, currency, designs, whatsappNumber, contactEmail } = designData;
    const [activeFilter, setActiveFilter] = useState("all");


    const filterOptions = [
        { id: "all", label: { bn: "সব ডিজাইন", en: "All Designs" } },
        { id: "Book Promotion", label: { bn: "বুক প্রমোশন", en: "Book Promotion" } },
        { id: "Book Cover Design", label: { bn: "বুক কভার", en: "Book Covers" } },
        { id: "Khutbah Poster", label: { bn: "খুতবা পোস্টার", en: "Khutbah Posters" } },
        { id: "Campaign Banner", label: { bn: "ক্যাম্পেইন ব্যানার", en: "Campaign Banners" } }
    ];

    const filteredDesigns = activeFilter === "all"
        ? designs
        : designs.filter(design => design.category.en === activeFilter);

    const handlePurchaseRedirect = (design, method = "whatsapp") => {
        const itemTitle = design.title[lang] || design.title["bn"];
        const itemPrice = `${design.price} ${currency}`;

        const textMessage = lang === "bn"
            ? `আসসালামু আলাইকুম, আমি আপনার "${itemTitle}" ডিজাইনটি কিনতে আগ্রহী। মূল্য: ${itemPrice}। আমি কিভাবে সোর্স ফাইলটি পেতে পারি?`
            : `Hello, I am interested in purchasing your design: "${itemTitle}" (${itemPrice}). How can I get the source files?`;

        if (method === "whatsapp") {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
            window.open(whatsappUrl, "_blank");
        } else if (method === "email") {
            const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent("Purchase Design Asset")}&body=${encodeURIComponent(textMessage)}`;
            window.location.href = mailtoUrl;
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased py-20">
            <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center overflow-hidden rounded-3xl border border-slate-900 bg-slate-900/10 backdrop-blur-md shadow-2xl my-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[120px] pointer-events-none rounded-full z-0" />
                <div className="absolute -inset-px bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />

                <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-purple-300 shadow-inner backdrop-blur-xl">
                        <Sparkles size={12} className="text-purple-400" />
                        {lang === "bn" ? "এক্সক্লুসিভ কালেকশন" : "Exclusive Masterpieces"}
                    </div>

                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white max-w-2xl mx-auto">
                        {lang === "bn" ? (
                            <>
                                তোমার সৃজনশীলতাকে অনন্য মাত্রা দিতে{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400">
                                    প্রিমিয়াম আর্টওয়ার্ক
                                </span>
                            </>
                        ) : (
                            <>
                                Elevate Your Brand with{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400">
                                    Curated Artwork
                                </span>
                            </>
                        )}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
                        {sectionTagline[lang] || sectionTagline["bn"]}
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-900/30 border border-slate-900 p-3 rounded-2xl backdrop-blur-md w-full max-w-3xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                        {filterOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setActiveFilter(option.id)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-black tracking-wide transition-all duration-200 active:scale-95 ${activeFilter === option.id
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30 border border-purple-500"
                                    : "bg-slate-950/60 text-slate-400 hover:text-white border border-slate-900 hover:border-slate-800"
                                    }`}
                            >
                                {option.label[lang] || option.label["bn"]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <main className="max-w-6xl mx-auto px-4 sm:px-6">
                {filteredDesigns.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDesigns.map((design) => (
                            <div key={design.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-purple-500/40 transition-all group relative shadow-lg">

                                <div className="aspect-square bg-slate-950 overflow-hidden relative border-b border-slate-900">
                                    <img
                                        src={design.previewImage}
                                        alt={design.title[lang] || design.title["bn"]}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button
                                            onClick={() => setSelectedDesign(design)}
                                            className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl shadow-xl text-xs font-bold transition-all flex items-center gap-1"
                                        >
                                            <Eye size={14} /> {lang === "bn" ? "কুইক ভিউ" : "Quick View"}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                                                {design.category[lang] || design.category["bn"]}
                                            </span>
                                            <span className="text-[10px] text-slate-500 font-bold">{design.tier}</span>
                                        </div>
                                        <h4 className="text-xs font-bold text-white tracking-tight line-clamp-2 min-h-[32px] group-hover:text-purple-400 transition-colors">
                                            {design.title[lang] || design.title["bn"]}
                                        </h4>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-500 line-through font-medium">{design.originalPrice} {currency}</span>
                                            <span className="text-sm font-black text-white">{design.price} {currency}</span>
                                        </div>

                                        <button
                                            onClick={() => handlePurchaseRedirect(design, "whatsapp")}
                                            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-xl text-xs font-black shadow-md transition-all active:scale-97"
                                        >
                                            <MessageCircle size={13} /> {lang === "bn" ? "কিনুন" : "Buy Now"}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                ) : (
                    /* 🚫 নো রেজাল্ট স্টেট */
                    <div className="text-center py-16 bg-slate-900/20 border border-slate-900 rounded-2xl max-w-xl mx-auto space-y-2">
                        <p className="text-sm font-bold text-slate-400">
                            {lang === "bn" ? "এই ক্যাটাগরিতে কোনো ডিজাইন পাওয়া যায়নি।" : "No designs found in this category."}
                        </p>
                    </div>
                )}
            </main>

            <DesignDetailModal
                design={selectedDesign}
                lang={lang}
                onClose={() => setSelectedDesign(null)}
                onSelectPurchase={handlePurchaseRedirect}
                currency={currency}
            />
        </div>
    );
}