import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#3B82F6] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white">Sem compromisso, cancele quando quiser</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para organizar sua rotina?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram sua produtividade com o PulseFlow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[#7C3AED] font-bold hover:bg-[#F9FAFB] transition-all shadow-lg hover:scale-105">
              Comece grátis agora
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105">
              Falar com vendas
            </button>
          </div>

          <p className="text-sm text-white/70 mt-6">
            ✓ Teste grátis por 7 dias &nbsp;•&nbsp; ✓ Sem cartão de crédito &nbsp;•&nbsp; ✓ Cancele quando quiser
          </p>
        </motion.div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0F172A]/20 rounded-full blur-3xl"></div>
    </section>
  );
}
