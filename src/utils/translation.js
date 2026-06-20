import { Shield, Smartphone, Zap, TrendingUp, MessageCircle, BarChart3, ShoppingCart, Package, ShieldCheck, MessageSquareX, TrendingDown, Clock3, ShieldAlert } from "lucide-react";

const translations = {
    en: {
        nav: {
            services: "Services",
            demo: "Demo",
            process: "Process",
            price: "Pricing",
            contact: "Contact"
        },
        hero: {
            badge: "From Page to Brand",
            headline: "Transform Your Social Shop Into a Trusted Online Business",
            subheadline: "We build premium e-commerce websites for Bangladeshi Facebook & Instagram sellers. Stop losing customers to trust issues.",
            primaryCta: "View Live Demos",
            secondaryCta: "Start Your Project",
            stats: [
                { value: "50+", label: "Happy Clients" },
                { value: "99%", label: "Satisfaction" },
                { value: "24/7", label: "Support" }
            ]
        },
        problem: {
            title: "Why Social-Only Selling Holds You Back",
            items: [
                {
                    icon: MessageSquareX,
                    title: "Inbox Jam & Customer Dropout",
                    desc: "If you delay replying by just 5 minutes, customers jump to another page. Sitting in the inbox 24/7 to manually take orders and track stock is nearly impossible."
                },
                {
                    icon: TrendingDown,
                    title: "Trapped in the Facebook Algorithm",
                    desc: "Page reach is high today, but completely down tomorrow. Due to sudden social media algorithm changes, your hard-earned audience can disappear at any time."
                },
                {
                    icon: Clock3,
                    title: "Chaos in Order Tracking & Accounts",
                    desc: "Who paid via bKash, whose order got delivered, and whose is pending—matching these records by scrolling through messages or notebooks wastes hours every single day."
                },
                {
                    icon: ShieldAlert,
                    title: "Lack of Brand Value & Trust",
                    desc: "Amidst thousands of fake online pages, customers hesitate to make big orders or fully trust just a Facebook page, which directly drops your sales."
                }
            ]
        },
        solution: {
            title: "The Professional Website Advantage",
            desc: "A modern e-commerce website transforms how customers see your business",
            features: [
                { icon: Shield, title: "Instant Credibility", desc: "Professional design builds trust immediately" },
                { icon: MessageCircle, title: "Organized Orders", desc: "No more missed sales in inbox chaos" },
                { icon: Smartphone, title: "Mobile Optimized", desc: "Perfect experience on any device" },
                { icon: TrendingUp, title: "Ready to Scale", desc: "Grow with Facebook & Instagram ads" }
            ]
        },
        demo: {
            title: "See a Demo Before Deciding",
            text: "We don’t just talk — we show live demos.",
            cta: "Open Live Demo Store",
            note: "No signup required",
            demoList: [
                { name: "Fashion Demo", link: "/demo/fashion" },
                { name: "Cosmetics Demo", link: "/demo/cosmetics" },
                { name: "Gadgets Demo", link: "/demo/gadgets" },
            ]
        },
        services: {
            title: "What We Build for You",
            list: [
                "Custom e-commerce website",
                "Mobile-first modern UI",
                "Product & order management",
                "WhatsApp order integration",
                "Facebook / Instagram pixel ready",
                "Fast & secure setup"
            ],
            note: "Designed with Bangladeshi buyer behavior in mind"
        },
        tech: {
            title: "Built with Modern Technology",
            note: "Not some old template. Fully modern and scalable.",
            stack: {
                frontend: {
                    icon: "⚛️",
                    techs: [
                        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                        { name: "Vite", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4XOdTwDFjrNDoRbCH2vDqCNCKD9u8zVr_g&s" },
                        { name: "Tailwind CSS v4", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
                        { name: "Shadcn UI", icon: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png" },
                        { name: "Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
                        { name: "And more...", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeG7qu0HA0pl4_ZbEI7CLT-XdvmmYIfCGWzA&s" }
                    ]
                },
                backend: {
                    icon: "🟢",
                    techs: [
                        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
                    ]
                },
                database: {
                    icon: "🗄️",
                    techs: [
                        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
                    ]
                },
                hosting: {
                    icon: "☁️",
                    techs: [
                        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
                        { name: "Render", icon: "https://cdn.sanity.io/images/34ent8ly/production/ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png" }
                    ]
                }
            }
        },
        process: {
            title: "Simple 4-Step Process",
            steps: [
                { num: "01", title: "Understand", desc: "We learn about your business & products" },
                { num: "02", title: "Design & Build", desc: "We create your modern website" },
                { num: "03", title: "Review", desc: "We refine based on your feedback" },
                { num: "04", title: "Launch", desc: "We go live with guidance & support" }
            ],
            timeline: "Clear process, fast delivery"
        },
        contact: {
            title: "Let's Build Trust for Your Business",
            subtitle: "No pressure. No fake commitments. Just honest conversations.",
            whatsapp: "Chat on WhatsApp",
            email: "Send an Email",
            demo: "View Demo"
        },
        pricing: {
            title: "Pricing",
            badge: "Simple, Transparent Pricing",
            starter: {
                name: "Starter",
                label: "Popular",
                price: "৳ 5,000",
                features: ["5-10 Products", "Mobile Optimized", "WhatsApp Integration", "Basic Support", "1 Week Delivery"],
                cta: "Get Started"
            },
            growth: {
                name: "Growth",
                label: "Most Popular",
                price: "৳ 35,000",
                features: ["Unlimited Products", "Advanced Features", "FB/IG Pixel Setup", "Priority Support", "Analytics Dashboard", "3 Months Free Updates"],
                cta: "Get Started"
            },
            enterprise: {
                name: "Enterprise",
                label: "Custom Solution",
                price: "Custom",
                caption: "UdyoktaStudio helps Bangladeshi Facebook & Instagram sellers build real online businesses.",
                features: ["Everything in Growth", "Payment Gateway Integration", "Custom Integrations", "Dedicated Account Manager", "Lifetime Security Updates"],
                cta: "Let's Talk"
            }
        },
        footer: {
            tagline: "Page to Brand",
            about: "UdyoktaStudio helps Bangladeshi Facebook & Instagram sellers build real online businesses.",
            rights: "All rights reserved."
        }
    },
    bn: {
        nav: {
            services: "সেবাসমূহ",
            demo: "ডেমো",
            process: "কাজের প্রক্রিয়া",
            price: "প্যাকেজ ও মূল্য",
            contact: "যোগাযোগ"
        },
        hero: {
            badge: "পেজ থেকে ব্র্যান্ড",
            headline: "আপনার Facebook ও Instagram পেজকে একটি বিশ্বাসযোগ্য অনলাইন ব্যবসায় রূপান্তর করুন",
            subheadline: "আমরা বাংলাদেশি সেলারদের জন্য প্রিমিয়াম ই-কমার্স ওয়েবসাইট তৈরি করি। ট্রাস্ট ইস্যু বা বিশ্বাসের অভাবে আর কোন কাস্টমার হারাবেন না।",
            primaryCta: "লাইভ ডেমো দেখুন",
            secondaryCta: "প্রজেক্ট শুরু করুন",
            stats: [
                { value: "৫০+", label: "সন্তুষ্ট কাস্টমার" },
                { value: "৯৯%", label: "সফলতা" },
                { value: "২৪/৭", label: "সাপোর্ট" }
            ]
        },
        problem: {
            title: "শুধু ফেসবুক বা ইনস্টাগ্রাম পেজে ব্যবসা করার অসুবিধা",
            items: [
                {
                    icon: MessageSquareX,
                    title: "ইনবক্স জ্যাম ও কাস্টমার ড্রপআউট",
                    desc: "কাস্টমার মেসেজ দেওয়ার পর রিপ্লাই দিতে ৫ মিনিট দেরি হলেই তারা অন্য পেজে চলে যায়। ২৪ ঘণ্টা ইনবক্সে বসে ম্যানুয়ালি অর্ডার নেওয়া এবং স্টক ট্র্যাক করা প্রায় অসম্ভব।"
                },
                {
                    icon: TrendingDown,
                    title: "ফেসবুক অ্যালগরিদমের খাঁচায় বন্দি",
                    desc: "আজ পেজের রিচ ভালো তো কাল একদম ডাউন। সোশ্যাল মিডিয়ার নিজস্ব অ্যালগরিদম চেঞ্জের কারণে আপনার এতদিনের জমানো অডিয়েন্স যেকোনো সময় হাতছাড়া হতে পারে।"
                },
                {
                    icon: Clock3,
                    title: "অর্ডার ট্র্যাকিং ও হিসাবের গোলমাল",
                    desc: "কে বিকাশ বা bKash-এ পেমেন্ট করলো, কার অর্ডার ডেলিভারি হলো আর কারটা পেন্ডিং—খাতায় বা মেসেজ স্ক্রোল করে এই হিসাব মেলাতে গিয়ে প্রতিদিন ঘণ্টার পর ঘণ্টা সময় নষ্ট হয়।"
                },
                {
                    icon: ShieldAlert,
                    title: "ব্র্যান্ড ভ্যালু ও বিশ্বাসের অভাব",
                    desc: "অনলাইনে হাজারো ফেক পেজের ভিড়ে কাস্টমাররা শুধু একটি ফেসবুক পেজ দেখে বড় অ্যামাউন্টের অর্ডার করতে বা ট্রাস্ট করতে দ্বিধাবোধ করে, যা আপনার সেলস কমিয়ে দেয়।"
                }
            ]
        },
        solution: {
            title: "একটি প্রফেশনাল ওয়েবসাইটের সুবিধা",
            desc: "একটি আধুনিক ই-কমার্স ওয়েবসাইট ক্রেতাদের কাছে আপনার ব্যবসার রূপ বদলে দেয়",
            features: [
                { icon: Shield, title: "তাৎক্ষণিক নির্ভরযোগ্যতা", desc: "প্রফেশনাল ডিজাইন ক্রেতাদের মনে দ্রুত বিশ্বাস তৈরি করে" },
                { icon: MessageCircle, title: "গোছানো অর্ডার ম্যানেজমেন্ট", desc: "ইনবক্সের মেসেজের জটলা এড়িয়ে সহজেই সব অর্ডার এক জায়গায়" },
                { icon: Smartphone, title: "পারফেক্ট মোবাইল এক্সপেরিয়েন্স", desc: "যেকোনো স্মার্টফোনে কাস্টমার পাবেন সুপার-ফাস্ট ব্রাউজিং" },
                { icon: TrendingUp, title: "স্কেলিংয়ের জন্য প্রস্তুত", desc: "Facebook এবং Instagram বিজ্ঞাপনের মাধ্যমে সেল বাড়ানোর সুবিধা" }
            ]
        },
        demo: {
            title: "সিদ্ধান্ত নেওয়ার আগে লাইভ ডেমো দেখে নিন",
            text: "আমরা শুধু মুখে বলি না — সরাসরি লাইভ ডেমো স্টোর দেখাই।",
            cta: "লাইভ ডেমো স্টোর ভিজিট করুন",
            note: "কোনো সাইন-আপের প্রয়োজন নেই",
            demoList: [
                { name: "ফ্যাশন ডেমো", link: "/demo/fashion" },
                { name: "কসমেটিকস ডেমো", link: "/demo/cosmetics" },
                { name: "গ্যাজেটস ডেমো", link: "/demo/gadgets" },
            ]
        },
        services: {
            title: "আমরা আপনার জন্য যা তৈরি করব",
            list: [
                "কাস্টম ই-কমার্স ওয়েবসাইট",
                "মোবাইল-ফার্স্ট আধুনিক ইউজার ইন্টারফেস (UI)",
                "প্রোডাক্ট ও অর্ডার ম্যানেজমেন্ট প্যানেল",
                "WhatsApp সরাসরি অর্ডার ইন্টিগ্রেশন",
                "Facebook ও Instagram পিক্সেল সেটআপ",
                "দ্রুত ও সম্পূর্ণ নিরাপদ সেটআপ"
            ],
            note: "সম্পূর্ণ বাংলাদেশি ক্রেতাদের কেনাকাটার আচরণ মাথায় রেখে ডিজাইন করা"
        },
        tech: {
            title: "আধুনিক প্রযুক্তি দিয়ে নির্মিত",
            note: "কোন পুরনো টেমপ্লেট নয়। সম্পূর্ণ আধুনিক এবং স্কেলযোগ্য।",
            stack: {
                frontend: {
                    icon: "⚛️",
                    techs: [
                        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                        { name: "Vite", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4XOdTwDFjrNDoRbCH2vDqCNCKD9u8zVr_g&s" },
                        { name: "Tailwind CSS v4", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
                        { name: "Shadcn UI", icon: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png" },
                        { name: "Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
                        { name: "And more...", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeG7qu0HA0pl4_ZbEI7CLT-XdvmmYIfCGWzA&s" }
                    ]
                },
                backend: {
                    icon: "🟢",
                    techs: [
                        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
                    ]
                },
                database: {
                    icon: "🗄️",
                    techs: [
                        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
                    ]
                },
                hosting: {
                    icon: "☁️",
                    techs: [
                        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
                        { name: "Render", icon: "https://cdn.sanity.io/images/34ent8ly/production/ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png" }
                    ]
                }
            }
        },
        process: {
            title: "সহজ ৪-ধাপের প্রক্রিয়া",
            steps: [
                { num: "০১", title: "ব্যবসা জানা ও বোঝা", desc: "আমরা প্রথমে আপনার প্রোডাক্ট এবং ব্যবসার ধরণ সম্পর্কে বিস্তারিত জানি" },
                { num: "০২", title: "ডিজাইন ও ডেভেলপমেন্ট", desc: "আপনার ব্র্যান্ডের সাথে মিলিয়ে আধুনিক ওয়েবসাইট তৈরি করি" },
                { num: "০৩", title: "পর্যালোচনা ও ফিডব্যাক", desc: "আপনার মতামত ও ফিডব্যাকের ভিত্তিতে আমরা সাইটটি পরিমার্জন করি" },
                { num: "০৪", title: "লাইভ ও লঞ্চ", desc: "প্রয়োজনীয় গাইডলাইন এবং কমপ্লিট সাপোর্ট দিয়ে ওয়েবসাইট লাইভ করি" }
            ],
            timeline: "স্বচ্ছ প্রক্রিয়া, দ্রুত ডেলিভারি",
        },
        contact: {
            title: "চলুন, আপনার ব্যবসার জন্য গ্রাহকের বিশ্বাস গড়ে তুলি",
            subtitle: "কোনো জোরাজুরি নেই, কোনো মিথ্যা প্রতিশ্রুতি নেই। কেবলই ব্যবসার উন্নতির জন্য স্পষ্ট আলোচনা।",
            whatsapp: "WhatsApp-এ চ্যাট করুন",
            email: "ইমেইল পাঠান",
            demo: "ডেমো দেখুন"
        },
        pricing: {
            title: "প্যাকেজ সমূহ",
            badge: "সহজ এবং স্বচ্ছ প্যাকেজ রেট",
            starter: {
                name: "স্টারটার",
                label: "জনপ্রিয়",
                price: "৳ ৫,০০০",
                features: ["৫-১০টি প্রোডাক্টস", "মোবাইল অপ্টিমাইজড", "WhatsApp ইন্টিগ্রেশন", "বেসিক সাপোর্ট", "১ সপ্তাহ ডেলিভারি"],
                cta: "শুরু করুন"
            },
            growth: {
                name: "গ্রোথ",
                label: "সবচেয়ে জনপ্রিয়",
                price: "৳ ৩৫,০০০",
                features: ["আনলিমিটেড প্রোডাক্টস", "অ্যাডভান্সড ফিচারসমূহ", "FB/IG পিক্সেল সেটআপ", "প্রায়োরিটি সাপোর্ট", "অ্যানালিটিক্স ড্যাশবোর্ড", "৩ মাস ফ্রি আপডেট"],
                cta: "শুরু করুন"
            },
            enterprise: {
                name: "এন্টারপ্রাইজ",
                label: "কাস্টম সリューション",
                price: "আলোচনা সাপেক্ষে",
                caption: "UdyoktaStudio বাংলাদেশি Facebook ও Instagram সেলারদের বাস্তব অনলাইন ব্যবসা গড়ে তুলতে সাহায্য করে।",
                features: ["গ্রোথ প্যাকেজের সবকিছু", "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন", "কাস্টম ইন্টিগ্রেশনসমূহ", "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার", "লাইফটাইম সিকিউরিটি আপডেট"],
                cta: "যোগাযোগ করুন"
            }
        },
        footer: {
            tagline: "পেজ থেকে ব্র্যান্ড",
            about: "UdyoktaStudio বাংলাদেশি Facebook ও Instagram সেলারদের বাস্তব অনলাইন ব্যবসা গড়ে তুলতে সাহায্য করে।",
            rights: "সর্বস্বত্ব সংরক্ষিত।"
        }
    }
};

export default translations;