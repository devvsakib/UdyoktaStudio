export const NATURALS_PRODUCTS = [
    {
        id: 1,
        title: "Onimix Onion Shampoo",
        subtitle: "Nourishing & Anti-Hairfall",
        category: "Haircare",
        price: 618,
        originalPrice: 700,
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80",
        badge: "Best Seller",
        rating: 5,
        reviewsCount: 42,
        stock: 12,
        description: "কোনো ক্ষতিকর কেমিক্যাল ছাড়া সম্পূর্ণ প্রাকৃতিক উপাদানে তৈরি আমাদের ওনিমিক্স শ্যাম্পু, যা চুলের গোড়া মজবুত করে এবং চুল পড়া রোধ করে।"
    },
    {
        id: 2,
        title: "Scalp Nutrition Serum",
        subtitle: "Deep Root Rejuvenation",
        category: "Serums",
        price: 1012,
        originalPrice: 1150,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
        badge: "12% OFF",
        rating: 4.9,
        reviewsCount: 28,
        stock: 7,
        description: "চুলের গভীর থেকে পুষ্টি জোগাতে এবং নতুন চুল গজাতে সাহায্য করতে কার্যকর এই স্কাল্প নিউট্রিশন সিরাম।"
    },
    {
        id: 3,
        title: "SilkDrop Hair Serum",
        subtitle: "Frizz-Free Instant Shine",
        category: "Serums",
        price: 1012,
        originalPrice: 1150,
        image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=600&q=80",
        badge: "New Launch",
        rating: 5,
        reviewsCount: 19,
        stock: 15,
        description: "রুক্ষ এবং জট লেগে যাওয়া চুলকে তাৎক্ষণিকভাবে সিল্কি, মসৃণ এবং ঝলমলে করে তুলতে সিল্কড্রপ হেয়ার সিরাম অনন্য।"
    },
    {
        id: 4,
        title: "Premium Hair Pack Spa",
        subtitle: "Intense Moisture & Damage Repair",
        category: "Haircare",
        price: 630,
        originalPrice: 700,
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80",
        badge: "Organic",
        rating: 4.8,
        reviewsCount: 34,
        stock: 5,
        description: "ড্যামেজ হয়ে যাওয়া চুলের পুষ্টি ফিরিয়ে আনতে এবং পার্লারের মতো স্পা ট্রিটমেন্ট ঘরেই পেতে এই হেয়ার প্যাকটি ব্যবহার করুন।"
    }
];

export const CATEGORIES = ["All", "Haircare", "Serums"];

import React, { useState, useMemo } from 'react';
import {
    ShoppingBag, Star, ShieldCheck, Truck, RefreshCw,
    MessageCircle, Heart, X, Plus, Minus, CheckCircle,
    ArrowRight, SlidersHorizontal, Search, Percent, Tag
} from 'lucide-react';

export default function NaturalsLanding() {
    // অ্যাপ স্টেট ম্যানেজমেন্ট
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [checkoutStep, setCheckoutStep] = useState('idle'); // 'idle' | 'form' | 'success'

    // ফিল্টারিং ও সার্চ স্টেট
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('default'); // 'default' | 'low-high' | 'high-low'

    // প্রোমো কোড স্টেট
    const [couponCode, setCouponCode] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(0); // শতাংশ বা ফিক্সড অ্যামাউন্ট
    const [couponError, setCouponError] = useState('');

    // কাস্টমার ও ডেলিভারি স্টেট
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phone: '',
        address: '',
        zone: 'inside', // 'inside' = ঢাকা সিটির ভেতরে, 'outside' = বাইরে
        notes: ''
    });

    // ১. ডাইনামিক ফিল্টারিং ও সর্টিং লজিক
    const filteredProducts = useMemo(() => {
        let result = [...NATURALS_PRODUCTS];

        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory);
        }

        if (searchQuery.trim() !== '') {
            result = result.filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (sortBy === 'low-high') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'high-low') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [selectedCategory, searchQuery, sortBy]);

    // ২. কার্ট ক্যালকুলেশন মেথড
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryCharge = totalItems > 0 ? (customerInfo.zone === 'inside' ? 60 : 120) : 0;

    const discountAmount = useMemo(() => {
        return Math.round((subtotal * appliedDiscount) / 100);
    }, [subtotal, appliedDiscount]);

    const grandTotal = subtotal + deliveryCharge - discountAmount;

    // ৩. কার্ট অ্যাকশন হ্যান্ডলারস
    const addToCart = (product) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                if (existing.quantity >= product.stock) {
                    alert(`দুঃখিত, এই প্রোডাক্টটি সর্বোচ্চ ${product.stock} টি অর্ডার করা সম্ভব।`);
                    return prevCart;
                }
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const updateQuantity = (id, delta, currentQty, maxStock) => {
        if (delta > 0 && currentQty >= maxStock) {
            alert(`দুঃখিত, আমাদের স্টকে আর মাত্র ${maxStock} টি প্রোডাক্ট উপলব্ধ রয়েছে।`);
            return;
        }
        setCart(prevCart => prevCart.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    // ৪. কুপন সিস্টেম ভ্যালিডেশন
    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode.trim().toUpperCase() === 'NATURALS10') {
            setAppliedDiscount(10); // ১০% ফ্ল্যাট ডিসকাউন্ট
            setCouponError('');
        } else {
            setCouponError('ভ্যালিড প্রোমো কোড দিন (যেমন: NATURALS10)');
            setAppliedDiscount(0);
        }
    };

    // ৫. ফাইনাল অর্ডার সাবমিশন এবং হোয়াটসঅ্যাপ এপিআই ট্রিপল ইন্টারলকিং
    const handleCheckoutSubmit = (e) => {
        e.preventDefault();
        if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
            alert("দয়া করে প্রয়োজনীয় সব ফিল্ড সঠিকভাবে পূরণ করুন।");
            return;
        }

        let productDetails = cart.map(item => `• ${item.title} [Qty: ${item.quantity}] - ৳${item.price * item.quantity}`).join('\n');
        const message = `*নতুন ই-কমার্স অর্ডার (Naturals by Rakhi)*\n\n` +
            `*গ্রাহকের বিবরণ:*\n` +
            `নাম: ${customerInfo.name}\n` +
            `ফোন: ${customerInfo.phone}\n` +
            `ঠিকানা: ${customerInfo.address}\n` +
            `ডেলিভারি জোন: ${customerInfo.zone === 'inside' ? 'ঢাকার ভেতরে' : 'ঢাকার বাইরে'}\n` +
            `নোট: ${customerInfo.notes || 'নেই'}\n\n` +
            `*অর্ডারকৃত আইটেমসমূহ:*\n${productDetails}\n\n` +
            `সাবটোটাল: ৳${subtotal}\n` +
            `ডিসকাউন্ট: -৳${discountAmount}\n` +
            `ডেলিভারি চার্জ: ৳${deliveryCharge}\n` +
            `*সর্বমোট প্রদেয় বিল: ৳${grandTotal}* (Cash on Delivery)`;

        // window.open(`https://wa.me/8801792552300?text=${encodeURIComponent(message)}`, '_blank');
        setCheckoutStep('success');
    };

    const resetOrderFlow = () => {
        setCart([]);
        setAppliedDiscount(0);
        setCouponCode('');
        setCheckoutStep('idle');
    };

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans selection:bg-emerald-200 relative overflow-x-hidden">

            <div className="bg-emerald-900 text-white text-center py-2.5 text-xs font-semibold tracking-wide px-4">
                🌿 স্পেশাল অফার! ১০% ডিসকাউন্টের জন্য ব্যবহার করুন প্রোমো কোড: <span className="bg-amber-600 px-1.5 py-0.5 rounded text-white font-mono ml-1">NATURALS10</span>
            </div>
            <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-neutral-200 z-40 px-4 py-4 sm:px-8 flex justify-between items-center shadow-sm">
                <div className="flex flex-col">
                    <span className="text-xl font-black tracking-tight text-emerald-950 uppercase">Naturals</span>
                    <span className="text-[10px] tracking-[0.25em] text-amber-700 font-bold -mt-1 uppercase">by Rakhi</span>
                </div>

                <div className="hidden md:flex items-center relative w-80">
                    <input
                        type="text"
                        placeholder="প্রোডাক্ট খুঁজুন..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-neutral-100 border border-neutral-200 text-xs rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                    />
                    <Search size={14} className="absolute left-3 text-neutral-400" />
                </div>

                <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition flex items-center justify-center"
                >
                    <ShoppingBag size={20} className="text-neutral-700" />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {totalItems}
                        </span>
                    )}
                </button>
            </nav>

            <header className="relative bg-gradient-to-b from-emerald-50 via-white to-neutral-50 py-16 md:py-24 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            100% Organic Hair Care
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
                            প্রকৃতির ছোঁয়ায় চুল হোক <br />
                            <span className="text-emerald-700">ঘন, সিল্কি ও প্রাণবন্ত</span>
                        </h1>
                        <p className="text-neutral-600 text-sm sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
                            কোনো ক্ষতিকর কেমিক্যাল ছাড়া সম্পূর্ণ প্রাকৃতিক উপাদানে তৈরি আমাদের হেয়ার কেয়ার এসেনশিয়ালস, যা চুলের গোড়া মজবুত করে চুল পড়া রোধ করে।
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                            <a href="#shop" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all transform active:scale-95">
                                শপ কালেকশন
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/40 to-amber-200/30 rounded-full blur-3xl -z-10 w-72 h-72 mx-auto" />
                        <img
                            src="https://naturalsbyrakhi.com/storage/upload/img_69e4a4573bb312.91933074.webp"
                            alt="Hero Showcase"
                            className="w-full max-w-sm h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </header>

            <section className="bg-white border-y border-neutral-200 py-8 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center p-2">
                        <ShieldCheck className="text-emerald-700 mb-2" size={28} />
                        <h3 className="text-xs font-bold uppercase text-neutral-900">১০০% ভেষজ উপাদান</h3>
                    </div>
                    <div className="flex flex-col items-center p-2">
                        <Truck className="text-emerald-700 mb-2" size={28} />
                        <h3 className="text-xs font-bold uppercase text-neutral-900">সারাদেশে হোম ডেলিভারি</h3>
                    </div>
                    <div className="flex flex-col items-center p-2">
                        <RefreshCw className="text-emerald-700 mb-2" size={28} />
                        <h3 className="text-xs font-bold uppercase text-neutral-900">নিশ্চিত কার্যকারিতা</h3>
                    </div>
                    <div className="flex flex-col items-center p-2">
                        <Star className="text-emerald-700 mb-2" size={28} />
                        <h3 className="text-xs font-bold uppercase text-neutral-900">হাজারো পজিティブ রিভিউ</h3>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-sm">
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === category
                                    ? 'bg-emerald-800 text-white shadow-md'
                                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                    }`}
                            >
                                {category === 'All' ? 'সব প্রোডাক্টস' : category}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                        <SlidersHorizontal size={14} className="text-neutral-500" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-neutral-50 border border-neutral-200 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-600 cursor-pointer w-full sm:w-auto"
                        >
                            <option value="default">ডিফল্ট সর্টিং</option>
                            <option value="low-high">মূল্য: নিম্ন থেকে উচ্চ</option>
                            <option value="high-low">মূল্য: উচ্চ থেকে নিম্ন</option>
                        </select>
                    </div>
                </div>

                {searchQuery && (
                    <p className="text-xs text-neutral-500 font-medium">
                        "<span className="text-neutral-900 font-bold">{searchQuery}</span>" এর জন্য পাওয়া গেছে {filteredProducts.length} টি প্রোডাক্ট।
                    </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col group">

                            <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                                    {product.badge}
                                </span>
                                {product.stock <= 5 && (
                                    <span className="absolute bottom-3 right-3 bg-amber-100 text-amber-800 text-[9px] font-black px-2 py-0.5 rounded border border-amber-200">
                                        মাত্র {product.stock} টি অবশিষ্ট আছে!
                                    </span>
                                )}
                            </div>

                            <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1 text-amber-500">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={11} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />)}
                                        <span className="text-[10px] text-neutral-400 font-bold ml-1">({product.reviewsCount})</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-neutral-900 tracking-tight group-hover:text-emerald-700 transition">
                                        {product.title}
                                    </h3>
                                    <p className="text-[11px] text-neutral-500 font-medium leading-tight">{product.subtitle}</p>
                                </div>

                                <div className="pt-3 border-t border-neutral-100 space-y-3">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-base font-black text-neutral-900">৳{product.price}</span>
                                        <span className="text-xs text-neutral-400 line-through font-medium">৳{product.originalPrice}</span>
                                    </div>

                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-black py-2.5 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        <ShoppingBag size={14} /> কার্টে যুক্ত করুন
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl border border-neutral-200">
                        <p className="text-sm text-neutral-400 font-medium">আপনার খোঁজা শর্তাবলীর সাথে মিলে এমন কোনো প্রোডাক্ট পাওয়া যায়নি।</p>
                    </div>
                )}
            </main>

            {isCartOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
                    <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl relative">
                        <div className="p-4 border-b border-neutral-200 flex justify-between items-center bg-neutral-50">
                            <div className="flex items-center gap-2 font-black text-neutral-900 text-sm">
                                <ShoppingBag size={18} className="text-emerald-700" />
                                <span>আপনার শপিং কার্ট ({totalItems})</span>
                            </div>
                            <button onClick={() => setIsCartOpen(false)} className="p-1 hover:bg-neutral-200 rounded-full transition">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 space-y-4">
                            {cart.length === 0 ? (
                                <div className="text-center py-20 space-y-2">
                                    <p className="text-neutral-400 text-xs font-semibold">আপনার কার্টে কোনো প্রোডাক্ট নেই।</p>
                                </div>
                            ) : (
                                cart.map(item => (
                                    <div key={item.id} className="flex gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100 relative">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-neutral-200" />
                                        <div className="flex-grow space-y-1">
                                            <h4 className="text-xs font-bold text-neutral-900 leading-tight pr-4">{item.title}</h4>
                                            <p className="text-xs font-black text-emerald-800">৳{item.price * item.quantity}</p>

                                            <div className="flex items-center gap-2 pt-1">
                                                <button onClick={() => updateQuantity(item.id, -1, item.quantity, item.stock)} className="p-1 bg-white border border-neutral-200 rounded-md hover:bg-neutral-100">
                                                    <Minus size={10} />
                                                </button>
                                                <span className="text-xs font-mono font-bold w-4 text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1, item.quantity, item.stock)} className="p-1 bg-white border border-neutral-200 rounded-md hover:bg-neutral-100">
                                                    <Plus size={10} />
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setCart(prev => prev.filter(p => p.id !== item.id))}
                                            className="absolute top-3 right-3 text-neutral-400 hover:text-red-500"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-4 border-t border-neutral-200 bg-neutral-50 space-y-4">

                                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="কুপন কোড দিন"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        disabled={appliedDiscount > 0}
                                        className="flex-grow bg-white border border-neutral-300 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:border-emerald-600 uppercase"
                                    />
                                    <button
                                        type="submit"
                                        disabled={appliedDiscount > 0}
                                        className="bg-neutral-900 hover:bg-neutral-800 disabled:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition"
                                    >
                                        {appliedDiscount > 0 ? 'Applied' : 'Apply'}
                                    </button>
                                </form>
                                {couponError && <p className="text-[10px] text-red-500 font-medium -mt-2 pl-1">{couponError}</p>}
                                {appliedDiscount > 0 && (
                                    <div className="flex items-center gap-1 text-emerald-700 font-bold text-[11px] pl-1">
                                        <Tag size={12} /> ১০% ডিসকাউন্ট সফলভাবে যুক্ত হয়েছে!
                                    </div>
                                )}

                                <div className="space-y-1.5 text-xs font-medium text-neutral-600 border-t border-neutral-200/60 pt-3">
                                    <div className="flex justify-between"><span>সাবটোটাল:</span><span className="font-bold text-neutral-900">৳{subtotal}</span></div>
                                    {discountAmount > 0 && (
                                        <div className="flex justify-between text-emerald-700"><span>ডিসকাউন্ট:</span><span>-৳{discountAmount}</span></div>
                                    )}
                                    <div className="flex justify-between"><span>ডেলিভারি চার্জ:</span><span className="font-bold text-neutral-900">৳{deliveryCharge}</span></div>
                                    <div className="flex justify-between text-sm font-black text-neutral-900 pt-2 border-t border-neutral-200">
                                        <span>সর্বমোট বিল:</span><span className="text-emerald-800">৳{grandTotal}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => { setIsCartOpen(false); setCheckoutStep('form'); }}
                                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2"
                                >
                                    চেকআউট করুন <ArrowRight size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {checkoutStep === 'form' && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-scaleUp">
                        <div className="p-4 bg-emerald-900 text-white flex justify-between items-center">
                            <h3 className="font-bold text-sm tracking-wide">অর্ডার তথ্য ও ক্যাশ অন ডেলিভারি</h3>
                            <button onClick={() => setCheckoutStep('idle')} className="p-1 hover:bg-emerald-800 rounded-full transition"><X size={18} /></button>
                        </div>

                        <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">আপনার সম্পূর্ণ নাম *</label>
                                <input
                                    type="text" required
                                    className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-600 bg-neutral-50"
                                    value={customerInfo.name}
                                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">সচল মোবাইল নম্বর *</label>
                                <input
                                    type="tel" required placeholder="01XXXXXXXXX"
                                    className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-600 bg-neutral-50"
                                    value={customerInfo.phone}
                                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">ডেলিভারি এরিয়া জোন *</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <label className={`border p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition ${customerInfo.zone === 'inside' ? 'border-emerald-600 bg-emerald-50 text-emerald-950' : 'border-neutral-200 bg-white'}`}>
                                        <input type="radio" name="zone" value="inside" checked={customerInfo.zone === 'inside'} onChange={() => setCustomerInfo({ ...customerInfo, zone: 'inside' })} className="hidden" />
                                        ঢাকার ভেতরে (৳৬০)
                                    </label>
                                    <label className={`border p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition ${customerInfo.zone === 'outside' ? 'border-emerald-600 bg-emerald-50 text-emerald-950' : 'border-neutral-200 bg-white'}`}>
                                        <input type="radio" name="zone" value="outside" checked={customerInfo.zone === 'outside'} onChange={() => setCustomerInfo({ ...customerInfo, zone: 'outside' })} className="hidden" />
                                        ঢাকার বাইরে (৳১২0)
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">পূর্ণাঙ্গ ঠিকানা *</label>
                                <textarea
                                    required rows="2" placeholder="বাসা/রোড নম্বর, ইউনিয়ন/থানা এবং জেলার নাম লিখুন"
                                    className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-600 bg-neutral-50"
                                    value={customerInfo.address}
                                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-xs font-semibold text-emerald-950 flex justify-between items-center">
                                <span>সর্বমোট প্রদেয় বিল (ডেলিভারিসহ):</span>
                                <span className="text-sm font-black text-emerald-800">৳{grandTotal}</span>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-black text-sm py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                            >
                                অর্ডার কনফার্ম করুন
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {checkoutStep === 'success' && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-sm p-6 text-center shadow-2xl space-y-4">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                            <CheckCircle size={36} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-black text-neutral-900">অর্ডার প্লেস হয়েছে!</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                আপনার অর্ডারের চালান (Invoice) এবং বিবরণ সহ হোয়াটসঅ্যাপ মেসেজটি তৈরি হয়েছে। দয়া করে চ্যাট বক্সে গিয়ে সেন্ড বাটনটি চাপুন।
                            </p>
                        </div>
                        <button
                            onClick={resetOrderFlow}
                            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-2.5 rounded-xl transition"
                        >
                            মূল স্ক্রিনে ফিরুন
                        </button>
                    </div>
                </div>
            )}

            <footer className="bg-neutral-900 text-neutral-400 py-12 px-4 border-t border-neutral-800 text-center text-xs">
                <div className="max-w-4xl mx-auto space-y-4">
                    <p className="font-bold text-neutral-200">Naturals by Rakhi Web Platform</p>
                    <div className="text-neutral-500">
                        &copy; {new Date().getFullYear()} UdyoktaStudio. All Rights Reserved.
                    </div>
                </div>
            </footer>

        </div>
    );
}