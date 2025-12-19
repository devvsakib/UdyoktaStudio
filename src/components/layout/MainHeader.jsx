import { useApp } from "@/hooks/useApp";
import { useEffect, useState } from "react";
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function MainHeader() {
    const { lang, setLang, theme, setTheme, t, mobileMenuOpen, setMobileMenuOpen } = useApp();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-xl bg-slate-950/80 shadow-2xl'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div className="relative">
                            <img src="/images/brand_logo_light.png" className="h-8" />
                            <div className="text-xs text-purple-400">{t.hero.badge}</div>
                        </div>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-8">
                        {Object.values(t.nav).map((item, i) => (
                            <motion.a
                                key={i}
                                href={`#${Object.keys(t.nav)[i]}`}
                                whileHover={{ y: -2 }}
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10"
                        >
                            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
                        </motion.button> */}

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                            className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-semibold text-purple-400"
                        >
                            {lang === 'en' ? 'বাং' : 'EN'}
                        </motion.button>

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white">
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden backdrop-blur-xl bg-slate-950/95 border-t border-white/10"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {Object.values(t.nav).map((item, i) => (
                                <a key={i} href={`#${Object.keys(t.nav)[i]}`} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white py-2">
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
