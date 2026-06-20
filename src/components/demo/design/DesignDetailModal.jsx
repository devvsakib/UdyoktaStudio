import { useState } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck, Download, Maximize2, ZoomIn } from "lucide-react";

export default function DesignDetailModal({ design, currentLang, onClose, onSelectPurchase, currency }) {
    const [isFullZoom, setIsFullZoom] = useState(false);

    if (!design) return null;

    const featuresList = design.features[currentLang] || design.features["bn"];

    return (
        <>
            <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 mt-20">
                <div className="bg-slate-900 border border-slate-800/80 text-slate-100 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in zoom-in-95 duration-200 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 bg-slate-950/60 hover:bg-slate-800 border border-slate-800/50 text-slate-400 hover:text-white rounded-full transition-all backdrop-blur-md"
                    >
                        <X size={14} />
                    </button>

                    <div className="w-full md:w-5/12 bg-slate-950 flex flex-col items-center justify-center relative p-4 border-b md:border-b-0 md:border-r border-slate-800/60 gap-3">
                        <div className="w-full aspect-square rounded-xl overflow-hidden shadow-xl border border-slate-800 bg-slate-900 relative group">
                            <img
                                src={design.previewImage}
                                alt={design.title[currentLang] || design.title["bn"]}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    onClick={() => setIsFullZoom(true)}
                                    className="p-3 bg-purple-600 text-white rounded-full shadow-2xl hover:bg-purple-700 transition-all transform scale-90 group-hover:scale-100 duration-200"
                                >
                                    <Maximize2 size={16} />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsFullZoom(true)}
                            className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 active:scale-98"
                        >
                            <ZoomIn size={13} className="text-purple-400" />
                            {currentLang === "bn" ? "সম্পূর্ণ ইমেজ জুম করুন" : "Zoom In Full Image"}
                        </button>

                        <span className="absolute top-6 left-6 text-[9px] font-black tracking-wider uppercase bg-purple-600 text-white px-2.5 py-1 rounded-md shadow-lg">
                            {design.tier}
                        </span>
                    </div>

                    <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-slate-900">
                        <div className="space-y-4">
                            <div>
                                <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded">
                                    {design.category[currentLang] || design.category["bn"]}
                                </span>
                                <h3 className="text-base font-black tracking-tight leading-snug mt-2 text-white">
                                    {design.title[currentLang] || design.title["bn"]}
                                </h3>
                            </div>

                            <div className="space-y-2 pt-1">
                                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                    {currentLang === "bn" ? "প্যাকেজে যা যা পাচ্ছেন:" : "What's Included:"}
                                </h4>
                                <ul className="space-y-2">
                                    {featuresList.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                                            <CheckCircle size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-800/60">
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-2xl font-black text-white tracking-tight">{design.price} {currency}</span>
                                <span className="text-xs text-slate-500 line-through font-medium">{design.originalPrice} {currency}</span>
                            </div>

                            <button
                                onClick={() => { onSelectPurchase(design); onClose(); }}
                                className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs rounded-xl shadow-lg shadow-purple-900/20 transition-all flex items-center justify-center gap-2 group active:scale-98"
                            >
                                <Download size={14} />
                                {currentLang === "bn" ? "লাইসেন্স অর্ডার করুন" : "Order Template License"}
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>

                            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold justify-center">
                                <ShieldCheck size={13} className="text-purple-500" />
                                {currentLang === "bn" ? "ইনস্ট্যান্ট সোর্স ফাইল ও আর্টওয়ার্ক ডেলিভারি" : "Instant Source Code & Artwork File Delivery"}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {isFullZoom && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200 cursor-zoom-out"
                    onClick={() => setIsFullZoom(false)}
                >
                    <button
                        onClick={() => setIsFullZoom(false)}
                        className="absolute top-6 right-6 p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-full transition-all shadow-2xl flex items-center gap-1 text-xs font-bold"
                    >
                        <X size={14} /> {currentLang === "bn" ? "বন্ধ করুন" : "Close"}
                    </button>

                    <div
                        className="max-w-full max-h-[92vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-900 bg-slate-950 animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()} // ইমেজ ক্লিক করলে যাতে ওভারলে বন্ধ না হয়
                    >
                        <img
                            src={design.previewImage}
                            alt={design.title[currentLang] || design.title["bn"]}
                            className="w-auto h-auto max-w-full max-h-[92vh] object-contain mx-auto"
                        />
                    </div>
                </div>
            )}
        </>
    );
}