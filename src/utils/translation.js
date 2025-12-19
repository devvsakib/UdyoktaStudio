import { Shield, Smartphone, Zap, TrendingUp, MessageCircle, BarChart3 } from "lucide-react";

const translations = {
    en: {
        nav: {
            services: "Services",
            demo: "Demo",
            process: "Process",
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
                { icon: Shield, title: "Low Trust", desc: "Customers fear fake pages and scams" },
                { icon: MessageCircle, title: "Inbox Chaos", desc: "Lost orders in message floods" },
                { icon: TrendingUp, title: "No Growth", desc: "Can't scale without systems" },
                { icon: BarChart3, title: "No Analytics", desc: "Flying blind without data" }
            ]
        },
        solution: {
            title: "The Professional Website Advantage",
            desc: "A modern e-commerce website transforms how customers see your business",
            features: [
                { title: "Instant Credibility", desc: "Professional design builds trust immediately" },
                { title: "Organized Orders", desc: "No more missed sales in inbox chaos" },
                { title: "Mobile Optimized", desc: "Perfect experience on any device" },
                { title: "Ready to Scale", desc: "Grow with Facebook & Instagram ads" }
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
        // t.pricing.pro.features
        pricing: {
            title: "Pricing",
            badge: "Simple, Transparent Process",
            starter: {
                name: "Starter",
                label: "Most Popular",
                price: "৳ 5,000",
                features: ["৫-১০ Products", "Mobile Optimized", "WhatsApp Integration", "Basic Support", "১ সপ্তাহ Delivery"],
                ctaSuccess: "Thank You!",
                cta: "Get Started"
            },
            growth: {
                name: "Growth",
                label: "Most Popular",
                price: "৳ 35,000",
                features: ["Unlimited Products", "Advanced Features", "FB/IG Pixel Setup", "Priority Support", "Analytics Dashboard", "৩ মাস Free Updates"],
                cta: "Get Started"
            },
            enterprise: {
                name: "Enterprise",
                label: "Most Popular",
                price: "Custom",
                caption: "UdyoktaStudio helps Bangladeshi Facebook & Instagram sellers build real online businesses.",
                features: ["Growth এর সবকিছু", "Payment Gateway", "Custom Integrations", "Dedicated Manager", "Lifetime Updates"],
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
            services: "সেবা",
            demo: "ডেমো",
            process: "প্রক্রিয়া",
            contact: "যোগাযোগ"
        },
        hero: {
            headline: "আপনার Facebook ও Instagram পেজকে একটি বিশ্বাসযোগ্য অনলাইন ব্যবসায় পরিণত করুন",
            subheadline: "আমরা বাংলাদেশি সেলারের জন্য আধুনিক ই-কমার্স ওয়েবসাইট তৈরি করি যা গ্রাহকরা বিশ্বাস করে, সহজে অর্ডার দেয় এবং আপনার ব্যবসা বৃদ্ধি করতে সাহায্য করে।",
            primaryCta: "ডেমো স্টোর দেখুন",
            secondaryCta: "WhatsApp এ চ্যাট করুন",
            trustPoints: ["বাংলাদেশি সেলারের জন্য", "মোবাইল-ফার্স্ট ও দ্রুত", "বাস্তব ডেমো, কোন মিথ্যা প্রতিশ্রুতি নয়"],
            stats: [
                { value: "৫০+", label: "সফল গ্রাহক" },
                { value: "৯৯%", label: "সফলতা" },
                { value: "২৪/১১", label: "সাহায্য" }
            ]
        },
        problem: {
            title: "কেন শুধু Facebook / Instagram যথেষ্ট নয়",
            points: [
                "গ্রাহকরা Facebook পেজকে পুরোপুরি বিশ্বাস করে না",
                "গ্রাহকরা Instagram পেজকে পুরোপুরি বিশ্বাস করে না",
                "গ্রাহকরা আপনার ওয়েবসাইটকে পুরোপুরি বিশ্বাস করে না",
                "ইনবক্স ওভারলোড → মিসড অর্ডার",
                "প্রিপেইড অর্ডার পাওয়া কঠিন",
                "কোন ব্র্যান্ড ভ্যালু বা বৃদ্ধির সিস্টেম নেই"
            ],
            closing: "আপনার কাছে ট্রাফিক আছে, কিন্তু বিশ্বাস নেই।",
            items: [
                { icon: Shield, title: "লোকপূর্ণ বিশ্বাস", desc: "গ্রাহকরা পুরোপুরি বিশ্বাস করে না" },
                { icon: MessageCircle, title: "ইনবক্স ওভারলোড", desc: "মিসড অর্ডার" },
                { icon: TrendingUp, title: "স্কেল নেই", desc: "বিশ্বাস নেই" },
                { icon: BarChart3, title: "অনালিটিক্স নেই", desc: "সংক্রামক আপনাকে পিছিয়ে রাখে" }
            ]
        },
        solution: {
            title: "সমাধান: একটি সঠিক ই-কমার্স ওয়েবসাইট",
            description: "আমরা আপনার সোশ্যাল মিডিয়া শপকে একটি বাস্তব ওয়েবসাইটে রূপান্তর করি যা ক্রেতাদের কাছে বিশ্বাসযোগ্য মনে হয় এবং অর্ডার প্রক্রিয়াটিকে সহজ করে।",
            benefits: [
                { icon: Shield, text: "পেশাদার ও বিশ্বাসযোগ্য লুক" },
                { icon: Smartphone, text: "পারফেক্ট মোবাইল অভিজ্ঞতা" },
                { icon: Zap, text: "দ্রুত ও আধুনিক ইন্টারফেস" },
                { icon: TrendingUp, text: "বিজ্ঞাপন ও স্কেলিং এর জন্য প্রস্তুত" }
            ],
            features: [
                { icon: TrendingUp, title: "স্কেলিং", desc: "অনেকের সাথে প্রস্তুত স্কেলিং সিস্টেম" },
                { icon: BarChart3, title: "অনালিটিক্স", desc: "সংক্রামক আপনাকে পিছিয়ে রাখে" },
                { icon: MessageCircle, title: "ইনবক্স ওভারলোড", desc: "মিসড অর্ডার" },
                { icon: Shield, title: "লোকপূর্ণ বিশ্বাস", desc: "গ্রাহকরা পুরোপুরি বিশ্বাস করে না" }
            ]
        },
        demo: {
            title: "সিদ্ধান্ত নেওয়ার আগে একটি ডেমো দেখুন",
            text: "আমরা শুধু কথা বলি না — আমরা লাইভ ডেমো দেখাই।",
            cta: "লাইভ ডেমো স্টোর খুলুন",
            note: "কোন সাইনআপের প্রয়োজন নেই",
            demoList: [
                { name: "Fashion Demo", link: "/demo/fashion" },
                { name: "Cosmetics Demo", link: "/demo/cosmetics" },
                { name: "Gadgets Demo", link: "/demo/gadgets" },
            ]
        },
        services: {
            title: "আমরা আপনার জন্য যা তৈরি করি",
            list: [
                "কাস্টম ই-কমার্স ওয়েবসাইট",
                "মোবাইল-ফার্স্ট আধুনিক UI",
                "পণ্য ও অর্ডার ম্যানেজমেন্ট",
                "WhatsApp অর্ডার ইন্টিগ্রেশন",
                "Facebook / Instagram পিক্সেল রেডি",
                "দ্রুত ও নিরাপদ সেটআপ"
            ],
            note: "বাংলাদেশি ক্রেতার আচরণকে মাথায় রেখে ডিজাইন করা হয়েছে"
        },
        contact: {
            title: "চলুন আপনার ব্যবসার জন্য বিশ্বাস তৈরি করি",
            subtitle: "কোন চাপ নেই। কোন মিথ্যা প্রতিশ্রুতি নেই। শুধু সৎ কথোপকথন।",
            whatsapp: "WhatsApp এ চ্যাট করুন",
            email: "ইমেইল পাঠান",
            call: "ফোন করুন",
            demo: "ডেমো দেখুন",
            note: "কোন সাইনআপের প্রয়োজন নেই"
        },
        footer: {
            tagline: "পেজ থেকে ব্র্যান্ড",
            note: "কোন সাইনআপের প্রয়োজন নেই",
            about: "UdyoktaStudio বাংলাদেশি Facebook ও Instagram সেলারের জন্য বাস্তব অনলাইন ব্যবসা গড়ে তুলতে সাহায্য করে।",
            rights: "সর্বস্বত্ব সংরক্ষিত।"
        },
        process: {
            title: "সহজ ৪-টি প্রক্রিয়া",
            steps: [
                { num: "০১", title: "সম্পাদনা", desc: "আমরা আপনার ব্যবসা এবং পরিদর্শন বুঝছি" },
                { num: "০২", title: "ডিজাইন ও নির্মাণ", desc: "আমরা আপনার আধুনিক ওয়েবসাইট তৈরি করি" },
                { num: "০৩", title: "পর্যালোচনা", desc: "আমরা আপনার প্রতিক্রিয়ার উপর ভিত্তি করে পরিমার্জন করি" },
                { num: "০৪", title: "লঞ্চ", desc: "আমরা নির্দেশনা ও সহায়তার সাথে লাইভ যাই" }
            ],
            timeline: "পরিষ্কার প্রক্রিয়া, দ্রুত ডেলিভারি",
        },
        tech: {
            title: "আধুনিক প্রযুক্তি দিয়ে নির্মিত",
            note: "কোন পুরানো টেমপ্লেট নয়। সম্পূর্ণ আধুনিক এবং স্কেলযোগ্য।",
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
        pricing: {
            title: "Pricing",
            badge: "Simple, Transparent Process",
            starter: {
                name: "Starter",
                label: "Most Popular",
                price: "৳ 5,000",
                features: ["৫-১০ Products", "Mobile Optimized", "WhatsApp Integration", "Basic Support", "১ সপ্তাহ Delivery"],
                ctaSuccess: "Thank You!",
                cta: "Get Started"
            },
            growth: {
                name: "Growth",
                label: "Most Popular",
                price: "৳ 35,000",
                features: ["Unlimited Products", "Advanced Features", "FB/IG Pixel Setup", "Priority Support", "Analytics Dashboard", "৩ মাস Free Updates"],
                cta: "Get Started"
            },
            enterprise: {
                name: "Enterprise",
                label: "Most Popular",
                price: "Custom",
                caption: "UdyoktaStudio helps Bangladeshi Facebook & Instagram sellers build real online businesses.",
                features: ["Growth এর সবকিছু", "Payment Gateway", "Custom Integrations", "Dedicated Manager", "Lifetime Updates"],
                cta: "Let's Talk"
            }
        }
    }
};

export default translations;