import { useApp } from "@/hooks/useApp";
import { 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  CheckCircle2, 
  XCircle,
  HelpCircle
} from "lucide-react";
import { motion } from "motion/react";

function Solution() {
  const { theme, t } = useApp();

  const sectionData = {
    badge: t?.solution?.badge || "THE ADVANTAGE",
    title: t?.solution?.title || "প্রফেশনাল ওয়েবসাইটের আসল সুবিধা",
    subtitle: t?.solution?.subtitle || "একটি সাধারণ ফেসবুক পেজ বা স্লো ল্যান্ডিং পেজ আপনার মূল্যবান কাস্টমারদের হারিয়ে ফেলতে পারে। জানুন কেন UdyoktaStudio সলিউশন আপনার ব্যবসার গেম-চেঞ্জার।"
  };

  const advantages = [
    {
      title: "Blazing Fast Loading (0.5s)",
      icon: Zap,
      desc: "Next.js ও React-এর আল্ট্রা-অপ্টিমাইজড আর্কিটেকচারের কারণে পেজ লোড হবে চোখের পলকে। কাস্টমারকে আর লোডিং স্ক্রিনের দিকে তাকিয়ে বসে থাকতে হবে না।"
    },
    {
      title: "100% Mobile-First UI/UX",
      icon: Smartphone,
      desc: "বাংলাদেশে ৯০% এর বেশি কাস্টমার ফেসবুক থেকে মোবাইল দিয়ে কেনাকাটা করে। আমাদের গ্লাসমরফিক ডার্ক লেআউটগুলো মোবাইল স্ক্রিনে দেবে প্রিমিয়াম অ্যাপের মতো ফিল।"
    },
    {
      title: "Trust & Brand Authority",
      icon: ShieldCheck,
      desc: "কাস্টম ডোমেইন, প্রফেশনাল অর্ডার ট্র্যাকিং এবং পেমেন্ট গেটওয়ে ট্রায়াল অপশন কাস্টমারের মনে আপনার ব্র্যান্ডের প্রতি শতভাগ নির্ভরযোগ্যতা ও ট্রাস্ট তৈরি করে।"
    },
    {
      title: "Higher Conversion Rate",
      icon: TrendingUp,
      desc: "অপ্রয়োজনীয় ফর্ম ফিল্ড বাদ দিয়ে ১-ক্লিক হোয়াটসঅ্যাপ চেকআউট বা কুইক অর্ডার ফর্মের কারণে কাস্টমারদের প্রোডাক্ট কেনার হার বা কনভার্সন রেট দ্বিগুণ হয়ে যায়।"
    }
  ];

  return (
    <section id="solution" className="py-28 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* গ্লাসমরফিক ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        {/* হেডার সেকশন */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
          >
            <HelpCircle size={14} className="text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
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

        {/* ওপরের সেকশন: সরাসরি তুলনা (VS) */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-20">
          {/* সাধারণ ল্যান্ডিং পেজ */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-red-500/10 bg-red-500/5 backdrop-blur-md"
          >
            <h4 className="text-base font-bold text-red-400 flex items-center gap-2 mb-4">
              <XCircle size={18} />
              সাধারণ ল্যান্ডিং পেজ বা ফ্রি ব্লগ
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">❌ স্লো লোডিং স্পিড (কাস্টমার বিরক্ত হয়ে পেজ বন্ধ করে দেয়)</li>
              <li className="flex items-center gap-2">❌ হিজিবিজি এবং মোবাইল স্ক্রিনে ভেঙে যাওয়া লেআউট</li>
              <li className="flex items-center gap-2">❌ জটিল ও লম্বা অর্ডার ফর্ম যার কারণে কাস্টমার ড্রপ আউট হয়</li>
              <li className="flex items-center gap-2">❌ কোনো কাস্টম অটোমেশন বা ডাটা সিকিউরিটি থাকে না</li>
            </ul>
          </motion.div>

          {/* UdyoktaStudio সলিউশন */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-md shadow-[0_0_30px_rgba(147,51,234,0.05)]"
          >
            <h4 className="text-base font-bold text-purple-400 flex items-center gap-2 mb-4">
              <CheckCircle2 size={18} />
              UdyoktaStudio প্রিমিয়াম সলিউশন
            </h4>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2">⚡ রকেটের মতো ফাস্ট লোডিং ও আল্ট্রা-ক্লিন কোড স্ট্রাকচার</li>
              <li className="flex items-center gap-2">📱 ১০০% রেসপন্সিভ গ্লাসমরফিক ও মডার্ন ডার্ক ইউজার ইন্টারফেস</li>
              <li className="flex items-center gap-2">🛍️ ১-ক্লিক স্মার্ট কুইক চেকআউট ও হোয়াটসঅ্যাপ অর্ডার সিস্টেম</li>
              <li className="flex items-center gap-2">🔒 নিরাপদ মার্চেন্ট ড্যাশবোর্ড ও কাস্টম API অটোমেশন সুবিধা</li>
            </ul>
          </motion.div>
        </div>

        {/* নিচের সেকশন: ৪টি কোর অ্যাডভান্টেজ গ্রিড */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch max-w-5xl mx-auto">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-white/5 bg-slate-900/10 backdrop-blur-xl flex flex-col justify-start hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 tracking-wide">
                  {adv.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solution;