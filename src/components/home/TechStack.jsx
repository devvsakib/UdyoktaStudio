import { useApp } from "@/hooks/useApp";
import { Cpu, Code2, LayoutDashboard, Database } from "lucide-react";
import { motion } from "motion/react";

function TechStack() {
    const { theme, t } = useApp();

    const sectionData = {
        badge: t?.tech?.badge || "MODERN TECH STACK",
        title: t?.tech?.title || "আধুনিক প্রযুক্তির সমন্বয়ে আপনার ব্যবসা",
        subtitle: t?.tech?.subtitle || "আপনার ল্যান্ডিং পেজ বা স্টোরের সর্বোচ্চ স্পিড, সিকিউরিটি এবং সহজ কন্টেন্ট ম্যানেজমেন্ট নিশ্চিত করতে আমরা বিশ্বের সেরা টেকনোলজি ও CMS প্ল্যাটফর্মগুলো ব্যবহার করি।"
    };

    const categories = [
        {
            title: "Custom Frameworks & Back-end",
            icon: Code2,
            description: "আল্ট্রা-ফাস্ট স্পিড, আধুনিক গ্লাসমরফিক ডিজাইন এবং কাস্টম বিজনেস লজিকের জন্য শক্তিশালী ফ্রন্ট-এন্ড ও ব্যাক-এন্ড আর্কিটেকচার।",
            techs: [
                { name: "React / Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
                { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true }
            ]
        },
        {
            title: "Databases & Cloud Storage",
            icon: Database,
            description: "কাস্টমার ডাটা সিকিউরিটি, দ্রুত অর্ডার প্রসেসিং এবং ড্যাশবোর্ড ট্র্যাকিংয়ের জন্য আধুনিক ও স্কেলেবল ডাটাবেজ সলিউশন।",
            techs: [
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "Vite / Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
            ]
        },
        {
            title: "E-commerce CMS Platforms",
            icon: LayoutDashboard,
            description: "কোনো কোডিং নলেজ ছাড়াই সহজে প্রোডাক্ট আপলোড, ইনভেন্টরি কন্ট্রোল এবং অর্ডার ম্যানেজ করার জন্য রেডি-মেড ই-কমার্স প্ল্যাটফর্ম।",
            techs: [
                { name: "WordPress / Woo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", invert: true },
                { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg" },
                { name: "Zatiq", logo: "https://img.logo.dev/zatiq.com?token=pk_Y-W56YhZToS7m4Z3Lg1tXg" }, // জাতিক এর রিয়েল ব্র্যান্ড লোগো রিফ্লেকশন
                { name: "Framer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg" }
            ],
            fullWidth: true // ৩টি ক্যাটাগরিকে গ্রিডে সুন্দর ব্যালেন্স করার জন্য
        }
    ];

    return (
        <section id="tech-stack" className="py-28 bg-slate-950 relative overflow-hidden border-t border-white/5">
            {/* গ্লাসমরফিক ব্যাকগ্রাউন্ড গ্লো */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[250px] bg-indigo-600/5 rounded-full blur-[120px]" />
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
                        <Cpu size={14} className="text-purple-400" />
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

                {/* টেকনোলজি গ্রিড লেআউট */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className={`relative rounded-3xl p-6 border border-white/5 bg-slate-900/10 shadow-[0_20px_50px_rgba(15,23,42,0.3)] backdrop-blur-xl flex flex-col justify-between ${category.fullWidth ? "md:col-span-2 lg:col-span-1" : ""
                                    }`}
                            >
                                <div>
                                    {/* ক্যাটাগরি হেডার */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                            <Icon size={18} />
                                        </div>
                                        <h3 className="text-base font-bold text-white tracking-wide">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <p className="text-[13px] text-slate-400 mb-6 leading-relaxed min-h-[50px]">
                                        {category.description}
                                    </p>
                                </div>

                                {/* রিয়েল লোগো গ্রিড */}
                                <div className="grid grid-cols-2 gap-3 mt-auto">
                                    {category.techs.map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-purple-500/30 hover:bg-slate-900/80 transition-all duration-200"
                                        >
                                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                                <img
                                                    src={tech.logo}
                                                    alt={tech.name}
                                                    onError={(e) => {
                                                        // ইন কেস কোনো লোগো রেন্ডারে সমস্যা হলে ব্যাকআপ টেক্সট বা জেনেরিক গ্লো দেখাবে
                                                        e.target.style.display = 'none';
                                                    }}
                                                    className={`w-full h-full object-contain ${tech.invert ? "invert brightness-200" : ""}`}
                                                />
                                            </div>
                                            <span className="text-xs font-medium text-slate-300 truncate">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TechStack;