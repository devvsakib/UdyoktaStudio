import { useState } from "react";
import { Eye, ShoppingCart, Sparkles, Layout, ExternalLink, Flame } from "lucide-react";
import DesignDetailModal from "@/components/demo/design/DesignDetailModal";
import designData from "@/data/designShowcase.json";

export default function DesignMarketplaceView({ onSelectDesignCheckout }) {
    const [selectedDesign, setSelectedDesign] = useState(null);
    const { sectionTitle, sectionTagline, currency, designs } = designData;

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                    <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                        <Sparkles size={20} className="text-purple-500 animate-pulse" /> {sectionTitle}
                    </h2>
                    <p className="text-xs text-slate-400 max-w-xl mt-1">{sectionTagline}</p>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-purple-300 w-fit">
                    <Flame size={12} className="text-purple-400" /> Premium Source Files Included
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {designs.map((design) => (
                    <div
                        key={design.id}
                        className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-purple-500/30 transition-all group"
                    >
                        <div className="aspect-[16/10] bg-slate-950 overflow-hidden relative">
                            <img
                                src={design.previewImage}
                                alt={design.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                            />
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    onClick={() => setSelectedDesign(design)}
                                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl shadow-xl text-xs font-bold transition-all flex items-center gap-1.5"
                                >
                                    <Eye size={14} /> কুইক ভিউ
                                </button>
                            </div>
                        </div>

                        <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center">
                                    <span className="text-[9px] font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                                        {design.category}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-bold">{design.tier}</span>
                                </div>
                                <h4 className="text-xs font-bold text-white tracking-tight line-clamp-1 group-hover:text-purple-400 transition-colors">
                                    {design.title}
                                </h4>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 line-through font-medium">{design.originalPrice} {currency}</span>
                                    <span className="text-xs font-black text-white">{design.price} {currency}</span>
                                </div>
                                <button
                                    onClick={() => onSelectDesignCheckout(design)}
                                    className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-xl text-xs font-black shadow-md shadow-purple-900/10 transition-all active:scale-97"
                                >
                                    <ShoppingCart size={13} /> কিনুন
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <DesignDetailModal
                design={selectedDesign}
                onClose={() => setSelectedDesign(null)}
                onSelectPurchase={onSelectDesignCheckout}
                currency={currency}
            />
        </div>
    );
}