import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home'
import DemoPage from '@/pages/DemoPage'
import AppProvider from '@/lib/AppProvider'
import NotFound from '@/pages/NotFound'
import { AnimatePresence } from 'motion/react'

export const uid = () => 'b' + Date.now() + Math.random().toString(36).slice(2, 9)

export default function App() {
  return (
    <AppProvider>
      <AnimatePresence>
        <BrowserRouter>
          <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <main>
              <Routes>
                {/* Main App Routes (Shows Header/Footer) */}
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                </Route>

                {/* Demo Routes (No Main Header/Footer) */}
                <Route path="demo" element={<DemoPage />} />
                <Route path="demo/:slug" element={<DemoPage />} />

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