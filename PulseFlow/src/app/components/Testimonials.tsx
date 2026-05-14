import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Estudante de Medicina",
    content: "Consegui organizar meus estudos e melhorei minhas notas. A IA realmente entende minha rotina!",
    rating: 5,
    avatar: "AS"
  },
  {
    name: "Carlos Mendes",
    role: "Designer Freelancer",
    content: "Desde que comecei a usar, nunca mais perdi prazos. O planejamento automático é incrível.",
    rating: 5,
    avatar: "CM"
  },
  {
    name: "Juliana Santos",
    role: "Desenvolvedora",
    content: "Finalmente um app que une tudo que eu preciso. Abandonei 3 ferramentas e uso só o PulseFlow.",
    rating: 5,
    avatar: "JS"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#1E293B]/50 to-[#0F172A]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto">
            Milhares de pessoas já transformaram sua produtividade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#1E293B] hover:border-[#7C3AED]/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#7C3AED] text-[#7C3AED]" />
                ))}
              </div>

              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#CBD5E1]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
