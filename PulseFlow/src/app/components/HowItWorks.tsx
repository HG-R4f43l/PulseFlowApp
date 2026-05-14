import { motion } from "motion/react";
import { UserPlus, Brain, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "1",
    title: "Cadastre-se grátis",
    description: "Crie sua conta em menos de 1 minuto e comece a organizar suas tarefas."
  },
  {
    icon: Brain,
    step: "2",
    title: "IA aprende sua rotina",
    description: "O sistema analisa seus padrões e sugere horários ideais para cada atividade."
  },
  {
    icon: Rocket,
    step: "3",
    title: "Aumente sua produtividade",
    description: "Foque no que importa enquanto a IA cuida do planejamento."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#1E293B]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Como funciona
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto">
            Comece a usar em 3 passos simples
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/50">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#7C3AED] text-white flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[#CBD5E1]">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#7C3AED]/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
