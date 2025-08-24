"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Palette, BarChart3, Shield, Users, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import { Modal } from "@/components/modal"

const services = [
  {
    icon: Code,
    title: "Consultoria de Software",
    description: "Análise técnica e estratégica para otimizar seus sistemas e processos digitais.",
    details:
      "Auditoria de código, arquitetura de sistemas, migração de tecnologias e consultoria em boas práticas de desenvolvimento.",
    fullContent: {
      overview:
        "Nossa consultoria de software oferece análise profunda dos seus sistemas atuais, identificando gargalos, vulnerabilidades e oportunidades de melhoria.",
      services: [
        "Auditoria completa de código e arquitetura",
        "Análise de performance e otimização",
        "Migração de sistemas legados",
        "Implementação de boas práticas DevOps",
        "Consultoria em escolha de tecnologias",
        "Revisão de segurança e compliance",
      ],
      benefits: [
        "Redução de custos operacionais em até 40%",
        "Melhoria na performance dos sistemas",
        "Maior segurança e confiabilidade",
        "Escalabilidade para crescimento futuro",
      ],
    },
    color: "from-primary to-secondary",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Web & Mobile",
    description: "Criação de aplicações modernas, responsivas e performáticas para web e dispositivos móveis.",
    details: "React, Next.js, React Native, Progressive Web Apps, APIs RESTful e integração com serviços em nuvem.",
    fullContent: {
      overview:
        "Desenvolvemos aplicações web e mobile de alta qualidade, utilizando as tecnologias mais modernas do mercado.",
      services: [
        "Desenvolvimento de sites e web apps",
        "Aplicativos móveis nativos e híbridos",
        "Progressive Web Apps (PWA)",
        "APIs RESTful e GraphQL",
        "Integração com serviços em nuvem",
        "E-commerce e marketplaces",
      ],
      benefits: [
        "Aplicações responsivas e performáticas",
        "Experiência de usuário otimizada",
        "Compatibilidade multiplataforma",
        "Escalabilidade e manutenibilidade",
      ],
    },
    color: "from-secondary to-accent",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Design centrado no usuário com foco em experiências intuitivas e interfaces impactantes.",
    details: "Pesquisa de usuário, prototipagem, design systems, testes de usabilidade e design responsivo.",
    fullContent: {
      overview:
        "Criamos experiências digitais memoráveis através de design centrado no usuário e interfaces que convertem.",
      services: [
        "Pesquisa e análise de usuários",
        "Wireframes e prototipagem",
        "Design de interfaces (UI)",
        "Experiência do usuário (UX)",
        "Design systems e guias de estilo",
        "Testes de usabilidade",
      ],
      benefits: [
        "Aumento na conversão e engajamento",
        "Redução na taxa de abandono",
        "Maior satisfação dos usuários",
        "Identidade visual consistente",
      ],
    },
    color: "from-accent to-primary",
  },
  {
    icon: BarChart3,
    title: "Dados & BI",
    description: "Transforme dados em insights estratégicos com dashboards e análises inteligentes.",
    details: "Data visualization, ETL, dashboards interativos, análise preditiva e integração com ferramentas de BI.",
    fullContent: {
      overview:
        "Transformamos seus dados em insights acionáveis através de análises avançadas e visualizações intuitivas.",
      services: [
        "Dashboards interativos e personalizados",
        "Análise preditiva e machine learning",
        "ETL e integração de dados",
        "Data warehousing",
        "Relatórios automatizados",
        "Consultoria em estratégia de dados",
      ],
      benefits: [
        "Decisões baseadas em dados concretos",
        "Identificação de oportunidades de negócio",
        "Otimização de processos operacionais",
        "ROI mensurável e transparente",
      ],
    },
    color: "from-primary to-chart-4",
  },
  {
    icon: Shield,
    title: "QA & Testes de Qualidade",
    description: "Garantia de qualidade com testes automatizados e manuais para máxima confiabilidade.",
    details: "Testes unitários, integração, E2E, performance, segurança e implementação de CI/CD.",
    fullContent: {
      overview:
        "Garantimos a qualidade e confiabilidade dos seus sistemas através de estratégias abrangentes de testes.",
      services: [
        "Testes automatizados (unitários, integração, E2E)",
        "Testes manuais e exploratórios",
        "Testes de performance e carga",
        "Testes de segurança",
        "Implementação de CI/CD",
        "Auditoria de qualidade",
      ],
      benefits: [
        "Redução de bugs em produção",
        "Maior confiabilidade do sistema",
        "Entregas mais rápidas e seguras",
        "Melhor experiência do usuário final",
      ],
    },
    color: "from-chart-4 to-secondary",
  },
  {
    icon: Users,
    title: "Sucesso do Cliente & Gerenciamento",
    description: "Acompanhamento dedicado para garantir o sucesso e evolução contínua dos projetos.",
    details: "Gestão de projetos ágeis, suporte técnico, treinamentos e consultoria estratégica contínua.",
    fullContent: {
      overview: "Garantimos o sucesso dos seus projetos através de acompanhamento dedicado e gestão especializada.",
      services: [
        "Gestão de projetos ágeis (Scrum/Kanban)",
        "Suporte técnico especializado",
        "Treinamento de equipes",
        "Consultoria estratégica contínua",
        "Monitoramento e otimização",
        "Documentação e transferência de conhecimento",
      ],
      benefits: [
        "Projetos entregues no prazo",
        "Equipes capacitadas e autônomas",
        "Suporte contínuo pós-entrega",
        "Evolução constante dos sistemas",
      ],
    },
    color: "from-secondary to-accent",
  },
]

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Soluções completas
            </span>
            <br />
            <span className="text-foreground">para seu negócio digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de serviços tecnológicos, desde a concepção até a entrega e suporte
            contínuo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredService === index

            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 cursor-pointer gentle-hover gentle-glow"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.details}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-semibold group/btn gentle-hover"
                      onClick={() => setSelectedService(index)}
                    >
                      Saiba Mais
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.color} p-[1px]`}>
                    <div className="w-full h-full rounded-lg bg-card" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {selectedService !== null && (
        <Modal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">{services[selectedService].fullContent.overview}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Nossos Serviços</h4>
                <ul className="space-y-2">
                  {services[selectedService].fullContent.services.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-secondary">Benefícios</h4>
                <ul className="space-y-2">
                  {services[selectedService].fullContent.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Button className="w-full gentle-hover gentle-glow">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
