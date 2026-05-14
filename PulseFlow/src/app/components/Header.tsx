import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-[#1E293B]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/50">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold text-white">PulseFlow</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors font-medium">
              Benefícios
            </a>
            <a href="#funcionalidades" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors font-medium">
              Funcionalidades
            </a>
            <a href="#precos" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors font-medium">
              Preços
            </a>
            <a href="#faq" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors font-medium">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-white hover:text-[#A78BFA] transition-colors font-semibold">
              Entrar
            </button>
            <button className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white px-6 py-2 rounded-lg hover:from-[#6D28D9] hover:to-[#7C3AED] transition-all shadow-lg shadow-[#7C3AED]/50 font-semibold">
              Começar grátis
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-[#1E293B]"
          >
            <nav className="flex flex-col gap-4">
              <a href="#beneficios" className="text-white hover:text-[#7C3AED] transition-colors font-medium">
                Benefícios
              </a>
              <a href="#funcionalidades" className="text-white hover:text-[#7C3AED] transition-colors font-medium">
                Funcionalidades
              </a>
              <a href="#precos" className="text-white hover:text-[#7C3AED] transition-colors font-medium">
                Preços
              </a>
              <a href="#faq" className="text-white hover:text-[#7C3AED] transition-colors font-medium">
                FAQ
              </a>
              <button className="text-left text-white hover:text-[#A78BFA] transition-colors font-semibold">
                Entrar
              </button>
              <button className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white px-6 py-2 rounded-lg hover:from-[#6D28D9] hover:to-[#7C3AED] transition-all w-full font-semibold shadow-lg">
                Começar grátis
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
