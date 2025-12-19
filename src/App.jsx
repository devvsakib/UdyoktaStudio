import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home'
import FashionDemo from '@/pages/demo/FashionDemo'
import CosmeticsDemo from '@/pages/demo/CosmeticsDemo'
import GadgetsDemo from '@/pages/demo/GadgetsDemo'
import HoneySeed from '@/pages/demo/HoneySeed'
import AppProvider from '@/lib/AppProvider'
import NotFound from '@/pages/NotFound'
import DemoPage from '@/pages/DemoPage'
import { AnimatePresence } from 'motion/react'

export const uid = () => 'b' + Date.now() + Math.random().toString(36).slice(2, 9)

// Main App Component
export default function App() {

  return (
    <AppProvider>
      <AnimatePresence>
        <BrowserRouter>
          <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <main>
              <Routes>
                {/* UdyoktaStudio App Routes */}
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="demo" element={<DemoPage />} />
                  <Route path="demo/fashion" element={<FashionDemo />} />
                  <Route path="demo/cosmetics" element={<CosmeticsDemo />} />
                  <Route path="demo/gadgets" element={<GadgetsDemo />} />
                  <Route path="demo/honeyseed" element={<HoneySeed />} />
                </Route>

                {/* 404 Not Found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    </AppProvider>
  )
}
