"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScheduleClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setTimeout(() => {
      alert("Calendly integration would open here.")
    }, 500)
  }

  const handleNewsletterSignup = () => {
    alert(
      "Funcionalidade de newsletter em desenvolvimento. Em uma implementação real, isso integraria com um serviço de email marketing.",
    )
  }

  const handleLinkClick = (linkName: string, href: string) => {
    if (href.startsWith("#")) {
      // Internal navigation
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href.startsWith("/")) {
      // Internal pages that don't exist yet
      alert(`Navegando para ${linkName}. Em uma implementação real, isso abriria a página ${href}.`)
    } else {
      // External links
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  const footerSections = [
    {
      title: "Serviços",
      links: [
        { name: "Consultoria de Software", href: "#services" },
        { name: "Desenvolvimento Web & Mobile", href: "#services" },
        { name: "UX/UI Design", href: "#services" },
        { name: "Dados & BI", href: "#services" },
        { name: "QA & Testes", href: "#services" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#about" },
        { name: "Nossa Metodologia", href: "#methodology" },
        { name: "Depoimentos", href: "#testimonials" },
        { name: "Blog", href: "/blog" },
        { name: "Carreiras", href: "/careers" },
      ],
    },
    {
      title: "Ferramentas",
      links: [
        { name: "Diagnóstico Digital", href: "#tools" },
        { name: "Calculadora de Custos", href: "#tools" },
        { name: "Analisador de Sites", href: "#tools" },
        { name: "Radar de Tendências", href: "#tools" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "/help" },
        { name: "Documentação", href: "/docs" },
        { name: "Status do Sistema", href: "/status" },
        { name: "Contato", href: "#contact" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/techjr", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/techjr", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/techjr", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/techjr", label: "Twitter" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  TechJr
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Transformamos ideias em soluções digitais que geram impacto real. Quebramos padrões para criar o novo.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">contato@techjr.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">(31) 9 9999-9999</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Belo Horizonte, MG</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary glitch-hover"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.name, link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-2">Fique por dentro das novidades</h4>
              <p className="text-muted-foreground text-sm">
                Receba insights sobre tecnologia e dicas para seu negócio digital.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input placeholder="Seu e-mail" className="md:w-64" />
              <Button
                onClick={handleNewsletterSignup}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 whitespace-nowrap gentle-hover"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} TechJr. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => handleLinkClick("Política de Privacidade", "/privacy")}
                className="hover:text-primary transition-colors"
              >
                Política de Privacidade
              </button>
              <button onClick={() => handleLinkClick("LGPD", "/lgpd")} className="hover:text-primary transition-colors">
                LGPD
              </button>
              <button
                onClick={() => handleLinkClick("Termos de Uso", "/terms")}
                className="hover:text-primary transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
