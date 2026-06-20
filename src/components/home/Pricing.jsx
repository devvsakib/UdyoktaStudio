import { useState } from "react";
import { useApp } from "@/hooks/useApp";
import { toast } from "sonner";
import { Check, Sparkles, Paintbrush, Globe, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function Pricing() {
  const { theme, t } = useApp();
  const [activeTab, setActiveTab] = useState("web"); // 'web' or 'design'

  const pricingData = {
    badge: t?.pricing?.badge || "PRICING PLANS",
    title: t?.pricing?.title || "আপনার প্রয়োজনীয় সার্ভিসটি বেছে নিন",
    cta: t?.pricing?.starter?.cta || "অর্ডার করুন",
    ctaSuccess: t?.pricing?.starter?.ctaSuccess || "আপনার অনুরোধটি গ্রহণ করা হয়েছে! আমরা শীঘ্রই যোগাযোগ করছি।"
  };

  // ওয়েবসাইট ডেভেলপমেন্ট প্যাকেজসমূহ
  const webTiers = [
    {
      name: "Starter Landing Page",
      icon: Globe,
      price: "৳৩,৪৯৯",
      desc: "নতুন উদ্যোক্তাদের জন্য একটি সিঙ্গেল প্রোডাক্ট বা সার্ভিস বিক্রির পারফেক্ট ল্যান্ডিং পেজ।",
      features: [
        "১টি হাই-কনভার্সন ল্যান্ডing পেজ",
        "স্মার্ট হোয়াটসঅ্যাপ অর্ডার সিস্টেম",
        "১০০% মোবাইল রেসপন্সিভ ডিজাইন",
        "ফাস্ট লোডিং স্পিড ও SEO ফ্রেন্ডলি",
        "ফ্রি সাবডোমেইন ও ওয়ান-ক্লিক ডেপ্লয়মেন্ট",
      ],
      highlight: false,
      buttonStyle: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700"
    },
    {
      name: "Premium Merchant Page",
      icon: LayoutGrid,
      price: "৳৫,৯৯৯",
      desc: "পেশাদার মার্চেন্টদের জন্য অ্যাডভান্সড ড্যাশবোর্ড ও কাস্টম ইউজার ইন্টারফেস।",
      features: [
        "সবকিছু Starter প্যাকেজের",
        "কাস্টম অর্ডার ট্র্যাকিং ড্যাশবোর্ড",
        "bKash / SSLCOMMERZ পেমেন্ট গেটওয়ে ট্রায়াল",
        "অ্যানিমেটেড গ্লাসমরফিক ডার্ক থিম ইউআই",
        "লাইফটাইম বাগ ফিক্সিং ও প্রিমিয়াম সাপোর্ট",
      ],
      highlight: true,
      buttonStyle: "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-600/30"
    }
  ];

  // গ্রাফিক ডিজাইন প্যাকেজসমূহ
  const designTiers = [
    {
      name: "Promo Design Kit",
      icon: Paintbrush,
      price: "৳৯৯৯",
      desc: "সোশ্যাল মিডিয়া বা ফেসবুক বিজ্ঞাপনের জন্য কুইক ও প্রফেশনাল ডিজাইন সলিউশন।",
      features: [
        "২টি কাস্টম সোশ্যাল মিডিয়া ব্যানার",
        "ফেসবুক পেজ কভার বা প্রোফাইল আর্ট",
        "হাই-রেজোলিউশন PNG/JPG ফরম্যাট",
        "২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি",
        "২ বার ফ্রি রিভিশন সুবিধা",
      ],
      highlight: false,
      buttonStyle: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700"
    },
    {
      name: "Premium Studio Kit",
      icon: Sparkles,
      price: "৳২,৪৯৯",
      desc: "বইয়ের প্রি-অর্ডার, ইভেন্ট বা খুতবাহর জন্য কমপ্লিট ও এক্সক্লুসিভ ডিজাইন প্যাক।",
      features: [
        "১টি এক্সক্লুসিভ বুক কভার বা প্রোডাক্ট মকআপ",
        "৩টি প্রিমিয়াম সোশ্যাল মিডিয়া পোস্টার",
        "খুতবাহ / মাহফিল / বিশেষ ক্যাম্পেইন ডিজাইন",
        "প্রিন্ট রেডি হাই-কোয়ালিটি সোর্স ফাইল (PSD)",
        "আনলিমিটেড রিভিশন ও ভিআইপি সাপোর্ট",
      ],
      highlight: true,
      buttonStyle: "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-600/30"
    }
  ];

  const currentTiers = activeTab === "web" ? webTiers : designTiers;

  const handleOrder = (tierName) => {
    toast.success(`${tierName}: ${pricingData.ctaSuccess}`);
    // কাস্টমারকে সরাসরি মেসেজে প্যাকেজের নামসহ রিডাইরেক্ট করবে
    window.location.href = `https://wa.me/8801792552300?text=Hello UdyoktaStudio, I want to order the "${tierName}" package.`;
  };

  return (
    <section id="pricing" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* গ্লো ব্যাকগ্রাউন্ড */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 z-10">
        {/* হেডার */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              {pricingData.badge}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black tracking-tight text-white"
          >
            {pricingData.title}
          </motion.h2>
        </div>

        {/* কাস্টম ট্যাব বাটন */}
        <div className="flex justify-center mb-16">
          <div className="relative p-1 bg-slate-900 border border-white/5 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveTab("web")}
              className={`relative z-10 px-6 py-2.5 rounded-xl font-bold text-sm transition-colors duration-200 flex items-center gap-2 ${activeTab === "web" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
            >
              <Globe size={16} />
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`relative z-10 px-6 py-2.5 rounded-xl font-bold text-sm transition-colors duration-200 flex items-center gap-2 ${activeTab === "design" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
            >
              <Paintbrush size={16} />
              Graphic Design
            </button>

            {/* স্লাইডিং ব্যাকগ্রাউন্ড অ্যানিমেশন */}
            <motion.div
              layoutId="activeTabBg"
              className="absolute inset-y-1 bg-purple-600 rounded-xl shadow-md shadow-purple-600/20"
              style={{
                left: activeTab === "web" ? "4px" : "calc(50% + 2px)",
                width: "calc(50% - 6px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
          <AnimatePresence mode="wait">
            {currentTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between backdrop-blur-2xl border transition-all duration-300 ${tier.highlight
                    ? "border-purple-500 bg-gradient-to-b from-purple-500/10 via-slate-900/90 to-slate-950 shadow-[0_20px_50px_rgba(147,51,234,0.15)]"
                    : "border-white/10 bg-slate-900/40 shadow-[0_20px_40px_rgba(15,23,42,0.4)]"
                  }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-purple-500 text-white text-[10px] font-black tracking-widest uppercase">
                    RECOMMENDED
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-black text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                    {tier.desc}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-6 border-b border-white/5 pb-5">
                    <span className="text-3xl font-black text-white tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-500">/ One-time</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${tier.highlight ? "bg-purple-500/20 text-purple-400" : "bg-white/10 text-slate-400"}`}>
                          <Check size={10} className="stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <button
                    className={`w-full rounded-xl py-2.5 text-center font-bold text-xs transition-all duration-200 active:scale-[0.98] ${tier.buttonStyle}`}
                    onClick={() => handleOrder(tier.name)}
                  >
                    {pricingData.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Pricing;