"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play, Pause } from "lucide-react"
import { useState } from "react"
import { ScrollAnimation, StaggerAnimation } from "@/components/scroll-animations"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  const metrics = [
    { label: "Clientes Atendidos", value: "50+" },
    { label: "Projetos Entregues", value: "120+" },
    { label: "Horas de Consultoria", value: "2000+" },
    { label: "Satisfação", value: "98%" },
  ]

  const handleScheduleClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setTimeout(() => {
      alert("Calendly integration would open here.")
    }, 500)
  }

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projetos")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scan-line pt-20">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-card to-background opacity-90 theme-gradient-bg">
          <div className="absolute inset-0 bg-[url('/placeholder-x3uam.png')] bg-cover bg-center opacity-20" />
        </div>

        {/* Video Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/20 backdrop-blur-sm gentle-hover gentle-glow"
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
        >
          {isVideoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <ScrollAnimation animation="fadeIn" className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent gradient-animate will-change-transform">
              Transformamos ideias
            </span>
            <br />
            <span className="text-foreground">em soluções digitais que</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent gradient-animate">
              geram impacto real
            </span>
          </h1>

          <ScrollAnimation animation="slideUp" delay={300}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Entregamos soluções tecnológicas inovadoras com a energia de um time jovem e qualificado. Quebramos
              padrões para criar o novo.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleScheduleClick}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold text-lg px-8 py-6 gentle-hover gentle-glow group transition-all duration-300"
              >
                Agende uma Reunião
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                onClick={handleProjectsClick}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg px-8 py-6 gentle-hover bg-transparent transition-all duration-300"
              >
                Conheça nossos projetos
              </Button>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>

        <div className="mt-24 mb-8">
          <StaggerAnimation className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" staggerDelay={150}>
            {metrics.map((metric, index) => (
              <Card
                key={metric.label}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 gentle-hover gentle-glow group"
              >
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">{metric.label}</div>
                </div>
              </Card>
            ))}
          </StaggerAnimation>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl float-animation will-change-transform" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl float-animation-reverse will-change-transform" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full blur-lg float-animation will-change-transform" />
    </section>
  )
}
