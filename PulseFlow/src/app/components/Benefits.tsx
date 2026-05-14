import { motion } from "motion/react";
import { Target, Zap, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Foco nos resultados",
    description: "Pare de perder tempo planejando e comece a executar com sugestões inteligentes de IA."
  },
  {
    icon: Zap,
    title: "Tudo em um lugar",
    description: "Tarefas, calendário, Pomodoro e relatórios unidos em uma única plataforma."
  },
  {
    icon: TrendingUp,
    title: "Melhore continuamente",
    description: "Acompanhe seu progresso e identifique padrões para otimizar sua rotina."
  },
  {
    icon: Clock,
    title: "Planejamento automático",
    description: "A IA reorganiza suas prioridades automaticamente quando surgem imprevistos."
  }
];

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E293B]/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher o PulseFlow?
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto">
            Muito mais que uma lista de tarefas. Uma solução completa para sua produtividade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#1E293B]/30 backdrop-blur-sm border border-[#1E293B] hover:bg-[#1E293B]/50 hover:border-[#7C3AED]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mb-4 shadow-lg shadow-[#7C3AED]/50 group-hover:shadow-[#7C3AED]/70 group-hover:scale-110 transition-all">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#CBD5E1]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
