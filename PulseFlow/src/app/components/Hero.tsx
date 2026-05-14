import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 px-4 py-2 w-fit backdrop-blur-sm">
              <span className="text-sm text-[#A78BFA] font-medium">✨ Grátis por 7 dias</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Sua produtividade no automático.
            </h1>

            <p className="text-lg md:text-xl text-[#CBD5E1] max-w-xl font-medium">
              Organize tarefas, estudos e metas em um único lugar com ajuda de IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] px-8 py-4 text-white font-semibold hover:from-[#6D28D9] hover:to-[#5B21B6] transition-all shadow-lg shadow-[#7C3AED]/50 hover:shadow-[#7C3AED]/70 hover:scale-105">
                Começar grátis
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1E293B] bg-[#1E293B]/50 backdrop-blur-sm px-8 py-4 text-white font-semibold hover:bg-[#1E293B] hover:border-[#7C3AED]/50 transition-all">
                <Play className="w-5 h-5" />
                Ver demonstração
              </button>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] border-2 border-[#0F172A]"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D28D9] to-[#5B21B6] border-2 border-[#0F172A]"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B21B6] to-[#3B82F6] border-2 border-[#0F172A]"></div>
              </div>
              <div className="text-sm">
                <p className="font-bold text-white">+12.000 usuários</p>
                <p className="text-[#CBD5E1]">organizando suas rotinas</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-[#1E293B]/50 backdrop-blur-xl shadow-2xl shadow-[#7C3AED]/20 p-6 border border-[#7C3AED]/20">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 flex items-center justify-center backdrop-blur-sm border border-[#7C3AED]/10">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/50">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-[#CBD5E1]">Interface do PulseFlow</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
