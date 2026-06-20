import { useApp } from "@/hooks/useApp";
import { 
  Sparkles, 
  ShoppingBag, 
  Smartphone, 
  Layers, 
  Share2, 
  FileText,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

function Services() {
  const { theme, t } = useApp();

  const sectionData = {
    badge: t?.services?.badge || "OUR SOLUTIONS",
    title: t?.services?.title || "আমরা আপনার জন্য যা তৈরি করি",
    subtitle: t?.services?.subtitle || "আপনার ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে সফল করতে আমরা একদম স্ক্র্যাচ থেকে মডার্ন, ফাস্ট এবং হাই-কনভার্সিং ডিজিটাল প্রোডাক্ট তৈরি করে থাকি।"
  };

  const services = [
    {
      title: "High-Conversion Landing Pages",
      icon: ShoppingBag,
      description: "ফেসবুক বা সোশ্যাল মিডিয়া বিজ্ঞাপনের মাধ্যমে কাস্টমারদের আকর্ষণ করতে এবং ওয়ান-ক্লিক বা হোয়াটসঅ্যাপ অর্ডারিং সিস্টেমের মাধ্যমে দ্রুত সেলস বাড়াতে পারফেক্ট ল্যান্ডিং পেজ।",
      tags: ["Fast Loading", "WhatsApp Checkout", "Mobile First"],
      color: "from-purple-500/20 to-indigo-500/5"
    },
    {
      title: "E-commerce & Merchant Dashboards",
      icon: Layers,
      description: "আপনার ব্যবসার প্রোডাক্ট ক্যাটালগ ম্যানেজমেন্ট, রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং এবং কাস্টমার অর্ডার প্রসেস করার জন্য আধুনিক মার্চেন্ট বা অ্যাডমিন ড্যাশবোর্ড প্যানেল।",
      tags: ["Order Tracking", "Analytics UI", "Secure Admin"],
      color: "from-blue-500/20 to-cyan-500/5"
    },
    {
      title: "Premium Book Pre-Order & Promo Hubs",
      icon: FileText,
      description: "লেখক ও প্রকাশকদের জন্য নতুন বইয়ের প্রচ্ছদ প্রদর্শনী, প্রি-অর্ডার ক্যাম্পেইন এবং খুতবাহ বা মাহফিলের মতো ধর্মীয় ইভেন্টের প্রচারণার জন্য কাস্টম ডিজাইন ও সিঙ্গেল-পেজ হাব।",
      tags: ["Book Promo", "Pre-Order Form", "Elegant Design"],
      color: "from-emerald-500/20 to-teal-500/5"
    },
    {
      title: "Automation & API Workflows",
      icon: Share2,
      description: "আপনার ব্যবসার রিপিটেটিভ কাজগুলো কমাতে বিভিন্ন প্ল্যাটফর্ম (যেমন: Google Sheets, Slack, SMS Gateway) এবং কাস্টম API-এর মধ্যে ড্রাগ-অ্যান্ড-ড্রপ স্টাইলের অটোমেশন কানেক্টিভিটি।",
      tags: ["Workflow Automation", "API Integration", "Webhooks"],
      color: "from-amber-500/20 to-orange-500/5"
    }
  ];

  const handleConsultation = () => {
    window.location.href = `https://wa.me/8801792552300?text=Hello UdyoktaStudio, I want to discuss a custom project with you!`;
  };

  return (
    <section id="what-we-build" className="py-28 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* গ্লাসমরফিক গ্লো ব্যাকগ্রাউন্ড */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-600/5 rounded-full blur-[150px]" />
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
            <Sparkles size={14} className="text-purple-400" />
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

        {/* ৪-কলাম গ্রিড লেআউট */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-stretch max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative rounded-3xl p-8 border border-white/5 bg-gradient-to-br ${service.color} bg-slate-900/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-white/10`}
              >
                <div>
                  {/* আইকন */}
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 text-purple-400 w-fit mb-6">
                    <Icon size={24} />
                  </div>

                  {/* টাইটেল ও ডেসক্রিপশন */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* ট্যাগ কিটস */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-white/5 text-[10px] font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* নিচের কাস্টম কল-টু-অ্যাকশন (CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={handleConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/20 transition-all duration-200 active:scale-[0.98] group"
          >
            আপনার আইডিয়া নিয়ে আলোচনা করুন
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;