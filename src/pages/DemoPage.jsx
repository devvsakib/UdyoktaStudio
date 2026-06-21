import { useState, useMemo } from 'react'
import { Suspense } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Home as HomeIcon, ArrowLeft, LayoutGrid, Sparkles, Filter, Eye } from 'lucide-react'
import DemoStoreTemplate from '@/components/DemoStoreTemplate'

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
  
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const list = new Set(allDemos.map(demo => demo.category))
    return ['All', ...Array.from(list)]
  }, [])

  const filteredDemos = useMemo(() => {
    if (selectedCategory === 'All') return allDemos
    return allDemos.filter(demo => demo.category === selectedCategory)
  }, [selectedCategory])

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
      <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 selection:bg-purple-500/30 pt-24">
        {FloatingNavigationDock}
        
        {/* IMPROVED HERO & HEADER SECTION */}
        <header className="relative overflow-hidden border-b border-slate-900 bg-slate-950/40 backdrop-blur-md pt-20 pb-16">
          {/* Background Ambient Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4">
              <Sparkles size={12} /> Commercial Architecture
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 max-w-2xl mx-auto leading-[1.15]">
              Experience Our Production <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-200 to-white">Live Demo Showcases</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Explore high-performance UI templates crafted with headless logic, component-driven states, and ultra-fluid layout configurations.
            </p>
          </div>
        </header>

        {/* CONTROLS & FILTER SECTION */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-6 mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Filter size={14} className="text-purple-400" /> Filter by Blueprint
            </div>
            
            {/* Category Pills Slider */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/20"
                      : "bg-slate-900/60 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC SKELETON GRIDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDemos.map((demo) => (
              <div 
                key={demo.slug} 
                className="group flex flex-col bg-slate-900/20 hover:bg-slate-900/40 border border-white/5 hover:border-purple-500/20 rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="grow">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-2">
                    {demo.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {demo.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {demo.desc}
                  </p>
                </div>
                
                <Link 
                  to={`/demo/${demo.slug}`} 
                  className="w-full text-center px-4 py-3 bg-white/5 group-hover:bg-purple-600 border border-white/10 group-hover:border-purple-500 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Eye size={13} /> Launch Live Preview
                </Link>
              </div>
            ))}
          </div>

          {/* EMPTY FILTER STATE */}
          {filteredDemos.length === 0 && (
            <div className="text-center py-16 bg-slate-900/10 border border-dashed border-white/5 rounded-xl">
              <p className="text-sm text-slate-500">No active demos available inside this specification.</p>
            </div>
          )}
        </section>
      </div>
    )
  }

  const CustomComponent = demoComponents[slug]
  if (CustomComponent) {
    return (
      <div className="relative">
        {FloatingNavigationDock}
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-xs tracking-widest uppercase">Loading Live Preview...</div>}>
          <CustomComponent />
        </Suspense>
      </div>
    )
  }

  const currentStoreData = standardStoreData[slug]
  if (currentStoreData) {
    return (
      <div className="relative">
        {FloatingNavigationDock}
        <DemoStoreTemplate storeData={currentStoreData} />
      </div>
    )
  }

  return <Navigate to="/demo" replace />
}