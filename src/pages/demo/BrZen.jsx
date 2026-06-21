import React, { useState, useMemo } from 'react';
import {
    ShoppingBag, Trash2, ChevronRight, CheckCircle,
    Star, Heart, ArrowRight, ArrowLeft, Menu, X,
    MapPin, Phone, Mail, SlidersHorizontal
} from 'lucide-react';
import mockData from '@/data/products.json';

export default function BrZen() {
    // Page Navigation State: 'home' | 'catalog' | 'details' | 'cart' | 'checkout' | 'success' | 'orders' | 'contact'
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProductId, setSelectedProductId] = useState('perfume-tf-lc');
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    // Detail Page Variation Selection States
    const [selectedVariants, setSelectedVariants] = useState({});
    const [activeDetailImage, setActiveDetailImage] = useState(0);

    // Form Fields
    const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '', address: '', city: '', zip: '', card: '' });
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [contactSubmitted, setContactSubmitted] = useState(false);

    const products = mockData.products;
    const currentProduct = useMemo(() => {
        const prod = products.find(p => p.id === selectedProductId) || products[0];
        // Initialize default variants whenever current product changes
        return prod;
    }, [selectedProductId, products]);

    // Sync variations when product is opened
    const initVariants = (product) => {
        const defaults = {};
        product.variants.forEach(v => {
            defaults[v.name] = v.options[0];
        });
        setSelectedVariants(defaults);
        setActiveDetailImage(0);
    };

    const navigateToProduct = (id) => {
        setSelectedProductId(id);
        const prod = products.find(p => p.id === id);
        initVariants(prod);
        setCurrentPage('details');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Cart Functions
    const addToCart = (product, variants, quantity = 1) => {
        const cartItemId = `${product.id}-${Object.values(variants).join('-')}`;
        setCart(prev => {
            const existing = prev.find(item => item.cartItemId === cartItemId);
            if (existing) {
                return prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + quantity } : item);
            }
            return [...prev, { ...product, cartItemId, selectedVariants: { ...variants }, quantity }];
        });
        setCurrentPage('cart');
    };

    const updateCartQty = (cartItemId, change) => {
        setCart(prev => prev.map(item => {
            if (item.cartItemId === cartItemId) {
                const newQty = item.quantity + change;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Checkout submission
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const newOrder = {
            id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
            date: new Date().toLocaleDateString(),
            items: [...cart],
            total: cartTotal + 15, // Plus shipping fee
            shippingDetails: { ...checkoutForm }
        };
        setOrders(prev => [newOrder, ...prev]);
        setCart([]);
        setCurrentPage('success');
    };

    return (
        <div className="min-h-screen bg-[#F9F9F9] text-neutral-900 font-sans selection:bg-neutral-200">
            <div className="bg-neutral-900 text-white text-xs tracking-widest text-center py-2 px-4 uppercase">
                Free global delivery on orders over $250.00
            </div>

            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <button onClick={() => setCurrentPage('home')} className="text-xl font-black tracking-tight uppercase">
                            BR.<span className="text-neutral-400">Zen</span>
                        </button>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide text-neutral-600">
                            <button onClick={() => setCurrentPage('home')} className={`hover:text-black transition ${currentPage === 'home' ? 'text-black font-semibold' : ''}`}>Home</button>
                            <button onClick={() => setCurrentPage('catalog')} className={`hover:text-black transition ${currentPage === 'catalog' ? 'text-black font-semibold' : ''}`}>Catalog</button>
                            <button onClick={() => setCurrentPage('orders')} className={`hover:text-black transition ${currentPage === 'orders' ? 'text-black font-semibold' : ''}`}>Track Orders</button>
                            <button onClick={() => setCurrentPage('contact')} className={`hover:text-black transition ${currentPage === 'contact' ? 'text-black font-semibold' : ''}`}>Contact Us</button>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={() => setCurrentPage('cart')} className="relative p-2 hover:bg-neutral-50 rounded-full transition">
                            <ShoppingBag className="w-5 h-5" />
                            {cart.length > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 bg-neutral-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {cart.reduce((a, c) => a + c.quantity, 0)}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <main className="pb-24">
                {currentPage === 'home' && (
                    <div>
                        <section className="relative bg-neutral-950 text-white overflow-hidden min-h-[70vh] flex items-center">
                            <div className="absolute inset-0 z-0 opacity-40">
                                <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1600&auto=format&fit=crop&q=80" alt="Hero background" className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-3">Seasonal Drop</p>
                                <h1 className="text-5xl md:text-7xl font-light tracking-tight max-w-3xl mb-6">
                                    NARCISO & <br /><span className="font-serif italic">The Avant-Garde</span>
                                </h1>
                                <p className="text-neutral-300 max-w-md text-sm md:text-base mb-8 leading-relaxed">
                                    Explore curation structured around architectural precision, high luxury extraits, and responsive performance designs.
                                </p>
                                <button onClick={() => setCurrentPage('catalog')} className="bg-white text-neutral-950 px-8 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition inline-flex items-center gap-2">
                                    Shop the Collection <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </section>

                        <section className="bg-white py-12 border-b border-neutral-100">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                {[
                                    { t: "Curated Excellence", d: "Handpicked premium lots" },
                                    { t: "Fast Shipping", d: "Global tracking dispatched early" },
                                    { t: "Secure Pay", d: "Fully encrypted transaction gateways" },
                                    { t: "Modern Support", d: "Direct active communication lines" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4">
                                        <p className="text-xs font-bold uppercase tracking-wider mb-1">{item.t}</p>
                                        <p className="text-xs text-neutral-500">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                            <div className="flex items-end justify-between mb-10">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Editor's Picks</p>
                                    <h2 className="text-2xl font-bold tracking-tight uppercase">Trending Now</h2>
                                </div>
                                <button onClick={() => setCurrentPage('catalog')} className="text-xs tracking-widest uppercase font-semibold border-b-2 border-neutral-900 pb-1 flex items-center gap-1 hover:text-neutral-600 transition">
                                    View All Products <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                                {products.map(product => (
                                    <div key={product.id} className="group cursor-pointer" onClick={() => navigateToProduct(product.id)}>
                                        <div className="relative bg-neutral-100 overflow-hidden mb-4 aspect-square">
                                            <img src={product.mainImage} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" />
                                            {product.originalPrice && (
                                                <span className="absolute top-3 left-3 bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">Sale</span>
                                            )}
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-xs text-neutral-400 uppercase tracking-tight">{product.brand}</p>
                                                <h3 className="text-sm font-medium line-clamp-1 group-hover:underline">{product.name}</h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                                                {product.originalPrice && <p className="text-xs text-neutral-400 line-through">${product.originalPrice.toFixed(2)}</p>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-neutral-100 py-20">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-2">The Philosophy</span>
                                    <h2 className="text-3xl md:text-4xl font-serif italic mb-6 text-neutral-900">"Minimalism is not a lack of something. It's simply the perfect amount of something."</h2>
                                    <p className="text-sm text-neutral-600 leading-relaxed mb-8">
                                        Our platform mirrors the aesthetic guidelines of modern minimalist design principles: high clarity typography, breathable grid modules, and dynamic fluid functionality.
                                    </p>
                                    <button onClick={() => setCurrentPage('catalog')} className="bg-neutral-900 text-white px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-neutral-800 transition">
                                        Explore Modern Textures
                                    </button>
                                </div>
                                <div className="order-1 md:order-2 aspect-[4/5] bg-neutral-200 overflow-hidden shadow-sm">
                                    <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop&q=80" alt="Editorial Fragrance" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </section>

                        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                            <div className="bg-neutral-950 text-white py-16 px-6 md:px-12 flex flex-col items-center justify-center">
                                <h3 className="text-2xl md:text-3xl tracking-tight uppercase font-bold mb-4">Join The Club</h3>
                                <p className="text-neutral-400 max-w-md text-xs md:text-sm mb-6 leading-relaxed">
                                    Subscribe to receive specialized early notifications regarding flash sales, custom product allocations, and interactive design logs.
                                </p>
                                <div className="w-full max-w-sm flex border-b border-white py-1">
                                    <input type="email" placeholder="Your email address" className="bg-transparent border-none text-white text-xs w-full focus:outline-none placeholder:text-neutral-600 px-2" />
                                    <button className="text-xs uppercase font-bold tracking-widest pl-2">Join</button>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {currentPage === 'catalog' && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6 mb-8">
                            <div>
                                <h1 className="text-3xl font-black uppercase tracking-tight">Catalog</h1>
                                <p className="text-xs text-neutral-500 mt-1">{products.length} Products available</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="border border-neutral-300 px-4 py-2 text-xs tracking-wide font-medium bg-white flex items-center gap-2 rounded-sm">
                                    <SlidersHorizontal className="w-3 h-3" /> Filters & Sorting
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                            {products.map(product => (
                                <div key={product.id} className="group cursor-pointer" onClick={() => navigateToProduct(product.id)}>
                                    <div className="bg-neutral-100 aspect-square overflow-hidden mb-4 relative">
                                        <img src={product.mainImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-[11px] uppercase tracking-wider text-neutral-400">{product.brand}</p>
                                            <h3 className="text-sm font-medium text-neutral-800 line-clamp-1">{product.name}</h3>
                                        </div>
                                        <p className="text-sm font-bold text-neutral-900">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {currentPage === 'details' && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <button onClick={() => setCurrentPage('catalog')} className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold mb-8 text-neutral-500 hover:text-black">
                            <ArrowLeft className="w-3 h-3" /> Back to catalog
                        </button>

                        <div className="grid lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-7 space-y-4">
                                <div className="bg-white border border-neutral-100 aspect-square overflow-hidden rounded-sm">
                                    <img src={currentProduct.images[activeDetailImage] || currentProduct.mainImage} alt="Active View" className="w-full h-full object-cover object-center" />
                                </div>
                                <div className="flex gap-3">
                                    {currentProduct.images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveDetailImage(index)}
                                            className={`w-20 h-20 border bg-white overflow-hidden rounded-sm p-1 transition ${activeDetailImage === index ? 'border-neutral-900 ring-1 ring-neutral-900' : 'border-neutral-200'}`}
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex flex-col justify-between">
                                <div>
                                    <div className="border-b border-neutral-100 pb-4 mb-6">
                                        <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-1">{currentProduct.brand}</p>
                                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-neutral-900">{currentProduct.name}</h1>

                                        <div className="flex items-center gap-4 mt-2">
                                            <div className="flex items-center text-amber-500">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="text-xs font-bold text-neutral-900 ml-1">{currentProduct.rating}</span>
                                            </div>
                                            <span className="text-xs text-neutral-400">({currentProduct.reviewCount} user verified reviews)</span>
                                        </div>

                                        <div className="flex items-baseline gap-3 mt-4">
                                            <span className="text-2xl font-black">${currentProduct.price.toFixed(2)}</span>
                                            {currentProduct.originalPrice && (
                                                <span className="text-sm text-neutral-400 line-through">${currentProduct.originalPrice.toFixed(2)}</span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-xs leading-relaxed text-neutral-600 mb-6">{currentProduct.description}</p>

                                    <div className="space-y-6 border-t border-neutral-100 pt-6">
                                        {currentProduct.variants.map((variant) => (
                                            <div key={variant.name}>
                                                <label className="block text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2">
                                                    Select {variant.name}: <span className="text-neutral-900 font-normal">{selectedVariants[variant.name]}</span>
                                                </label>

                                                <div className="flex flex-wrap gap-2">
                                                    {variant.options.map((option) => {
                                                        const isSelected = selectedVariants[variant.name] === option;

                                                        if (variant.type === 'color') {
                                                            return (
                                                                <button
                                                                    key={option}
                                                                    onClick={() => setSelectedVariants(prev => ({ ...prev, [variant.name]: option }))}
                                                                    style={{ backgroundColor: option }}
                                                                    className={`w-8 h-8 rounded-full border transform transition hover:scale-105 ${isSelected ? 'ring-2 ring-neutral-900 border-white' : 'border-neutral-300'}`}
                                                                    title={option}
                                                                />
                                                            );
                                                        }

                                                        return (
                                                            <button
                                                                key={option}
                                                                onClick={() => setSelectedVariants(prev => ({ ...prev, [variant.name]: option }))}
                                                                className={`px-4 py-2 text-xs font-medium border rounded-sm tracking-wide transition uppercase ${isSelected ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400'}`}
                                                            >
                                                                {option}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                                    <button
                                        onClick={() => addToCart(currentProduct, selectedVariants)}
                                        className="w-full bg-neutral-900 text-white text-xs tracking-widest font-bold uppercase py-4 hover:bg-neutral-800 transition shadow-sm rounded-sm"
                                    >
                                        Add to shopping cart
                                    </button>
                                </div>

                                <div className="mt-8 bg-neutral-50 p-4 rounded-sm space-y-2">
                                    <p className="text-xs font-bold uppercase tracking-wider mb-2 text-neutral-400">Specifications</p>
                                    {Object.entries(currentProduct.attributes).map(([key, value]) => (
                                        <div key={key} className="flex justify-between text-xs border-b border-neutral-200/50 pb-1">
                                            <span className="text-neutral-500">{key}</span>
                                            <span className="font-medium text-neutral-800">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'cart' && (
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <h1 className="text-3xl font-black uppercase tracking-tight mb-8">Your Cart</h1>

                        {cart.length === 0 ? (
                            <div className="text-center py-16 bg-white border border-neutral-100 p-8 rounded-sm">
                                <ShoppingBag className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                                <p className="text-sm text-neutral-500 mb-6">Your shopping bag is completely empty</p>
                                <button onClick={() => setCurrentPage('catalog')} className="bg-neutral-900 text-white px-6 py-3 text-xs tracking-widest uppercase font-semibold">
                                    Browse Catalog
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <div className="bg-white border border-neutral-100 divide-y divide-neutral-100 rounded-sm">
                                    {cart.map((item) => (
                                        <div key={item.cartItemId} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <img src={item.mainImage} alt={item.name} className="w-16 h-16 object-cover rounded-sm bg-neutral-50" />
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-neutral-400">{item.brand}</p>
                                                    <h3 className="text-sm font-semibold">{item.name}</h3>
                                                    <div className="flex gap-2 mt-1">
                                                        {Object.entries(item.selectedVariants).map(([k, v]) => (
                                                            <span key={k} className="text-[11px] bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600">
                                                                {k}: {v}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between sm:justify-end gap-8">
                                                <div className="flex items-center border border-neutral-200 bg-neutral-50 rounded-sm">
                                                    <button onClick={() => updateCartQty(item.cartItemId, -1)} className="px-3 py-1 text-sm font-bold text-neutral-500 hover:text-black">-</button>
                                                    <span className="px-2 text-xs font-bold text-neutral-900">{item.quantity}</span>
                                                    <button onClick={() => updateCartQty(item.cartItemId, 1)} className="px-3 py-1 text-sm font-bold text-neutral-500 hover:text-black">+</button>
                                                </div>
                                                <div className="text-right min-w-[70px]">
                                                    <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                                <button onClick={() => updateCartQty(item.cartItemId, -item.quantity)} className="text-neutral-300 hover:text-red-600 transition">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white border border-neutral-100 p-6 rounded-sm ml-auto max-w-sm space-y-4">
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between text-neutral-500"><span>Subtotal</span><span className="font-bold text-neutral-950">${cartTotal.toFixed(2)}</span></div>
                                        <div className="flex justify-between text-neutral-500"><span>Standard Courier Shipping</span><span className="font-bold text-neutral-950">$15.00</span></div>
                                        <div className="border-t border-neutral-100 pt-2 flex justify-between text-sm font-bold text-neutral-900">
                                            <span>Total Amount</span><span>${(cartTotal + 15).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setCurrentPage('checkout')} className="w-full bg-neutral-900 text-white text-xs tracking-widest font-bold uppercase py-4 hover:bg-neutral-800 transition text-center block">
                                        Proceed to secure checkout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {currentPage === 'checkout' && (
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <h1 className="text-3xl font-black uppercase tracking-tight mb-8">Checkout Delivery Details</h1>

                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-7 bg-white border border-neutral-100 p-6 rounded-sm">
                                <form onSubmit={handlePlaceOrder} className="space-y-4">
                                    <h2 className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-2">Shipping Destination</h2>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-600 mb-1">Full Legal Name</label>
                                        <input required type="text" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={checkoutForm.name} onChange={e => setCheckoutForm({ ...checkoutForm, name: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-600 mb-1">Email Address</label>
                                        <input required type="email" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={checkoutForm.email} onChange={e => setCheckoutForm({ ...checkoutForm, email: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-600 mb-1">Street Address</label>
                                        <input required type="text" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={checkoutForm.address} onChange={e => setCheckoutForm({ ...checkoutForm, address: e.target.value })} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-neutral-600 mb-1">City</label>
                                            <input required type="text" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={checkoutForm.city} onChange={e => setCheckoutForm({ ...checkoutForm, city: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-neutral-600 mb-1">ZIP Code</label>
                                            <input required type="text" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={checkoutForm.zip} onChange={e => setCheckoutForm({ ...checkoutForm, zip: e.target.value })} />
                                        </div>
                                    </div>

                                    <h2 className="text-xs uppercase font-bold tracking-wider text-neutral-400 pt-4 mb-2">Payment Details (Demo Simulation)</h2>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-600 mb-1">Card Number</label>
                                        <input required type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={checkoutForm.card} onChange={e => setCheckoutForm({ ...checkoutForm, card: e.target.value })} />
                                    </div>

                                    <button type="submit" className="w-full bg-neutral-900 text-white text-xs tracking-widest font-bold uppercase py-4 hover:bg-neutral-800 transition mt-6">
                                        Authorize & Place Order (${(cartTotal + 15).toFixed(2)})
                                    </button>
                                </form>
                            </div>

                            <div className="md:col-span-5 space-y-4">
                                <div className="bg-white border border-neutral-100 p-4 rounded-sm">
                                    <h3 className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-3">Order Summary</h3>
                                    <div className="divide-y divide-neutral-100 max-h-60 overflow-y-auto pr-2">
                                        {cart.map(item => (
                                            <div key={item.cartItemId} className="py-2 flex justify-between text-xs">
                                                <div>
                                                    <p className="font-medium line-clamp-1">{item.name}</p>
                                                    <p className="text-neutral-400">Qty: {item.quantity}</p>
                                                </div>
                                                <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'success' && (
                    <div className="max-w-md mx-auto px-4 py-20 text-center">
                        <div className="inline-flex p-3 bg-neutral-900 text-white rounded-full mb-4">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-black uppercase tracking-tight mb-2">Order Confirmed</h1>
                        <p className="text-xs text-neutral-500 mb-8">Your allocation was secured successfully. Production tracking metrics have been sent over to your listed email.</p>
                        <div className="space-y-3">
                            <button onClick={() => setCurrentPage('orders')} className="w-full bg-neutral-900 text-white text-xs tracking-widest font-bold uppercase py-3 hover:bg-neutral-800 transition">
                                View My Registered Orders
                            </button>
                            <button onClick={() => setCurrentPage('home')} className="w-full bg-white text-neutral-900 border border-neutral-200 text-xs tracking-widest font-bold uppercase py-3 hover:bg-neutral-50 transition">
                                Return to Homepage
                            </button>
                        </div>
                    </div>
                )}

                {currentPage === 'orders' && (
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <h1 className="text-3xl font-black uppercase tracking-tight mb-8">Your Order Logs</h1>
                        {orders.length === 0 ? (
                            <div className="bg-white border border-neutral-100 p-8 text-center rounded-sm">
                                <p className="text-sm text-neutral-500">No registered purchases found under your current session.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {orders.map(order => (
                                    <div key={order.id} className="bg-white border border-neutral-100 p-6 rounded-sm space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-100 pb-3 gap-2 text-xs">
                                            <div>
                                                <p className="font-bold text-neutral-900">ID: {order.id}</p>
                                                <p className="text-neutral-400">Placed: {order.date}</p>
                                            </div>
                                            <div className="sm:text-right">
                                                <span className="bg-neutral-900 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm">Processing Shipment</span>
                                                <p className="font-black text-sm mt-1">Total Paid: ${order.total.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            {order.items.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-xs">
                                                    <img src={item.mainImage} alt="" className="w-10 h-10 object-cover rounded-sm bg-neutral-50" />
                                                    <div>
                                                        <p className="font-medium">{item.name}</p>
                                                        <p className="text-neutral-400">Quantity: {item.quantity} | Configuration: {Object.values(item.selectedVariants).join(', ')}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {currentPage === 'contact' && (
                    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <h1 className="text-3xl font-black uppercase tracking-tight mb-2">Contact Us</h1>
                        <p className="text-xs text-neutral-400 mb-8">Have structural inquiries regarding custom lots? Reach out directly via the form engine below.</p>

                        {contactSubmitted ? (
                            <div className="bg-neutral-900 text-white p-6 rounded-sm text-center">
                                <p className="text-xs font-bold uppercase tracking-widest mb-1">Message Dispatched</p>
                                <p className="text-xs text-neutral-300">Our concierge support team will address your context within 24 operational hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4 bg-white border border-neutral-100 p-6 rounded-sm">
                                <div>
                                    <label className="block text-xs font-medium text-neutral-600 mb-1">Name</label>
                                    <input required type="text" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-neutral-600 mb-1">Email</label>
                                    <input required type="email" className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-neutral-600 mb-1">Message Context</label>
                                    <textarea required rows={4} className="w-full border border-neutral-200 text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-black" value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} />
                                </div>
                                <button type="submit" className="w-full bg-neutral-900 text-white text-xs tracking-widest font-bold uppercase py-3 hover:bg-neutral-800 transition">
                                    Transmit Message
                                </button>
                            </form>
                        )}
                    </div>
                )}
            </main>

            <footer className="bg-white border-t border-neutral-100 py-12 text-center text-xs text-neutral-400 tracking-wide">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p>© 2026 BR.Zen Studio Engine. Architecture Engineered Clean.</p>
                    <div className="flex gap-6">
                        <button onClick={() => setCurrentPage('home')} className="hover:text-black">Home</button>
                        <button onClick={() => setCurrentPage('catalog')} className="hover:text-black">Catalog</button>
                        <button onClick={() => setCurrentPage('contact')} className="hover:text-black">Contact</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}