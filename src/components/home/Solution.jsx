import { useApp } from "@/hooks/useApp";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

function Solution() {
    const { theme, t } = useApp();

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            {t.solution.title}
                        </h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            {t.solution.desc}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.solution.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="p-8 rounded-2xl bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 backdrop-blur-sm hover:border-purple-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                                        <Check size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-slate-400">{feature.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
export default Solution;