import { useState } from "react";
import { Eye, ShoppingCart, LayoutGrid, Check, Sparkles, ArrowLeft } from "lucide-react";
import DesignDetailModal from "@/components/demo/design/DesignDetailModal";
import GroceryCheckout from "@/components/demo/grocery/GroceryCheckout";
import GrocerySuccess from "@/components/demo/grocery/GrocerySuccess";
import designData from "@/data/designShowcase.json";

export default function DesignShowcasePage() {
  const [viewState, setViewState] = useState("grid");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState(null);
  const [activeOrderId, setActiveOrderId] = useState(null);

  const { sectionTitle, sectionTagline, currency, designs } = designData;

  const handleInitiateCheckout = (design) => {
    setCheckoutItem(design);
    setViewState("checkout");
  };

  const handleOrderSuccess = (orderId) => {
    setActiveOrderId(orderId);
    setViewState("success");
  };

  const handleCloseSuccess = () => {
    setCheckoutItem(null);
    setActiveOrderId(null);
    setViewState("grid");
  };

  if (viewState === "checkout" && checkoutItem) {
    const pseudoCart = [{
      id: checkoutItem.id,
      name: checkoutItem.title,
      price: checkoutItem.price,
      weight: checkoutItem.tier,
      quantity: 1,
      image: checkoutItem.previewImage
    }];

    return (
      <GroceryCheckout
        cart={pseudoCart}
        cartTotal={checkoutItem.price}
        currency={currency}
        onBack={() => setViewState("grid")}
        onOrderSuccess={handleOrderSuccess}
      />
    );
  }

  if (viewState === "success" && checkoutItem) {
    return (
      <GrocerySuccess
        orderId={activeOrderId}
        orderTotal={checkoutItem.price}
        currency={currency}
        onClose={handleCloseSuccess}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-purple-600 selection:text-white pb-20">
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-purple-600 text-white font-black text-xs p-1.5 rounded-lg tracking-wider">DEV</span>
            <h1 className="text-xs font-black uppercase tracking-widest text-white">Portfolio Store</h1>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
            <Sparkles size={12} className="text-purple-400" /> Commercial Dashboard Active
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center space-y-3">
        <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white leading-tight max-w-xl mx-auto">
          {sectionTitle}
        </h2>
        <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
          {sectionTagline}
        </p>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div key={design.id} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col hover:border-purple-500/40 transition-all group relative">
              
              <div className="aspect-[16/10] bg-slate-950 overflow-hidden relative">
                <img src={design.previewImage} alt={design.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button 
                    onClick={() => setSelectedDesign(design)}
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl shadow-xl text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <Eye size={14} /> Quick View
                  </button>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                      {design.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">{design.tier}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white tracking-tight line-clamp-1 group-hover:text-purple-400 transition-colors">
                    {design.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 line-through font-medium">{design.originalPrice} {currency}</span>
                    <span className="text-sm font-black text-white">{design.price} {currency}</span>
                  </div>
                  <button 
                    onClick={() => handleInitiateCheckout(design)}
                    className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-xl text-xs font-black shadow-md shadow-purple-900/10 transition-all active:scale-97"
                  >
                    <ShoppingCart size={13} /> Buy Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>

      <DesignDetailModal
        design={selectedDesign}
        onClose={() => setSelectedDesign(null)}
        onSelectPurchase={handleInitiateCheckout}
        currency={currency}
      />
    </div>
  );
}