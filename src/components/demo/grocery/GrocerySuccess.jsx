import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";

export default function GrocerySuccess({ orderId, orderTotal, currency, onClose }) {
    return (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle size={32} />
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-black text-slate-900">অর্ডারটি সফলভাবে সম্পন্ন হয়েছে!</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।</p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left space-y-2.5">
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-medium">অর্ডার আইডি:</span>
                        <span className="text-slate-950 font-black tracking-wider uppercase">#{orderId}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-medium">সর্বমোট মূল্য:</span>
                        <span className="text-emerald-800 font-black">{orderTotal} {currency}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-medium">ডেলিভারি মেথড:</span>
                        <span className="text-slate-700 font-bold">ক্যাশ অন ডেলিভারি</span>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group active:scale-98"
                >
                    <ShoppingBag size={14} />
                    শপিং চালিয়ে যান
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
}