import { useState } from "react";
import { Layout, Palette, ArrowLeft, Layers, ExternalLink } from "lucide-react";
import DesignMarketplaceView from "@/components/demo/DesignMarketplaceView";
import GroceryCheckout from "@/components/demo/grocery/GroceryCheckout";
import GrocerySuccess from "@/components/demo/grocery/GrocerySuccess";
import designData from "@/data/designShowcase.json"
export default function DemoHubPage() {
    const [activeTab, setActiveTab] = useState("websites"); // websites | designs
    const [viewState, setViewState] = useState("list"); // list | checkout | success
    const [checkoutItem, setCheckoutItem] = useState(null);
    const [activeOrderId, setActiveOrderId] = useState(null);

    const mockWebsites = [
        { id: "web-01", name: "Ghorer Bazar - Grocery Demo", category: "E-Commerce", slug: "grocery" },
        { id: "web-02", name: "Shubban Book - Library Platform", category: "Education", slug: "book" }
    ];

    const handleDesignCheckout = (design) => {
        setCheckoutItem(design);
        setViewState("checkout");
    };

    const handleOrderSuccess = (orderId) => {
        setActiveOrderId(orderId);
        setViewState("success");
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
            <div className="min-h-screen bg-slate-950 py-10 px-4">
                <div className="max-w-3xl mx-auto">
                    <GroceryCheckout
                        cart={pseudoCart}
                        cartTotal={checkoutItem.price}
                        currency="BDT"
                        onBack={() => setViewState("list")}
                        onOrderSuccess={handleOrderSuccess}
                    />
                </div>
            </div>
        );
    }

    if (viewState === "success" && checkoutItem) {
        return (
            <GrocerySuccess
                orderId={activeOrderId}
                orderTotal={checkoutItem.price}
                currency="BDT"
                onClose={() => { setCheckoutItem(null); setViewState("list"); }}
            />
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 space-y-8">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-900 pb-6">
                    <div>
                        <h1 className="text-xl font-black text-white flex items-center gap-2">
                            <Layers className="text-purple-500" size={20} /> মার্চেন্ট প্রোডাক্ট পোর্টফোলিও
                        </h1>
                        <p className="text-xs text-slate-400 mt-0.5">লাইভ ওয়েবসাইট ডেমো এবং প্রিমিয়াম রেডিমেড কোড টেমপ্লেট স্টোর</p>
                    </div>

                    <div className="flex bg-slate-900 p-1 rounded-xl text-xs font-bold border border-slate-800 w-fit">
                        <button
                            onClick={() => setActiveTab("websites")}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${activeTab === "websites" ? "bg-purple-600 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
                        >
                            <Layout size={14} /> ডেমো ওয়েবসাইটস
                        </button>
                        <button
                            onClick={() => setActiveTab("designs")}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${activeTab === "designs" ? "bg-purple-600 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
                        >
                            <Palette size={14} /> ডিজাইন সোর্স কোড ({designData.designs.length})
                        </button>
                    </div>
                </div>

                {activeTab === "websites" ? (
                    <div className="grid sm:grid-cols-2 gap-6 pt-2">
                        {mockWebsites.map((web) => (
                            <div key={web.id} className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all">
                                <div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{web.category}</span>
                                    <h3 className="text-sm font-bold text-white mt-0.5">{web.name}</h3>
                                </div>
                                <a
                                    href={`/demo/${web.slug}`}
                                    className="w-fit flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    লাইভ ডেমো দেখুন <ExternalLink size={12} />
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="pt-2 animate-in fade-in duration-200">
                        <DesignMarketplaceView onSelectDesignCheckout={handleDesignCheckout} />
                    </div>
                )}

            </div>
        </div>
    );
}