import { useApp } from "@/hooks/useApp";
import { useEffect, useState } from "react";
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function MainHeader() {
    const { lang, setLang, theme, setTheme, t, mobileMenuOpen, setMobileMenuOpen } = useApp();
    const [scrolled, setScrolled] = useState(false);
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // সেফটি গার্ডস (অনাকাঙ্ক্ষিত ক্র্যাশ এড়াতে)
    const navItems = t?.nav ? Object.values(t.nav) : [];
    const navKeys = t?.nav ? Object.keys(t.nav) : [];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? isDark
                    ? 'backdrop-blur-xl bg-slate-950/80 border-b border-white/5 shadow-2xl shadow-black/20 py-3'
                    : 'backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-lg shadow-slate-100/40 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <nav className="container mx-auto px-5 sm:px-8">
                <div className="flex items-center justify-between">

                    {/* ব্র্যান্ড লোগো সেকশন */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 cursor-pointer focus:outline-none"
                    >
                        <div className="flex flex-col items-start">
                            {/* থিম অনুযায়ী লোগো চেঞ্জ করার আর্কিটেকচার */}
                            <img
                                src={isDark ? "/images/brand_logo_light.png" : "/images/brand_logo_dark.png"}
                                alt="UdyoktaStudio Logo"
                                className="h-7 sm:h-8 object-contain"
                            />
                            {/* ছোট সাব-টেক্সট যা ব্র্যান্ড ভ্যালু বাড়ায় */}
                            <span className={`text-[9px] font-bold tracking-widest uppercase mt-0.5 ${isDark ? 'text-purple-400' : 'text-purple-600'
                                }`}>
                                {t?.hero?.badge ? "DIGITAL AGENCY" : "STUDIO"}
                            </span>
                        </div>
                    </motion.a>

                    {/* ডেস্কটপ নেভিগেশন লিংক সমূহ */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <motion.a
                                key={i}
                                href={`#${navKeys[i]}`}
                                whileHover={{ y: -1 }}
                                className={`transition-colors font-semibold text-sm relative py-1 group ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {item}
                                {/* সুন্দর আন্ডারলাইন অ্যানিমেশন ইফেক্ট */}
                                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isDark ? 'bg-purple-400' : 'bg-purple-600'
                                    }`} />
                            </motion.a>
                        ))}
                    </div>

                    {/* কন্ট্রোল বাটন সমূহ (ভাষা ও মোবাইল মেনু) */}
                    <div className="flex items-center gap-3">

                        {/* ভাষা পরিবর্তনকারী বাটন */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-all ${isDark
                                ? 'bg-white/5 hover:bg-white/10 border-white/10 text-purple-400'
                                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-purple-600'
                                }`}
                        >
                            <Globe size={13} />
                            {lang === 'en' ? 'বাংলা' : 'EN'}
                        </motion.button>

                        {/* মোবাইল মেনু টগল বাটন */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`md:hidden p-2 rounded-xl border transition-colors ${isDark ? 'text-white border-white/10 hover:bg-white/5' : 'text-slate-800 border-slate-200 hover:bg-slate-100'
                                }`}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* মোবাইল ড্রপডাউন মেনু */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className={`md:hidden border-t backdrop-blur-2xl ${isDark
                            ? 'bg-slate-950/95 border-white/5'
                            : 'bg-white/95 border-slate-200'
                            }`}
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
                            {navItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={`#${navKeys[i]}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${isDark
                                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default MainHeader;