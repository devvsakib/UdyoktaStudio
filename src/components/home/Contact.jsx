import { motion } from "motion/react";
import { ExternalLink, Mail, MessageCircle, PhoneCall, HelpCircle } from "lucide-react";
import { useApp } from "@/hooks/useApp";

function Contact() {
    const { theme, t } = useApp();
    const isDark = theme === 'dark';

    // নন-টেক কাস্টমারদের জন্য সহজ ভাষার ডেটা ফলব্যাক
    const contactText = {
        title: t?.contact?.title || "আপনার বিজনেসকে অনলাইনে নিয়ে যেতে রেডি তো?",
        subtitle: t?.contact?.subtitle || "আপনার মনে কোনো প্রশ্ন আছে বা বুঝতে সমস্যা হচ্ছে? কোনো চিন্তা নেই! আমাদের সাথে সরাসরি যোগাযোগ করুন, আমরা আপনাকে সম্পূর্ণ বিনামূল্যে সঠিক পরামর্শ দেব।",
        whatsapp: t?.contact?.whatsapp || "সরাসরি হোয়াটসঅ্যাপে কথা বলুন",
        email: t?.contact?.email || "ইমেইল পাঠান",
        demo: t?.contact?.demo || "লাইভ ডেমো দেখুন",
    };

    return (
        <section id="contact" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>

            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (যা কাস্টমারের নজর কাড়বে) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-30 ${isDark ? 'bg-green-500/10' : 'bg-green-400/10'}`} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    {/* একটি ছোট ট্রাস্ট ব্যাজ বা হেল্প ট্যাগ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border ${isDark ? 'bg-slate-900 border-slate-800 text-purple-400' : 'bg-purple-50 border-purple-100 text-purple-600'
                            }`}
                    >
                        <HelpCircle size={14} />
                        ফ্রি কনসালটেশন ও পরামর্শ
                    </motion.div>

                    {/* মেইন হেডিং */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        {contactText.title}
                    </motion.h2>

                    {/* সাবটাইটেল - যেখানে কাস্টমারকে আশ্বস্ত করা হয়েছে */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        {contactText.subtitle}
                    </motion.p>

                    {/* অ্যাকশন বাটনসমূহ */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-xl mx-auto">

                        {/* হোয়াটসঅ্যাপ বাটন (সবচেয়ে বড় এবং হাইলাইটেড) */}
                        <motion.a
                            href="https://wa.me/8801792552300"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-green-600/20 transition-all text-base flex-1"
                        >
                            <MessageCircle size={22} className="animate-bounce" />
                            {contactText.whatsapp}
                        </motion.a>

                        {/* লাইভ ডেমো বাটন */}
                        <motion.a
                            href="#demo"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 border-2 transition-all text-base flex-1 ${isDark
                                    ? 'border-purple-600/80 text-purple-400 hover:bg-purple-600/10'
                                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                                }`}
                        >
                            <ExternalLink size={20} />
                            {contactText.demo}
                        </motion.a>

                    </div>

                    {/* ব্যাকআপ বা ছোট ইমেইল লিংক (নন-টেকরা ইমেইল কম পছন্দ করে তাই এটিকে নিচে সিম্পল করে দেওয়া হয়েছে) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8"
                    >
                        <a
                            href="mailto:UdyoktaStudio@gmail.com"
                            className={`inline-flex items-center gap-2 text-xs font-semibold hover:underline transition-colors ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            <Mail size={14} />
                            {contactText.email}: UdyoktaStudio@gmail.com
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Contact;