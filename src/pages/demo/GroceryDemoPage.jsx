import { useState, useMemo } from "react";
import { Star, ShoppingCart, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import GroceryHeader from "@/components/demo/grocery/GroceryHeader";
import GroceryCart from "@/components/demo/grocery/GroceryCart";
import GroceryCheckout from "@/components/demo/grocery/GroceryCheckout";
import GrocerySuccess from "@/components/demo/grocery/GrocerySuccess";
import GroceryCoupon from "@/components/demo/grocery/GroceryCoupon";
import ProductQuickView from "@/components/demo/grocery/ProductQuickView";
import groceryData from "@/data/ghorerBazar.json";

export default function GroceryDemoPage() {
  const [viewState, setViewState] = useState("shop");
  const [activeOrderId, setActiveOrderId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState(null);

  const { storeName, currency, hotline, email, tagline, categories, products } = groceryData;

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id);
      if (exist) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, amount) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  const finalTotal = useMemo(() => {
    const discountAmount = (cartTotal * discountPercentage) / 100;
    return cartTotal - discountAmount;
  }, [cartTotal, discountPercentage]);

  const totalItemsCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const handleOrderCompletion = (orderId) => {
    setActiveOrderId(orderId);
    setViewState("success");
  };

  const handleCloseSuccess = () => {
    setCart([]);
    setDiscountPercentage(0);
    setViewState("shop");
    setActiveOrderId(null);
  };

  if (viewState === "checkout") {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row gap-8 items-start max-w-5xl mx-auto px-4 py-10">
        <div className="w-full md:w-7/12 space-y-6">
          <GroceryCheckout
            cart={cart}
            cartTotal={finalTotal}
            currency={currency}
            onBack={() => setViewState("shop")}
            onOrderSuccess={handleOrderCompletion}
          />
        </div>
        <div className="w-full md:w-5/12 sticky top-28">
          <GroceryCoupon
            onApplyCoupon={(percentage) => setDiscountPercentage(percentage)}
            currency={currency}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
      <GroceryHeader
        storeName={storeName}
        hotline={hotline}
        email={email}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalItemsCount={totalItemsCount}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <section className="bg-gradient-to-br from-emerald-950 to-teal-900 text-white py-14 px-6 text-center space-y-3">
        <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-tight">সুস্থ জীবনের জন্য আমাদের খাঁটি ও অর্গানিক খাদ্যপণ্য</h2>
        <p className="text-xs text-emerald-200/80 max-w-xl mx-auto leading-relaxed">{tagline}</p>
      </section>

      <section className="py-6 bg-white border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-900">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50"><ShieldCheck className="text-emerald-800" size={18} /> শতভাগ খাঁটি পণ্য</div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50"><Truck className="text-emerald-800" size={18} /> দ্রুত হোম ডেলিভারি</div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50"><RefreshCw className="text-emerald-800" size={18} /> হ্যাপি রিটার্ন পলিসি</div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 flex flex-row md:flex-col overflow-x-auto gap-1.5 pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-left px-4 py-2 rounded-xl text-xs font-bold border whitespace-nowrap transition-all ${selectedCategory === cat.id ? "bg-emerald-800 border-emerald-700 text-white" : "bg-white border-slate-200 text-slate-600"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </aside>

        <section className="md:col-span-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all relative group">
                <div
                  onClick={() => setActiveQuickViewProduct(product)}
                  className="aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-103" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">{product.weight}</span>
                    <h4
                      onClick={() => setActiveQuickViewProduct(product)}
                      className="text-xs font-bold text-slate-900 line-clamp-2 min-h-[32px] cursor-pointer hover:text-emerald-800 transition-colors"
                    >
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-1 text-amber-500 text-[10px] font-bold"><Star size={10} fill="currentColor" /> {product.rating}</div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-sm font-black text-slate-900">{product.price} {currency}</span>
                    <button onClick={() => addToCart(product)} className="p-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 transition-all"><ShoppingCart size={14} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <GroceryCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
        totalItemsCount={totalItemsCount}
        currency={currency}
        onCheckout={() => {
          setIsCartOpen(false);
          setViewState("checkout");
        }}
      />

      <ProductQuickView
        product={activeQuickViewProduct}
        onClose={() => setActiveQuickViewProduct(null)}
        onAddToCart={addToCart}
        currency={currency}
      />

      {viewState === "success" && (
        <GrocerySuccess
          orderId={activeOrderId}
          orderTotal={finalTotal}
          currency={currency}
          onClose={handleCloseSuccess}
        />
      )}
    </div>
  );
}