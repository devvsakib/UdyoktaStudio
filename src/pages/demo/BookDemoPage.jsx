import { useState } from "react";
import BookNavbar from "@/components/demo/book/BookNavbar";
import BookHero from "@/components/demo/book/BookHero";
import BookFeatures from "@/components/demo/book/BookFeatures";
import BookChapters from "@/components/demo/book/BookChapters";
import bookData from "@/data/book.json";

export default function BookDemoPage() {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount((prev) => prev + 1);
    };

    const { storeName, currency, hero, product, features } = bookData;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
            <BookNavbar
                storeName={storeName}
                cartCount={cartCount}
                onBuyClick={handleAddToCart}
            />

            <BookHero
                hero={hero}
                product={product}
                currency={currency}
                onBuyClick={handleAddToCart}
            />

            <BookFeatures features={features} />

            <BookChapters chapters={product.chapters} />

            <footer className="py-8 text-center text-xs text-slate-600 border-t border-white/5 bg-slate-950">
                &copy; {new Date().getFullYear()} {storeName}. Powered by UdyoktaStudio.
            </footer>
        </div>
    );
}