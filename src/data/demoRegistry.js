import { lazy } from 'react';

// lazy ইম্পোর্ট ব্যবহারের ফলে ফাইলগুলো আগেই লোড হয়ে বসে থাকবে না, যখন দরকার হবে তখন লোড হবে।
export const demoComponents = {
    // সিঙ্গেল প্রোডাক্ট টেমপ্লেট বা ডেডিকেটেড পেজসমূহ
    book: lazy(() => import('@/pages/demo/BookDemoPage')),
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
    }
];