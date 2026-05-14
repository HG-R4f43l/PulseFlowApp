import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Até 3 projetos",
      "Pomodoro integrado",
      "Calendário básico",
      "Lista de tarefas",
      "Suporte por email"
    ],
    cta: "Começar grátis",
    popular: false
  },
  {
    name: "Pro",
    price: "R$ 19,90",
    period: "/mês",
    description: "Para quem leva produtividade a sério",
    features: [
      "IA completa",
      "Projetos ilimitados",
      "Relatórios avançados",
      "Sincronização total",
      "Integração Google Calendar",
      "Metas personalizadas",
      "Suporte prioritário"
    ],
    cta: "Teste por 7 dias",
    popular: true
  }
];

export function Pricing() {
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
            Escolha seu plano
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto">
            Comece grátis e evolua quando precisar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#3B82F6] text-white shadow-2xl shadow-[#7C3AED]/50 scale-105"
                  : "bg-[#1E293B]/50 backdrop-blur-sm border-2 border-[#1E293B]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Mais popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={plan.popular ? "text-white/90" : "text-[#CBD5E1]"}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-extrabold ${plan.popular ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-white/80" : "text-[#CBD5E1]"}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-white" : "text-[#7C3AED]"}`} />
                    <span className={plan.popular ? "text-white" : "text-white"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                  plan.popular
                    ? "bg-white text-[#7C3AED] hover:bg-[#F9FAFB] hover:scale-105"
                    : "bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white hover:from-[#6D28D9] hover:to-[#7C3AED] hover:scale-105"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
