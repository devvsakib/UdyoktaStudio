import { useState } from "react";
import { Palette, Layout, Type, Image as ImageIcon, Save, RefreshCw } from "lucide-react";

export default function StoreDesignSettings({ currentSettings, onUpdateSettings, onResetSettings }) {
    const [activeTab, setActiveTab] = useState("theme");
    const [localSettings, setLocalSettings] = useState(currentSettings);

    const themeOptions = [
        { id: "emerald", name: "Organic Emerald (Default)", primary: "from-emerald-950 to-teal-900", accent: "bg-amber-500 text-slate-950", headerBg: "bg-emerald-900" },
        { id: "rose", name: "Berry & Rose Sweet", primary: "from-rose-950 to-pink-900", accent: "bg-slate-900 text-white", headerBg: "bg-rose-900" },
        { id: "amber", name: "Spicy Amber & Gold", primary: "from-amber-950 to-orange-900", accent: "bg-emerald-800 text-white", headerBg: "bg-amber-950" },
        { id: "indigo", name: "Modern Grocery Indigo", primary: "from-indigo-950 to-blue-900", accent: "bg-cyan-500 text-slate-950", headerBg: "bg-indigo-900" }
    ];

    const fontOptions = [
        { id: "font-sans", name: "System Sans-Serif" },
        { id: "font-serif", name: "Premium Serif / Bengali Traditional" },
        { id: "font-mono", name: "Tech Minimalist Mono" }
    ];

    const handleChange = (key, value) => {
        const updated = { ...localSettings, [key]: value };
        setLocalSettings(updated);
        onUpdateSettings(updated);
    };

    const handleThemeChange = (theme) => {
        const updated = {
            ...localSettings,
            themeId: theme.id,
            primaryGradient: theme.primary,
            accentClass: theme.accent,
            headerBgClass: theme.headerBg
        };
        setLocalSettings(updated);
        onUpdateSettings(updated);
    };

    return (
        <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-2">
                        <Palette size={16} className="text-emerald-800" /> স্টোর ডিজাইন সেটিংস
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">রিয়েল-টাইম কাস্টমাইজেশন প্যানেল</p>
                </div>
                <button
                    onClick={() => { onResetSettings(); setLocalSettings(currentSettings); }}
                    className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    title="রিসেট করুন"
                >
                    <RefreshCw size={14} />
                </button>
            </div>

            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-[11px] font-bold">
                <button
                    onClick={() => setActiveTab("theme")}
                    className={`flex-1 py-2 text-center rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeTab === "theme" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"}`}
                >
                    <Palette size={12} /> থিম কালার
                </button>
                <button
                    onClick={() => setActiveTab("content")}
                    className={`flex-1 py-2 text-center rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeTab === "content" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"}`}
                >
                    <Layout size={12} /> ব্যানার টেক্সট
                </button>
                <button
                    onClick={() => setActiveTab("typography")}
                    className={`flex-1 py-2 text-center rounded-lg transition-all flex items-center justify-center gap-1.5 ${activeTab === "typography" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-900"}`}
                >
                    <Type size={12} /> ফন্ট ও লেআউট
                </button>
            </div>

            <div className="space-y-4 min-h-[180px]">
                {activeTab === "theme" && (
                    <div className="space-y-3">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">ভিজ্যুয়াল কালার কম্বিনেশন</label>
                        <div className="grid grid-cols-1 gap-2">
                            {themeOptions.map((theme) => (
                                <div
                                    key={theme.id}
                                    onClick={() => handleThemeChange(theme)}
                                    className={`border rounded-xl p-3 flex items-center justify-between cursor-pointer transition-all ${localSettings.themeId === theme.id ? "border-slate-900 bg-slate-50" : "border-slate-100 hover:bg-slate-50/50"}`}
                                >
                                    <span className="text-xs font-bold text-slate-800">{theme.name}</span>
                                    <div className="flex gap-1.5 items-center">
                                        <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${theme.primary} shadow-xs`} />
                                        <div className={`w-5 h-5 rounded-md ${theme.headerBgClass} shadow-xs`} />
                                        <div className={`w-3 h-3 rounded-full ${theme.accent.split(" ")[0]}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "content" && (
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 block">স্টোরের নাম</label>
                            <input
                                type="text"
                                value={localSettings.storeName}
                                onChange={(e) => handleChange("storeName", e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-950 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-500 block">ব্যানার হেডিং</label>
                            <input
                                type="text"
                                value={localSettings.bannerHeading}
                                onChange={(e) => handleChange("bannerHeading", e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-950 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "typography" && (
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">টাইপোগ্রাফি স্টাইল</label>
                            <div className="grid grid-cols-1 gap-2">
                                {fontOptions.map((font) => (
                                    <div
                                        key={font.id}
                                        onClick={() => handleChange("fontClass", font.id)}
                                        className={`border rounded-xl p-3 cursor-pointer transition-all ${localSettings.fontClass === font.id ? "border-slate-900 bg-slate-50" : "border-slate-100 hover:bg-slate-50/50"}`}
                                    >
                                        <span className={`text-xs font-bold text-slate-800 ${font.id}`}>{font.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl">
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">প্রোডাক্ট গ্রিড সাইজ</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">৩ কলাম নাকি ৪ কলাম লেআউট</p>
                            </div>
                            <select
                                value={localSettings.gridColumns}
                                onChange={(e) => handleChange("gridColumns", e.target.value)}
                                className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-xs font-bold focus:outline-none"
                            >
                                <option value="grid-cols-3">৩ কলাম গ্রিড</option>
                                <option value="grid-cols-4">৪ কলাম গ্রিড</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>

            <div className="pt-2 border-t border-slate-100 flex gap-2">
                <button
                    onClick={() => onUpdateSettings(localSettings)}
                    className="flex-grow py-3 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                    <Save size={14} /> সেটিংস পরিবর্তন সেভ করুন
                </button>
            </div>
        </div>
    );
}