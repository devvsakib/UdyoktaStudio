import React, { useState, useMemo } from 'react';
import {
    ShoppingBag,
    X,
    CheckCircle,
    Heart,
    ArrowRight,
    Plus,
    Minus,
    Trash2,
    ChevronDown,
    ExternalLink,
    Package,
    CreditCard
} from 'lucide-react';

// Specialized Curated Pinterest/Unsplash Image Dataset for High-End Home Decor & Goods
const PRODUCT_DATA = [
    { id: 1, name: "Minimalist Ceramic Ribbed Vase", price: 46, category: "Ceramics", aspect: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=500&auto=format&fit=crop" },
    { id: 2, name: "Natural Woven Trapeze Pendant Light", price: 185, category: "Lighting", aspect: "aspect-[3/5]", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500&auto=format&fit=crop" },
    { id: 3, name: "Organic Soy Wax Candle Blend", price: 24, category: "Wellness", aspect: "aspect-[1/1]", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=500&auto=format&fit=crop" },
    { id: 4, name: "Brushed Bouclé Accent Lounge Chair", price: 420, category: "Furniture", aspect: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500&auto=format&fit=crop" },
    { id: 5, name: "Hand-Thrown Speckled Espresso Set", price: 38, category: "Ceramics", aspect: "aspect-[3/5]", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop" },
    { id: 6, name: "Neutral Abstract Linocut Art Print", price: 65, category: "Art", aspect: "aspect-[1/1]", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=500&auto=format&fit=crop" },
    { id: 7, name: "Solid Smoked Oak Arch Mirror", price: 290, category: "Furniture", aspect: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=500&auto=format&fit=crop" },
    { id: 8, name: "Premium Flax Linen Throw Quilt", price: 145, category: "Textiles", aspect: "aspect-[3/5]", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=500&auto=format&fit=crop" }
];

export default function AuraDecoEcommerce() {
    // Application View States: 'shop' | 'checkout' | 'success' | 'orders'
    const [viewMode, setViewMode] = useState('shop');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [inspectedProduct, setInspectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    // Form input states
    const [shippingForm, setShippingForm] = useState({
        name: '', email: '', address: '', city: '', zip: '', cardNumber: '4111 2222 3333 4444', expiry: '12/28', cvc: '382'
    });

    // Derived Values
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return PRODUCT_DATA;
        return PRODUCT_DATA.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const cartTotal = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cart]);

    const cartCount = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }, [cart]);

    // Cart Operations
    const addToCart = (product) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, delta) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === id) {
                const nextQty = item.quantity + delta;
                return nextQty > 0 ? { ...item, quantity: nextQty } : item;
            }
            return item;
        }));
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]);
    };

    // Checkout/Order submission 
    const handleCheckoutSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) return;

        const newOrder = {
            orderId: `AURA-${Math.floor(100000 + Math.random() * 900000)}`,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            items: [...cart],
            total: cartTotal + 15, // Including fixed shipping
            shipping: shippingForm
        };

        setOrders([newOrder, ...orders]);
        setCart([]);
        setViewMode('success');
    };

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#222222] font-sans antialiased">

            {/* HEADER NAVIGATION */}
            <header className="sticky top-0 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-black/5 z-40 px-4 py-4 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <button onClick={() => setViewMode('shop')} className="text-xl font-black tracking-widest text-black">
                            AURA<span className="text-[#C5A880]">.</span>
                        </button>
                        <nav className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-neutral-500">
                            <button onClick={() => { setViewMode('shop'); setSelectedCategory('All'); }} className={viewMode === 'shop' && selectedCategory === 'All' ? 'text-black' : 'hover:text-black'}>Shop</button>
                            <button onClick={() => setViewMode('orders')} className={viewMode === 'orders' ? 'text-black' : 'hover:text-black'}>Track Orders ({orders.length})</button>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setCartOpen(true)}
                            className="bg-black text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 hover:bg-neutral-800 transition shadow-sm"
                        >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Cart ({cartCount})</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* --- RENDER VIEW: SHOP MATRIX --- */}
            {viewMode === 'shop' && (
                <main className="max-w-7xl mx-auto px-4 py-8 lg:px-8">

                    {/* Pinterest Pill Categories Selector */}
                    <div className="flex items-center space-x-2 overflow-x-auto pb-6 scrollbar-none">
                        {['All', 'Ceramics', 'Furniture', 'Lighting', 'Wellness', 'Art'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-black text-white' : 'bg-black/5 text-neutral-700 hover:bg-black/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Fluid Structural Pinterest Masonry Grid */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="break-inside-avoid bg-white rounded-2xl border border-black/5 overflow-hidden group relative shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Visual Image container box trigger */}
                                <div
                                    className={`w-full relative cursor-zoom-in overflow-hidden ${product.aspect} bg-neutral-100`}
                                    onClick={() => setInspectedProduct(product)}
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                                    />
                                    {/* Absolute Pin Overlays */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
                                        <div className="flex justify-end">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
                                                className={`p-2.5 rounded-full ${favorites.includes(product.id) ? 'bg-rose-500 text-white' : 'bg-white text-black hover:scale-105'} shadow transition`}
                                            >
                                                <Heart className="w-4 h-4 fill-current" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                            className="w-full bg-white text-black py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:bg-neutral-100 transition transform translate-y-2 group-hover:translate-y-0 duration-300"
                                        >
                                            Quick Add to Bag
                                        </button>
                                    </div>
                                </div>

                                {/* Plain Text Description info block underneath */}
                                <div className="p-4 space-y-1">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880]">{product.category}</span>
                                    <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight leading-snug">{product.name}</h3>
                                    <p className="text-xs sm:text-sm font-bold text-neutral-800">${product.price}.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            )}

            {/* --- RENDER VIEW: CHECKOUT INTERFACE --- */}
            {viewMode === 'checkout' && (
                <main className="max-w-4xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                        {/* Form Fields Inputs column layout */}
                        <form onSubmit={handleCheckoutSubmit} className="md:col-span-7 bg-white border border-black/5 rounded-3xl p-6 space-y-6 shadow-sm">
                            <h2 className="text-lg font-bold uppercase tracking-wider border-b border-neutral-100 pb-3 flex items-center space-x-2">
                                <CreditCard className="w-4 h-4 text-[#C5A880]" />
                                <span>Secure Checkout Express</span>
                            </h2>

                            <div className="space-y-4">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">1. Shipping Logistics</h3>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-neutral-500">Recipient Name</label>
                                    <input type="text" required placeholder="E.g., Jane Doe" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-sm focus:outline-none focus:border-black" value={shippingForm.name} onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-neutral-500">Email Address</label>
                                    <input type="email" required placeholder="jane@example.com" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-sm focus:outline-none focus:border-black" value={shippingForm.email} onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-neutral-500">Street Address</label>
                                    <input type="text" required placeholder="128 Neutral Avenue" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-sm focus:outline-none focus:border-black" value={shippingForm.address} onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })} />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-neutral-500">City</label>
                                        <input type="text" required placeholder="New York" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-sm focus:outline-none focus:border-black" value={shippingForm.city} onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-neutral-500">Zip Code</label>
                                        <input type="text" required placeholder="10001" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-sm focus:outline-none focus:border-black" value={shippingForm.zip} onChange={(e) => setShippingForm({ ...shippingForm, zip: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-2">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">2. Transaction Routing Layer</h3>
                                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-xs space-y-3">
                                    <div className="flex items-center space-x-2 text-emerald-600 font-semibold mb-1">
                                        <CheckCircle className="w-4 h-4 fill-emerald-500 text-white" />
                                        <span>Demo Sandbox Processing Mode Enabled</span>
                                    </div>
                                    <p className="text-neutral-500">System parameters will record payment logic directly to active state without shifting financial records.</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition shadow"
                            >
                                Authorize Payment & Submit Order
                            </button>
                        </form>

                        {/* Sticky Pricing Summary Side panel widget */}
                        <div className="md:col-span-5 bg-[#EFECE6] border border-black/5 rounded-3xl p-6 space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Invoice Ledger Breakdown</h3>
                            <div className="divide-y divide-black/5 max-h-[220px] overflow-y-auto pr-2">
                                {cart.map((item) => (
                                    <div key={item.id} className="py-2.5 flex justify-between items-center text-xs">
                                        <div>
                                            <p className="font-bold text-neutral-900">{item.name}</p>
                                            <p className="text-neutral-500">Qty: {item.quantity}</p>
                                        </div>
                                        <span className="font-bold">${item.price * item.quantity}.00</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-black/10 pt-4 space-y-2 text-xs">
                                <div className="flex justify-between text-neutral-600">
                                    <span>Subtotal Matrix</span>
                                    <span>${cartTotal}.00</span>
                                </div>
                                <div className="flex justify-between text-neutral-600">
                                    <span>Standard Flat Courier</span>
                                    <span>$15.00</span>
                                </div>
                                <div className="flex justify-between text-base font-black text-neutral-900 pt-2 border-t border-black/5">
                                    <span>Aggregate Total</span>
                                    <span>${cartTotal + 15}.00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            )}

            {/* --- RENDER VIEW: SUCCESS SUMMARY OUTCOME --- */}
            {viewMode === 'success' && (
                <main className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                        <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-light tracking-tight text-neutral-900">Transaction Authorized Successfully</h1>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Your fulfillment sequence has launched inside our central logistics network. A real-time tracking payload index is recorded inside your tracking ledger view state.
                        </p>
                    </div>
                    <div className="pt-4 flex flex-col gap-2">
                        <button onClick={() => setViewMode('orders')} className="bg-black text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition">
                            Inspect Active Orders Log
                        </button>
                        <button onClick={() => setViewMode('shop')} className="border border-neutral-300 bg-white text-neutral-700 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-50 transition">
                            Return to Catalog Matrix
                        </button>
                    </div>
                </main>
            )}

            {/* --- RENDER VIEW: ACCOUNT RECOGNIZED ORDERS --- */}
            {viewMode === 'orders' && (
                <main className="max-w-3xl mx-auto px-4 py-12 space-y-6">
                    <div>
                        <h1 className="text-2xl font-light tracking-tight text-neutral-900">Your Active Ledger Records</h1>
                        <p className="text-xs text-neutral-400 mt-0.5">Real-time state tracking modules for active shipments.</p>
                    </div>

                    {orders.length === 0 ? (
                        <div className="bg-white border border-black/5 rounded-3xl p-12 text-center space-y-4">
                            <Package className="w-12 h-12 text-neutral-300 mx-auto" />
                            <p className="text-xs sm:text-sm text-neutral-500 font-medium">No order data indexes recognized across current active runtime states.</p>
                            <button onClick={() => setViewMode('shop')} className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                Source Products Now
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {orders.map((order, idx) => (
                                <div key={idx} className="bg-white border border-black/5 rounded-2xl p-6 space-y-4 shadow-sm">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-100 pb-3 gap-2">
                                        <div>
                                            <p className="text-xs font-bold text-neutral-900 uppercase tracking-wide">{order.orderId}</p>
                                            <p className="text-[10px] text-neutral-400">{order.date}</p>
                                        </div>
                                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md self-start sm:self-center">
                                            Awaiting Courier Dispatch
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        {order.items.map((item, iIdx) => (
                                            <div key={iIdx} className="flex justify-between items-center text-xs">
                                                <span className="text-neutral-700">{item.name} <span className="text-neutral-400 font-bold">x{item.quantity}</span></span>
                                                <span className="font-bold text-neutral-900">${item.price * item.quantity}.00</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-neutral-100 pt-3 flex justify-between items-center text-xs">
                                        <span className="text-neutral-400">Shipped Destination: <strong className="text-neutral-700 font-medium">{order.shipping.city}, {order.shipping.zip}</strong></span>
                                        <span className="text-sm font-black text-neutral-900">Total Charged: ${order.total}.00</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            )}

            {/* --- SIDE SLIDEOVER BAR: SHOPPING CART MANAGEMENT LINK --- */}
            {cartOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setCartOpen(false)} />
                    <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
                        <div className="w-screen max-w-md bg-white p-6 flex flex-col justify-between shadow-2xl">

                            <div className="space-y-6 overflow-y-auto pr-1">
                                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900">Active Shopping Basket</h2>
                                    <button onClick={() => setCartOpen(false)} className="p-1 text-neutral-400 hover:text-neutral-900">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {cart.length === 0 ? (
                                    <div className="py-20 text-center space-y-3">
                                        <ShoppingBag className="w-8 h-8 text-neutral-300 mx-auto" />
                                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Your bag contains zero variables</p>
                                    </div>
                                ) : (
                                    <div className="divide-y divide-neutral-100">
                                        {cart.map((item) => (
                                            <div key={item.id} className="py-4 flex space-x-4">
                                                <div className="w-16 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <h4 className="text-xs font-bold text-neutral-900 leading-tight">{item.name}</h4>
                                                    <p className="text-xs text-neutral-500 font-bold">${item.price}.00</p>

                                                    {/* Counter adjust logic blocks */}
                                                    <div className="flex items-center justify-between pt-1">
                                                        <div className="flex items-center space-x-2 border border-neutral-200 rounded-md p-1 bg-neutral-50">
                                                            <button onClick={() => updateQuantity(item.id, -1)} className="p-0.5 text-neutral-500 hover:text-black"><Minus className="w-3 h-3" /></button>
                                                            <span className="text-xs font-bold px-1">{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.id, 1)} className="p-0.5 text-neutral-500 hover:text-black"><Plus className="w-3 h-3" /></button>
                                                        </div>
                                                        <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-rose-500 transition">
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Total calculations footer section inside the panel slide */}
                            {cart.length > 0 && (
                                <div className="border-t border-neutral-100 pt-4 space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Subtotal Invoice</span>
                                        <span className="text-xl font-black text-neutral-900">${cartTotal}.00</span>
                                    </div>
                                    <button
                                        onClick={() => { setCartOpen(false); setViewMode('checkout'); }}
                                        className="w-full bg-black text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition flex items-center justify-center space-x-2"
                                    >
                                        <span>Route To Checkout Terminal</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}

            {/* --- DETAILED MODAL DRILL DOWN DISPLAY: PINTEREST ZOOM INSPECTOR --- */}
            {inspectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={() => setInspectedProduct(null)} />

                    <div className="bg-[#FAF9F6] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 md:grid-cols-12 relative z-10 animate-scale-in max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">

                        <button
                            onClick={() => setInspectedProduct(null)}
                            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-black/5 text-neutral-700 hover:text-black z-20"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Left Image Column */}
                        <div className="md:col-span-6 bg-neutral-100 h-[320px] md:h-[480px]">
                            <img src={inspectedProduct.img} alt={inspectedProduct.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Right Information Columns Configurator */}
                        <div className="md:col-span-6 p-6 lg:p-8 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2.5 py-1 rounded">
                                    {inspectedProduct.category} Catalog Index
                                </span>
                                <h2 className="text-xl lg:text-2xl font-light text-neutral-900 tracking-tight leading-tight">
                                    {inspectedProduct.name}
                                </h2>
                                <p className="text-xl font-bold text-neutral-800">${inspectedProduct.price}.00</p>
                                <div className="w-full h-[1px] bg-neutral-200" />

                                <p className="text-xs text-neutral-500 leading-relaxed">
                                    Crafted carefully by master artisans using premium structural metrics. Completely clean materials sourced directly to maintain premium longevity frameworks.
                                </p>
                            </div>

                            <div className="space-y-3 pt-4">
                                <button
                                    onClick={() => { addToCart(inspectedProduct); setInspectedProduct(null); setCartOpen(true); }}
                                    className="w-full bg-black text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition shadow"
                                >
                                    Allocate Asset to Cart
                                </button>
                                <div className="text-center">
                                    <button
                                        onClick={() => { toggleFavorite(inspectedProduct.id); }}
                                        className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black inline-flex items-center space-x-1"
                                    >
                                        <Heart className={`w-3.5 h-3.5 ${favorites.includes(inspectedProduct.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                                        <span>{favorites.includes(inspectedProduct.id) ? 'Saved in Pins Collection' : 'Pin to Inspiration Board'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}