import { motion } from "motion/react";
import { useApp } from "@/hooks/useApp";
import {
    FileText,
    Paintbrush,
    Code2,
    Rocket,
    ChevronRight
} from "lucide-react";

function Process() {
    const { theme, t } = useApp();
    const isDark = theme === 'dark';

    // নন-টেক কাস্টমারদের সহজে বোঝানোর জন্য লোকাল ল্যাঙ্গুয়েজ ডেটা ফলব্যাক
    const stepsData = [
        {
            num: "০১",
            icon: FileText,
            title: t?.process?.step1?.title || "পছন্দ ও আলোচনা",
            desc: "আমাদের তৈরি চমৎকার ডেমোগুলো থেকে আপনার বিজনেসের সাথে মিল রেখে যেকোনো একটি ডিজাইন বেছে নিন। এরপর আপনার লোগো, প্রোডাক্ট এবং কালার নিয়ে আমরা খোলামেলা আলোচনা করব।"
        },
        {
            num: "০২",
            icon: Paintbrush,
            title: t?.process?.step2?.title || "কনটেন্ট ও সাজসজ্জা",
            desc: "আপনার প্রোডাক্টের ছবি, নাম, দাম এবং যোগাযোগের ডিটেইলস আমাদের বুঝিয়ে দিন। কোনো টেকনিক্যাল জটিলতা ছাড়াই আপনার দেওয়া তথ্য দিয়ে ল্যান্ডিং পেজটি আমরা নিখুঁতভাবে সাজাবো।"
        },
        {
            num: "০৩",
            icon: Code2,
            title: t?.process?.step3?.title || "ম্যাজিক ডেভেলপমেন্ট",
            desc: "এবার আমাদের কাজ! কোনো কোডিং ছাড়াই কাস্টমার যেন সহজে অর্ডার করতে পারে, সেজন্য ফাস্ট ওয়ান-ক্লিক চেকআউট ফর্ম এবং অটোমেটিক হোয়াটসঅ্যাপ মেসেজ সেটআপ রেডি করব।"
        },
        {
            num: "০৪",
            icon: Rocket,
            title: t?.process?.step4?.title || "লাইভ ও সেলস শুরু",
            desc: "মাত্র ৭ দিনের মাথায় আপনার নিজস্ব ডোমেইন বা নামে ওয়েবসাইটটি লাইভ হয়ে যাবে। এরপর আপনি ফেসবুক বা পেজে লিংক শেয়ার করে প্রফেশনাল উপায়ে হাজার হাজার অর্ডার নেওয়া শুরু করবেন!"
        }
    ];

    return (
        <section id="process" className={`py-28 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>

            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 ${isDark ? 'bg-purple-600/30' : 'bg-purple-400/10'}`} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    {/* হেডার টেক্সট */}
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className={`text-3xl md:text-4xl font-black mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {t?.process?.title || "আপনার স্বপ্নের ওয়েবসাইট যেভাবে তৈরি হবে"}
                        </h2>
                        <p className={`text-sm font-semibold tracking-wide uppercase ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                            {t?.process?.timeline || "সহজ ৪টি ধাপে মাত্র ৭ দিনে ডেলিভারি"}
                        </p>
                    </div>

                    {/* প্রসেস কার্ডস গ্রিড লেআউট */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">

                        {stepsData.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    whileHover={{ y: -6 }}
                                    className={`relative p-6 rounded-2xl border transition-all duration-300 group flex flex-col items-start ${isDark
                                            ? 'bg-slate-900/40 border-white/5 hover:border-purple-500/20 hover:bg-slate-900/80 shadow-2xl shadow-black/40'
                                            : 'bg-white border-slate-200/80 hover:border-purple-500/30 hover:bg-white shadow-xl shadow-slate-200/40'
                                        }`}
                                >
                                    {/* স্টেপ মেকিং লাইন (লার্জ স্ক্রিনের জন্য) */}
                                    {i < 3 && (
                                        <div className="absolute top-12 -right-6 w-12 h-[2px] hidden lg:flex items-center z-0 pointer-events-none">
                                            <div className={`w-full h-full border-t-2 border-dashed ${isDark ? 'border-purple-500/20' : 'border-purple-600/20'}`} />
                                            <ChevronRight size={14} className={`absolute right-0 -top-[6px] ${isDark ? 'text-purple-500/20' : 'text-purple-600/20'}`} />
                                        </div>
                                    )}

                                    {/* আইকন এবং নাম্বারিং কন্টেইনার */}
                                    <div className="w-full flex items-center justify-between mb-6 relative z-10">
                                        <div className={`p-3.5 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${isDark
                                                ? 'bg-purple-500/5 border-purple-500/10 text-purple-400'
                                                : 'bg-purple-500/5 border-purple-500/20 text-purple-600'
                                            }`}>
                                            <Icon size={22} className="stroke-[2]" />
                                        </div>

                                        <span className={`text-3xl font-black select-none opacity-20 tracking-wider ${isDark ? 'text-slate-700 group-hover:opacity-40' : 'text-slate-300 group-hover:opacity-60'
                                            }`}>
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* টেক্সট কনটেন্ট */}
                                    <div className="relative z-10 mt-auto">
                                        <h3 className={`font-bold text-lg mb-2 tracking-wide transition-colors ${isDark ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-purple-700'
                                            }`}>
                                            {step.title}
                                        </h3>

                                        <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'
                                            }`}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Process;