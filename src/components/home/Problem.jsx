import { useApp } from "@/hooks/useApp";
import { 
  AlertTriangle, 
  MessageSquareX, 
  TrendingDown, 
  Clock3, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

function Problem() {
  const { theme, t } = useApp();

  const sectionData = {
    badge: t?.problem?.badge || "THE HARD REALITY",
    title: t?.problem?.title || "শুধু সোশ্যাল মিডিয়ায় সেল কেন আপনার ব্যবসাকে আটকে রাখছে?",
    subtitle: t?.problem?.subtitle || "ফেসবুক পেজ বা ইনবক্সে অর্ডার নেওয়া সাময়িক সলিউশন হতে পারে, কিন্তু দীর্ঘমেয়াদে একটি প্রফেশনাল প্ল্যাটফর্ম ছাড়া ব্যবসা স্কেল করা অসম্ভব।"
  };

  const painPoints = [
    {
      title: "ইনবক্স জ্যাম ও কাস্টমার ড্রপআউট",
      icon: MessageSquareX,
      desc: "কাস্টমার মেসেজ দেওয়ার পর রিপ্লাই দিতে ৫ মিনিট দেরি হলেই তারা অন্য পেজে চলে যায়। ২৪ ঘণ্টা ইনবক্সে বসে ম্যানুয়ালি অর্ডার নেওয়া এবং স্টক ট্র্যাক করা প্রায় অসম্ভব।"
    },
    {
      title: "ফেসবুক অ্যালগরিদমের খাঁচায় বন্দি",
      icon: TrendingDown,
      desc: "আজ পেজের রিচ ভালো তো কাল একদম ডাউন। সোশ্যাল মিডিয়ার নিজস্ব অ্যালগরিদম চেঞ্জের কারণে আপনার এতদিনের জমানো অডিয়েন্স যেকোনো সময় হাতছাড়া হতে পারে।"
    },
    {
      title: "অর্ডার ট্র্যাকিং ও হিসাবের গোলমাল",
      icon: Clock3,
      desc: "কে বিকাশ বা bKash-এ পেমেন্ট করলো, কার অর্ডার ডেলিভারি হলো আর কারটা পেন্ডিং—খাতায় বা মেসেজ স্ক্রোল করে এই হিসাব মেলাতে গিয়ে প্রতিদিন ঘণ্টার পর ঘণ্টা সময় নষ্ট হয়।"
    },
    {
      title: "ব্র্যান্ড ভ্যালু ও বিশ্বাসের অভাব",
      icon: ShieldAlert,
      desc: "অনলাইনে হাজারো ফেক পেজের ভিড়ে কাস্টমাররা শুধু একটি ফেসবুক পেজ দেখে বড় অ্যামাউন্টের অর্ডার করতে বা ট্রাস্ট করতে দ্বিধাবোধ করে, যা আপনার সেলস কমিয়ে দেয়।"
    }
  ];

  const handleCTA = () => {
    const element = document.getElementById("solution");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="problem" className="py-28 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* গ্লাসমরফিক ব্যাকগ্রাউন্ড গ্লো (ডার্ক রেড/অরেঞ্জ টিন্ট ভয়ের বা সমস্যার আবহ তৈরি করতে) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-950/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        {/* হেডার সেকশন */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4"
          >
            <AlertTriangle size={14} className="text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-red-300">
              {sectionData.badge}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4"
          >
            {sectionData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-400 leading-relaxed"
          >
            {sectionData.subtitle}
          </motion.p>
        </div>

        {/* পেন পয়েন্ট গ্রিড লেআউট */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
          {painPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.01 }}
                className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 backdrop-blur-xl flex gap-4 transition-all duration-300 hover:border-red-500/10 hover:bg-slate-900/30"
              >
                {/* আইকন কন্টেইনার */}
                <div className="p-3 rounded-xl bg-red-500/5 text-red-400 border border-red-500/10 h-fit flex-shrink-0">
                  <Icon size={20} />
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-wide">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* সলিউশনের দিকে রিডাইরেক্ট করার জন্য CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors duration-200 group"
          >
            জানুন কীভাবে আমরা এই সমস্যার সমাধান করি
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Problem;