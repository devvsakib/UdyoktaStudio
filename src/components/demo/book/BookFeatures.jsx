import { Layers, Truck } from "lucide-react";

export default function BookFeatures({ features }) {
    return (
        <section className="py-12 px-6 bg-slate-900/30 border-b border-white/5">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-xl border border-white/5 bg-slate-900/40">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                            {idx === 0 ? <Layers size={18} /> : <Truck size={18} />}
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}