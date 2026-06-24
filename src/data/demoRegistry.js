import { lazy } from 'react';

// lazy ইম্পোর্ট ব্যবহারের ফলে ফাইলগুলো আগেই লোড হয়ে বসে থাকবে না, যখন দরকার হবে তখন লোড হবে।
export const demoComponents = {
    // সিঙ্গেল প্রোডাক্ট টেমপ্লেট বা ডেডিকেটেড পেজসমূহ
    book: lazy(() => import('@/pages/demo/BookDemoPage')),
    grocery: lazy(() => import('@/pages/demo/GroceryDemoPage')),
    design: lazy(() => import('@/pages/demo/DesignShowcasePage')),
    nature: lazy(() => import('@/pages/demo/NaturalsLanding')),
    brzen: lazy(() => import('@/pages/demo/BrZen')),
    organicoil: lazy(() => import('@/pages/demo/OrganicOil')),
    lawyer: lazy(() => import('@/pages/demo/LawyerLandingPage')),
    bookstorelandingpage: lazy(() => import('@/pages/demo/BookStoreLandingPage')),
    businesssaaslandingpage: lazy(() => import('@/pages/demo/BusinessLandingPage')),
    xenonbanklandingpage: lazy(() => import('@/pages/demo/XenonBankLanding')),
    cosmetics: lazy(() => import('@/pages/demo/CosmeticsShop')),
    auradecoecommerce: lazy(() => import('@/pages/demo/AuraDecoEcommerce')),
    premiumbooklandingpage: lazy(() => import('@/pages/demo/BookLandingPage')),
    // ভবিষ্যতে আরেকটি বই বা সিঙ্গেল প্রোডাক্ট যোগ করতে চাইলে জাস্ট এভাবে লিখবেন:
    // mango: lazy(() => import('@/pages/demo/MangoDemoPage')),
};

export const allDemos = [
    {
        "slug": "auradecoecommerce",
        "name": "Aura Deco Pinterest E-Commerce",
        "img": "/images/demo/Screenshot_6.png",
        "desc": "A fully cohesive e-commerce web application featuring a fluid Masonry grid layout inspired by Pinterest, fully functional unified cart states, dynamic modal item inspections, simulated checkout transitions, and custom order history logging.",
        "category": "E-Commerce",
        "type": "custom"
    },
    {
        slug: "grocery",
        name: "Organic Food & Grocery Store",
        img: "/images/demo/ghorerbazar.png",
        desc: "Premium grocery landing interface modeled after industry customs, featuring fluid category filtering and instant drawer cart calculations.",
        category: "Organic & Grocery",
        type: "custom"
    },
    {
        slug: "nature",
        name: "Pure & Organic Naturals",
        img: "/images/demo/Pure & Organic Naturals.png",
        desc: "An eco-friendly storefront highlighting herbal remedies, essential oils, and botanical skincare with fluid organic layouts.",
        category: "Naturals & Wellness",
        type: "custom"
    },
    {
        slug: "brzen",
        name: "BrZen Luxury Concept Store",
        img: "/images/demo/BrZen Luxury Concept Store.png",
        desc: "High-end minimalist e-commerce interface featuring multi-variant selectors, fluid editorial grids, and an optimized single-session checkout flow.",
        category: "Luxury Fragrance & Footwear",
        type: "custom"
    },
    {
        slug: "organicoil",
        name: "OrganicOil",
        img: "/images/demo/OrganicOil.png",
        desc: "High-end minimalist e-commerce interface featuring multi-variant selectors, fluid editorial grids, and an optimized single-session checkout flow.",
        category: "Organic & Grocery",
        type: "custom"
    },
    {
        slug: "lawyer",
        name: "Lawyer",
        img: "/images/demo/Screenshot_1.png",
        desc: "High-end minimalist e-commerce interface featuring multi-variant selectors, fluid editorial grids, and an optimized single-session checkout flow.",
        category: "Corporate",
        type: "custom"
    },
    {
        slug: "bookstorelandingpage",
        name: "Book Store",
        img: "/images/demo/Screenshot_2.png",
        desc: "High-end minimalist e-commerce interface featuring multi-variant selectors, fluid editorial grids, and an optimized single-session checkout flow.",
        category: "E-Commerce",
        type: "custom"
    },
    {
        slug: "businesssaaslandingpage",
        name: "B2B SaaS Corporate Platform",
        img: "/images/demo/Screenshot_3.png",
        desc: "Next-generation enterprise SaaS dashboard interface with integrated interactive billing toggles, responsive metrics tracking, dynamic tooltips, and a streamlined multi-tier layout.",
        category: "Corporate",
        type: "custom"
    },
    {
        "slug": "xenonbanklandingpage",
        "name": "Xenon Fintech Corporate Banking",
        "img": "/images/demo/Screenshot_4.png",
        "desc": "Elite corporate banking interface inspired by image_da41c1.jpg, utilizing sharp tab state-switching workflows, neon feature grids, and structural trust badging.",
        "category": "Fintech",
        "type": "custom"
    },
    {
        "slug": "cosmetics",
        "name": "Glow & Skincare Shop",
        "img": "/images/demo/Screenshot_5.png",
        "desc": "Minimalist boutique interface for beauty products, featuring volume attributes.",
        "category": "Beauty & Personal Care",
        "type": "custom"
    },
    {
        "slug": "premiumbooklandingpage",
        "name": "Premium Book Landing Page",
        "img": "/images/demo/Screenshot_7.png",
        "desc": "Single-product showcase designed specifically for authors, publishers, and literary competitions.",
        "category": "Marketing & Landing Pages",
        "type": "custom"
    }
];