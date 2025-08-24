"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MethodologySection } from "@/components/methodology-section"
import { InteractiveTools } from "@/components/interactive-tools"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ScheduleSection } from "@/components/schedule-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollAnimation } from "@/components/scroll-animations"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <ScrollAnimation animation="fadeIn">
          <ServicesSection />
        </ScrollAnimation>
        <ScrollAnimation animation="slideUp" delay={200}>
          <MethodologySection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn" delay={300}>
          <ProjectsSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn" delay={400}>
          <InteractiveTools />
        </ScrollAnimation>
        <ScrollAnimation animation="slideUp" delay={500}>
          <ScheduleSection />
        </ScrollAnimation>
        <ScrollAnimation animation="slideUp" delay={600}>
          <TestimonialsSection />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn" delay={800}>
          <ContactSection />
        </ScrollAnimation>
        <Footer />
      </main>
    </>
  )
}
