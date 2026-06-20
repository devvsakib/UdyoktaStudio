import { Suspense } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Home as HomeIcon, ArrowLeft, LayoutGrid } from 'lucide-react'
import DemoStoreTemplate from '@/components/DemoStoreTemplate'

// ডাইনামিক রেজিস্ট্রি এবং স্ট্যান্ডার্ড ডেমো ডাটা ইম্পোর্ট করুন
import { demoComponents, allDemos } from '@/data/demoRegistry'
import fashionData from '@/data/fashion.json'
import cosmeticsData from '@/data/cosmetics.json'
import gadgetsData from '@/data/gadgets.json'

const standardStoreData = {
  fashion: fashionData,
  cosmetics: cosmeticsData,
  gadgets: gadgetsData
}

export default function DemoPage() {
  const { slug } = useParams()

  const FloatingNavigationDock = (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-1 p-1.5 bg-slate-900/90 border border-white/10 rounded-full shadow-2xl backdrop-blur-md">
      <Link
        to="/"
        className="p-3 bg-transparent hover:bg-white/5 text-slate-400 hover:text-white rounded-full transition-all group flex items-center justify-center"
        title="Go to Home"
      >
        <HomeIcon size={16} className="group-hover:scale-105 transition-transform" />
      </Link>

      <div className="w-px h-4 bg-white/10 mx-0.5" />

      <Link
        to="/demo"
        className={`p-3 rounded-full transition-all group flex items-center justify-center ${!slug
            ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
            : "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white"
          }`}
        title="Go to Demo Showcase"
      >
        <LayoutGrid size={16} className="group-hover:scale-105 transition-transform" />
      </Link>

    </div>
  )
  
  if (!slug) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-6">
        {FloatingNavigationDock}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 block mb-2">
              Explore Templates
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Our Live Demo Showcases
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allDemos.map((demo) => (
              <div key={demo.slug} className="flex flex-col bg-slate-900/40 border border-white/5 rounded-xl p-5">
                <div className="grow">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                    {demo.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{demo.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{demo.desc}</p>
                </div>
                <Link to={`/demo/${demo.slug}`} className="w-full text-center px-4 py-2.5 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-lg block">
                  Launch Live Preview
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const CustomComponent = demoComponents[slug]
  if (CustomComponent) {
    return (
      <div className="relative">
        {FloatingNavigationDock}
        {/* lazy loading এর কারণে ফাইল ডাউনলোড হওয়ার সময় Loading... টেক্সটটি দেখাবে */}
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-xs">Loading Live Preview...</div>}>
          <CustomComponent />
        </Suspense>
      </div>
    )
  }

  // ৩. স্ট্যান্ডার্ড ই-কমার্স টেমপ্লেট ফলব্যাক (যেমন: fashion, cosmetics, gadgets)
  const currentStoreData = standardStoreData[slug]
  if (currentStoreData) {
    return (
      <div className="relative">
        {FloatingNavigationDock}
        <DemoStoreTemplate storeData={currentStoreData} />
      </div>
    )
  }

  // ৪. যদি কোনো কিছুর সাথেই ম্যাচ না করে
  return <Navigate to="/demo" replace />
}