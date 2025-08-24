"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, TechStart",
    avatar: "/professional-woman-ceo.png",
    content:
      "A TechJr transformou completamente nossa presença digital. O time jovem trouxe ideias inovadoras que nunca tínhamos considerado. Resultado: 300% de aumento nas conversões!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Diretor de TI, InnovaCorp",
    avatar: "/professional-man-director.png",
    content:
      "Impressionante a qualidade técnica e a agilidade na entrega. O projeto foi concluído antes do prazo e superou todas as expectativas. Recomendo fortemente!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Fundadora, EcoSolutions",
    avatar: "/professional-woman-founder.png",
    content:
      "O processo colaborativo e a metodologia ágil da TechJr fizeram toda a diferença. Sentimos que éramos parte da equipe durante todo o desenvolvimento.",
    rating: 5,
  },
  {
    name: "Prof. Carlos Mendes",
    role: "Coordenador de TI, UFMG",
    avatar: "/academic-professor.png",
    content:
      "Como parceiro acadêmico, posso afirmar que a TechJr representa o que há de melhor na formação prática dos nossos estudantes. Projetos de altíssima qualidade!",
    rating: 5,
  },
  {
    name: "Lucia Ferreira",
    role: "Gerente de Marketing, StartupXYZ",
    avatar: "/professional-woman-marketing.png",
    content:
      "A consultoria em UX/UI revolucionou nossa interface. Os usuários agora navegam de forma muito mais intuitiva. ROI comprovado em apenas 2 meses!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground"}`} />
    ))
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="h-4 w-4" />
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            <span className="text-foreground">O que nossos</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação digital que comprovam nosso compromisso com a excelência.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Avatar className="w-20 h-20 border-4 border-primary/20">
                    <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white text-xl">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-primary text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-primary to-secondary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
