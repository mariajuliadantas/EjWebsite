"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { ScrollAnimation, StaggerAnimation } from "@/components/scroll-animations"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Inovador",
      description:
        "Plataforma completa de vendas online com IA para recomendações personalizadas e sistema de pagamento integrado.",
      image: "/modern-ecommerce-website.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Desenvolvimento Web",
      results: "300% aumento nas vendas",
    },
    {
      title: "App de Gestão Empresarial",
      description: "Sistema completo de ERP mobile para pequenas e médias empresas com dashboard em tempo real.",
      image: "/business-management-mobile-app.png",
      technologies: ["React Native", "Firebase", "TypeScript"],
      category: "Mobile",
      results: "50+ empresas atendidas",
    },
    {
      title: "Plataforma de Educação",
      description: "LMS completo com gamificação, videoaulas interativas e sistema de avaliação automatizado.",
      image: "/education-platform-interface.png",
      technologies: ["Next.js", "Supabase", "Tailwind"],
      category: "EdTech",
      results: "10k+ alunos ativos",
    },
    {
      title: "Sistema de Telemedicina",
      description:
        "Plataforma segura para consultas médicas online com prontuário eletrônico e agendamento inteligente.",
      image: "/telemedicine-platform.png",
      technologies: ["Vue.js", "Python", "MongoDB"],
      category: "HealthTech",
      results: "95% satisfação médicos",
    },
    {
      title: "FinTech de Investimentos",
      description: "App de investimentos com análise de risco automatizada e recomendações baseadas em IA.",
      image: "/fintech-investment-app.png",
      technologies: ["Flutter", "Django", "Redis"],
      category: "FinTech",
      results: "R$ 50M+ movimentados",
    },
    {
      title: "Marketplace B2B",
      description: "Plataforma que conecta fornecedores e compradores com sistema de cotação automatizada.",
      image: "/b2b-marketplace-platform.png",
      technologies: ["Angular", "NestJS", "MySQL"],
      category: "B2B",
      results: "500+ empresas conectadas",
    },
  ]

  const handleViewProject = (projectTitle: string) => {
    alert(
      `Visualizando projeto: ${projectTitle}. Em uma implementação real, isso abriria uma página detalhada do projeto.`,
    )
  }

  const handleViewGithub = (projectTitle: string) => {
    alert(
      `Abrindo repositório GitHub do projeto: ${projectTitle}. Em uma implementação real, isso abriria o repositório no GitHub.`,
    )
  }

  const handleViewAllProjects = () => {
    alert(
      "Navegando para página completa de portfólio. Em uma implementação real, isso abriria uma página dedicada com todos os projetos.",
    )
  }

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nossos Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram impacto real no mercado
          </p>
        </ScrollAnimation>

        <StaggerAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={200}>
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 gentle-hover gentle-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm font-semibold text-accent">{project.results}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => handleViewProject(project.title)}
                    size="sm"
                    variant="outline"
                    className="flex-1 gentle-hover bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button
                    onClick={() => handleViewGithub(project.title)}
                    size="sm"
                    variant="ghost"
                    className="gentle-hover"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </StaggerAnimation>

        <ScrollAnimation animation="slideUp" delay={600} className="text-center mt-12">
          <Button
            onClick={handleViewAllProjects}
            size="lg"
            variant="outline"
            className="gentle-hover gentle-glow bg-transparent"
          >
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
