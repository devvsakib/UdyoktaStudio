import { useState } from "react";

export default function GroceryCoupon({ onApplyCoupon, currency }) {
    const [code, setCode] = useState("");
    const [msg, setMsg] = useState("");
    const [status, setStatus] = useState("");

    const handleApply = (e) => {
        e.preventDefault();
        if (code.toUpperCase() === "FREE10") {
            onApplyCoupon(10);
            setMsg("১০% ডিসকাউন্ট সফলভাবে যুক্ত হয়েছে!");
            setStatus("success");
        } else {
            setMsg("দুঃখিত! ভুল কুপন কোড।");
            setStatus("error");
        }
    };

    return (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900">ডিসকাউন্ট কুপন</h4>
            <form onSubmit={handleApply} className="flex gap-2">
                <input
                    type="text"
                    placeholder="কোড দিন (যেমন: FREE10)"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="flex-grow bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-600 uppercase"
                />
                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all">
                    Apply
                </button>
            </form>
            {msg && (
                <p className={`text-[10px] font-bold ${status === "success" ? "text-emerald-700" : "text-red-500"}`}>
                    {msg}
                </p>
            )}
        </div>
    );
}