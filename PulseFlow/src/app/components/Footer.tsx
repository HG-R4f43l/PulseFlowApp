import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#1E293B] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold">PulseFlow</span>
            </div>
            <p className="text-[#CBD5E1] text-sm">
              Organize seu dia sem perder tempo planejando.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Atualizações</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Central de ajuda</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">API</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#CBD5E1]">
            © 2026 PulseFlow. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#CBD5E1] hover:text-[#7C3AED] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
