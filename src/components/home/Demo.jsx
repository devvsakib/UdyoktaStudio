import { useState } from "react";
import { Link } from "react-router-dom"; // React Router DOM এর Link কম্পোনেন্ট যুক্ত করা হলো
import { useApp } from "@/hooks/useApp";
import { Eye, ArrowUpRight, Layout, BookOpen, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function Demo() {
  const { t } = useApp();
  const [filter, setFilter] = useState("all");

  const sectionData = {
    badge: t?.demo?.badge || "LIVE SHOWCASE",
    title: t?.demo?.title || "সিদ্ধান্ত নেওয়ার আগে ডেমো দেখে নিন",
    subtitle: t?.demo?.subtitle || "আমরা মুখে বলায় বিশ্বাসী নই। আমাদের তৈরি করা কিছু হাই-কনভার্সন ল্যান্ডিং পেজ এবং লাইভ ডেমো প্রজেক্ট নিজে পরখ করে দেখুন।"
  };

  const categories = [
    { id: "all", name: "All Work", icon: Layout },
    { id: "landing", name: "Landing Pages", icon: ShoppingBag },
    { id: "book", name: "Book & Authors", icon: BookOpen },
  ];

  // প্রজেক্টের liveUrl গুলোকে ডাইনামিক রাউট পাথে ম্যাপ করা হয়েছে
  const projects = [
    {
      title: "UdyoktaStudio Terminal Builder",
      category: "landing",
      desc: "মার্চেন্টদের জন্য একটি লাইভ ইন্টারহ্যাক্টিভ ড্যাশবোর্ড এবং ল্যান্ডিং পেজ জেনারেটর প্রোটোটাইপ।",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      liveUrl: "/demo/gadgets", // আপনার ডাইনামিক গ্যাজেট/টার্মিনাল ডেমো রাউট
      tags: ["React", "Tailwind CSS", "MUI"]
    },
    {
      title: "Premium Book Pre-Order Hub",
      category: "book",
      desc: "নতুন বইয়ের প্রচ্ছদ প্রদর্শনী, প্রি-অর্ডার ট্র্যাকিং এবং কাস্টম অর্ডারিং সリューション সংবলিত ল্যান্ডিং পেজ।",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      liveUrl: "/demo/book", // আপনার ডাইনামিক বুক ডেমো রাউট
      tags: ["React", "Glassmorphism"]
    },
    {
      title: "Cosmetics & Apparel Landing Page",
      category: "landing",
      desc: "লোকাল ফ্যাশন ও কসমেটিক্স ব্র্যান্ডের জন্য তৈরি ১০০% মোবাইল রেসপন্সিভ এবং ফাস্ট-লোডিং ই-কমার্স পেজ।",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
      liveUrl: "/demo/fashion", // আপনার ডাইনামিক ফ্যাশন ডেমো রাউট
      tags: ["React", "Tailwind CSS"]
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="demo" className="py-28 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* গ্লাসমরফিক ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        {/* হেডার সেকশন */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
          >
            <Eye size={14} className="text-purple-400" />
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

        {/* ফিল্টার ক্যাটাগরি বাটন সমূহ */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 border ${isActive
                    ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-600/20"
                    : "bg-slate-900 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900/80"
                  }`}
              >
                <Icon size={14} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* প্রজেক্ট গ্রিড */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-white/5 bg-slate-900/20 shadow-xl backdrop-blur-xl flex flex-col overflow-hidden"
              >
                {/* ইমেজ কন্টেইনার ওভারলে সহ */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                  {/* হোভার লাইভ প্রিভিউ ব্যাজ (React Router Link এ কনভার্ট করা হয়েছে) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-sm">
                    <Link
                      to={project.liveUrl}
                      className="px-4 py-2 bg-white text-slate-900 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-xl transition-transform duration-200 active:scale-95"
                    >
                      Live Preview
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* কন্টেন্ট টেক্সট */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors duration-200 mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-slate-400 leading-relaxed mb-6 line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  {/* টেকনোলজি ট্যাগ সমূহ */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-950/60 border border-white/5 text-[10px] font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm rounded-xl transition-all shadow-xl hover:border-purple-500/30 active:scale-95 group"
          >
            Explore All 20+ Demos
            <ArrowUpRight size={16} className="text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Demo;