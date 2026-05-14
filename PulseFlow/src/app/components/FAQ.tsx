import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o período de teste?",
    answer: "Você pode usar o plano Pro gratuitamente por 7 dias, sem precisar cadastrar cartão de crédito. Após o período, você pode escolher assinar ou continuar no plano gratuito."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Você pode cancelar sua assinatura quando quiser, sem multas ou burocracias. Basta acessar as configurações da conta."
  },
  {
    question: "O PulseFlow funciona offline?",
    answer: "Sim, você pode usar as funcionalidades básicas offline. Suas tarefas serão sincronizadas automaticamente quando você voltar a ter conexão."
  },
  {
    question: "Como a IA sugere prioridades?",
    answer: "A IA analisa seu histórico de tarefas, prazos, tempo médio de execução e padrões de comportamento para sugerir os melhores horários e prioridades."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim! Usamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Seus dados nunca são compartilhados com terceiros."
  },
  {
    question: "Posso usar em múltiplos dispositivos?",
    answer: "Sim! O PulseFlow sincroniza automaticamente entre todos os seus dispositivos (celular, tablet, computador)."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#1E293B]/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto">
            Tire suas dúvidas sobre o PulseFlow
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-[#1E293B]/50 backdrop-blur-sm rounded-xl border border-[#1E293B] hover:border-[#7C3AED]/30 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1E293B]/30 transition-colors"
              >
                <span className="font-bold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#7C3AED] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-[#CBD5E1]">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
