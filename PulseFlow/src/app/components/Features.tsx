import { motion } from "motion/react";
import { CheckCircle2, Clock, Calendar, BarChart3, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Lista de tarefas inteligente",
    description: "Organize e priorize suas atividades com sugestões automáticas de relevância."
  },
  {
    icon: Sparkles,
    title: "Planejamento automático com IA",
    description: "Deixe a IA sugerir os melhores horários para cada tarefa baseado na sua rotina."
  },
  {
    icon: Clock,
    title: "Pomodoro integrado",
    description: "Técnica Pomodoro nativa para manter seu foco e produtividade."
  },
  {
    icon: Calendar,
    title: "Calendário sincronizado",
    description: "Integração com Google Calendar para visualizar tudo em um só lugar."
  },
  {
    icon: BarChart3,
    title: "Relatórios de desempenho",
    description: "Acompanhe métricas detalhadas da sua produtividade ao longo do tempo."
  },
  {
    icon: Target,
    title: "Metas semanais",
    description: "Defina objetivos e acompanhe seu progresso com visualizações claras."
  }
];

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-[#3B82F6]/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Funcionalidades completas
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto">
            Tudo que você precisa para organizar sua vida em um único app
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#1E293B] rounded-2xl p-6 hover:bg-[#1E293B]/70 hover:border-[#7C3AED]/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center mb-4 shadow-lg shadow-[#7C3AED]/30 group-hover:shadow-[#7C3AED]/50 group-hover:scale-110 transition-all">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[#CBD5E1]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
