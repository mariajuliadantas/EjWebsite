"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn"
  delay?: number
  duration?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const getAnimationClasses = () => {
    const baseClasses = "opacity-0 transition-all ease-out"
    const animationClasses = {
      fadeIn: "translate-y-0",
      slideUp: "translate-y-8",
      slideLeft: "translate-x-8",
      slideRight: "-translate-x-8",
      scaleIn: "scale-95",
    }

    return `${baseClasses} ${animationClasses[animation]}`
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}

// Stagger animation for multiple elements
interface StaggerAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggerAnimation({ children, className = "", staggerDelay = 100 }: StaggerAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation key={index} delay={index * staggerDelay} animation="slideUp">
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}
