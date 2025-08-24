"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, PlaneTakeoff, Code2, Rocket, Users, Zap, DollarSign, CheckCircle } from "lucide-react"
import { useState } from "react"

const methodologySteps = [
  {
    icon: Search,
    title: "Descoberta",
    description: "Entendemos profundamente seu negócio, objetivos e desafios",
    details: [
      "Análise de requisitos e stakeholders",
      "Pesquisa de mercado e concorrência",
      "Definição de personas e jornadas",
      "Mapeamento de processos atuais",
    ],
    color: "from-primary to-secondary",
  },
  {
    icon: PlaneTakeoff,
    title: "Planejamento",
    description: "Criamos uma estratégia detalhada e roadmap de execução",
    details: [
      "Arquitetura da solução e tecnologias",
      "Cronograma e marcos do projeto",
      "Definição de escopo e entregas",
      "Prototipagem e validação inicial",
    ],
    color: "from-secondary to-accent",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Executamos com metodologia ágil e entregas incrementais",
    details: [
      "Desenvolvimento iterativo e colaborativo",
      "Testes contínuos e integração",
      "Reviews regulares com o cliente",
      "Documentação técnica completa",
    ],
    color: "from-accent to-chart-4",
  },
  {
    icon: Rocket,
    title: "Entrega & Suporte",
    description: "Lançamos sua solução e garantimos seu sucesso contínuo",
    details: [
      "Deploy e configuração em produção",
      "Treinamento da equipe interna",
      "Monitoramento e otimização",
      "Suporte técnico especializado",
    ],
    color: "from-chart-4 to-primary",
  },
]

const differentials = [
  {
    icon: Users,
    title: "Time Jovem e Atualizado",
    description: "Profissionais em formação com conhecimento das tecnologias mais recentes",
  },
  {
    icon: Zap,
    title: "Processo Ágil e Colaborativo",
    description: "Metodologia flexível com entregas rápidas e feedback contínuo",
  },
  {
    icon: DollarSign,
    title: "Preço Competitivo",
    description: "Qualidade profissional com investimento acessível para seu negócio",
  },
]

export function MethodologySection() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section id="methodology" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            Nossa Metodologia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            <span className="text-foreground">O diferencial que</span>
            <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              transforma projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa abordagem combina metodologia ágil, tecnologia de ponta e a energia de um time jovem e qualificado.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          {/* Navigation Buttons */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 bg-card/50 backdrop-blur-sm p-2 rounded-full border border-border">
              {methodologySteps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeStep === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Display */}
          <div className="max-w-4xl mx-auto">
            {methodologySteps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index

              return (
                <div
                  key={step.title}
                  className={`transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute"
                  }`}
                  style={{ display: isActive ? "block" : "none" }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} p-4 shadow-lg`}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-3xl font-bold mb-4 text-foreground">{step.title}</h3>
                          <p className="text-lg text-muted-foreground mb-6">{step.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon

            return (
              <Card
                key={differential.title}
                className="group text-center bg-card/30 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-500 glitch-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {differential.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
