import { lazy } from 'react';

// lazy ইম্পোর্ট ব্যবহারের ফলে ফাইলগুলো আগেই লোড হয়ে বসে থাকবে না, যখন দরকার হবে তখন লোড হবে।
export const demoComponents = {
    // সিঙ্গেল প্রোডাক্ট টেমপ্লেট বা ডেডিকেটেড পেজসমূহ
    book: lazy(() => import('@/pages/demo/BookDemoPage')),
    grocery: lazy(() => import('@/pages/demo/GroceryDemoPage')),
    design: lazy(() => import('@/pages/demo/DesignShowcasePage')),
    nature: lazy(() => import('@/pages/demo/NaturalsLanding')),
    // ভবিষ্যতে আরেকটি বই বা সিঙ্গেল প্রোডাক্ট যোগ করতে চাইলে জাস্ট এভাবে লিখবেন:
    // mango: lazy(() => import('@/pages/demo/MangoDemoPage')),
};

export const allDemos = [
    {
        slug: "fashion",
        name: "Fashion & Apparel Store",
        desc: "Clean layout tailored for clothing brands, supporting size variants and dynamic grids.",
        category: "Clothing & Apparel",
        type: "standard"
    },
    {
        slug: "cosmetics",
        name: "Glow & Skincare Shop",
        desc: "Minimalist boutique interface for beauty products, featuring volume attributes.",
        category: "Beauty & Personal Care",
        type: "standard"
    },
    {
        slug: "gadgets",
        name: "Next-Gen Tech Gadgets",
        desc: "Modern e-commerce interface optimized for electronic accessories with warranty tags.",
        category: "Tech & Gadgets",
        type: "standard"
    },
    {
        slug: "book",
        name: "Premium Book Landing Page",
        desc: "Single-product showcase designed specifically for authors, publishers, and literary competitions.",
        category: "Books & Literature",
        type: "custom"
    },
    {
        slug: "grocery",
        name: "Organic Food & Grocery Store",
        desc: "Premium grocery landing interface modeled after industry standards, featuring fluid category filtering and instant drawer cart calculations.",
        category: "Organic & Grocery",
        type: "custom"
    },
    {
        slug: "design",
        name: "Premium UI/UX Design Marketplace",
        desc: "Commercial production-ready interface showcase with customized licensing models and dynamic validation checkout routing.",
        category: "Design Portfolio & Store",
        type: "custom"
    },
    {
        slug: "nature",
        name: "Premium UI/UX Design Marketplace",
        desc: "Commercial production-ready interface showcase with customized licensing models and dynamic validation checkout routing.",
        category: "Design Portfolio & Store",
        type: "custom"
    },
];