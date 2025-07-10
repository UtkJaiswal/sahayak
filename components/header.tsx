"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div> */}
            <img src="/logo2.png" alt="Sahayak Logo" className="w-18 h-10 rounded" />
            <span className="text-xl font-bold text-gray-800">Sahayak</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
              Contact
            </a>
            <Button className="bg-orange-600 hover:bg-orange-700">Try Demo</Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-orange-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
                How It Works
              </a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contact
              </a>
              <Button className="bg-orange-600 hover:bg-orange-700 w-full">Try Demo</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
