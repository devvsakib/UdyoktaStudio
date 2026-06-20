import { ArrowRight, MessageCircle, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useApp } from "@/hooks/useApp";

function Hero() {
  const { t } = useApp();
  const { scrollY } = useScroll();

  // প্যারালাক্স ও ফেডার ইফেক্টস
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // সেফটি ফলব্যাক ডেটা (যদি t অবজেক্ট লোড হতে দেরি করে)
  const headlineText = t?.hero?.headline || "আধুনিক প্রযুক্তির সমন্বয়ে আপনার ডিজিটাল ব্যবসা";
  const words = headlineText.split(" ");

  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-950 flex items-center justify-center py-20">

      {/* অ্যানিমেটেড ব্যাকগ্রাউন্ড ব্লারস */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] animate-pulse [animation-delay:2s]" />
        </motion.div>

        {/* গ্রিড ওভারলে টাইপো ফিক্সড (linear-gradient) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px]" />

        {/* বটম রেডিয়েন্ট শ্যাডো (পরের সেকশনের সাথে স্মুথ ব্লেন্ডিংয়ের জন্য) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* মেইন কন্টেন্ট বডি */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <div className="max-w-4xl mx-auto">

          {/* টপ অ্যানিমেটেড ব্যাজ */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-md mb-8"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              {t?.hero?.badge || "WELCOME TO UDYOKTASTUDIO"}
            </span>
          </motion.div>

          {/* স্টাইলিশ রিভেলেশন হেডলাইন */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.15] tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.04,
                  ease: "easeOut"
                }}
                className="inline-block mr-3 bg-gradient-to-b from-white via-white to-slate-300 bg-clip-text"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* সাব-হেডলাইন */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base sm:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {t?.hero?.subheadline || "আপনার ব্যবসার জন্য ওয়ান-ক্লিক চেকআউট ল্যান্ডিং পেজ এবং কাস্টম ড্যাশবোর্ড সলিউশন।"}
          </motion.p>

          {/* কল-টু-অ্যাকশন বাটন সমূহ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-bold text-base shadow-xl shadow-purple-600/20 flex items-center justify-center gap-2 transition-all duration-200"
            >
              {t?.hero?.primaryCta || "লাইভ ডেমো দেখুন"}
              <Play size={16} className="fill-white group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, bg: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold text-base border border-white/10 flex items-center justify-center gap-2 transition-all duration-200"
            >
              {t?.hero?.secondaryCta || "ফ্রি কন্সাল্টেশন"}
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* ব্যবসার রিয়েল স্ট্যাটস কাউন্টার */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto p-6 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-md"
          >
            {t?.hero?.stats?.map((stat, i) => (
              <div key={i} className="text-center relative after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-[1px] after:bg-white/5 last:after:hidden">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1.5">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* স্ক্রোল ইন্ডিকেটর মাউস আইকন */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-purple-400 rounded-full animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;