"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute("href")

      if (href?.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return null
}
