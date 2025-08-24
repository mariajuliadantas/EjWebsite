"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Video, MessageSquare, ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animations"

export function ScheduleSection() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const services = [
    "Consultoria de Software",
    "Desenvolvimento Web & Mobile",
    "UX/UI Design",
    "Dados & BI",
    "QA & Testes",
    "Gerenciamento de Projetos",
  ]

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ]

  const benefits = [
    {
      icon: Video,
      title: "Reunião Online",
      description: "Chamada de vídeo via Google Meet ou Zoom",
    },
    {
      icon: Clock,
      title: "45 Minutos",
      description: "Tempo suficiente para entender seu projeto",
    },
    {
      icon: Users,
      title: "Consultoria Gratuita",
      description: "Primeira consulta sem compromisso",
    },
    {
      icon: CheckCircle,
      title: "Proposta Personalizada",
      description: "Orçamento detalhado em até 24h",
    },
  ]

  return (
    <section id="agendar" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            Agende uma Reunião
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vamos conversar
            </span>
            <br />
            <span className="text-foreground">sobre seu projeto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos transformar suas ideias em soluções digitais de impacto
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <ScrollAnimation animation="slideUp" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">O que você ganha:</h3>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-2.5 flex-shrink-0">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Processo Simples</h4>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Preencha o formulário ao lado</li>
                    <li>2. Escolha o melhor horário para você</li>
                    <li>3. Receba o link da reunião por email</li>
                    <li>4. Conversamos sobre seu projeto</li>
                    <li>5. Proposta personalizada em 24h</li>
                  </ol>
                </div>
              </div>
            </Card>
          </ScrollAnimation>

          {/* Scheduling Form */}
          <ScrollAnimation animation="slideUp" delay={200}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border gentle-glow">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nome *</label>
                    <Input
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="gentle-hover"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="gentle-hover"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Empresa</label>
                  <Input
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="gentle-hover"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Serviço de Interesse</label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="gentle-hover">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Horário Preferido</label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="gentle-hover">
                      <SelectValue placeholder="Escolha um horário" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Conte-nos um pouco sobre seu projeto ou necessidade..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[100px] gentle-hover"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 gentle-hover gentle-glow">
                  Agendar Reunião Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao agendar, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </form>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
