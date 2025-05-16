"use client"

import { useConfigSection } from "@/hooks/use-config-section"
import { useEffect } from "react"

// Tipo para la sección de apariencia
interface AppearanceConfig {
  primaryColor: string
  secondaryColor: string
  fontFamily: string
  enableDarkMode: boolean
  showTestimonials: boolean
  showInstructors: boolean
}

// Tipo para la sección de SEO
interface SeoConfig {
  metaTitle: string
  metaDescription: string
  keywords: string
  googleAnalyticsId: string
  enableSitemap: boolean
}

export function DynamicStyles() {
  // Usar el hook para cargar solo las secciones necesarias
  const { data: appearanceConfig, isLoading: isAppearanceLoading } = useConfigSection<AppearanceConfig>("appearance")

  const { data: seoConfig, isLoading: isSeoLoading } = useConfigSection<SeoConfig>("seo")

  // Aplicar estilos de apariencia
  useEffect(() => {
    if (isAppearanceLoading || !appearanceConfig) return

    // Aplicar colores dinámicamente
    const root = document.documentElement

    // Aplicar colores primarios y secundarios
    root.style.setProperty("--primary", appearanceConfig.primaryColor)
    root.style.setProperty("--secondary", appearanceConfig.secondaryColor)

    // Aplicar fuente
    if (appearanceConfig.fontFamily !== "Inter") {
      // Aquí podrías cargar dinámicamente otras fuentes
      // Por ejemplo, usando la API de Google Fonts
      const link = document.createElement("link")
      link.href = `https://fonts.googleapis.com/css2?family=${appearanceConfig.fontFamily.replace(" ", "+")}&display=swap`
      link.rel = "stylesheet"
      document.head.appendChild(link)

      // Aplicar la fuente al body
      document.body.style.fontFamily = `'${appearanceConfig.fontFamily}', sans-serif`
    }

    // Aplicar modo oscuro si está habilitado
    if (appearanceConfig.enableDarkMode) {
      document.documentElement.classList.add("dark-mode-enabled")
    } else {
      document.documentElement.classList.remove("dark-mode-enabled")
    }
  }, [appearanceConfig, isAppearanceLoading])

  // Aplicar configuración de SEO
  useEffect(() => {
    if (isSeoLoading || !seoConfig) return

    // Aplicar título y descripción meta para SEO
    document.title = seoConfig.metaTitle

    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", seoConfig.metaDescription)
    } else {
      metaDescription = document.createElement("meta")
      metaDescription.name = "description"
      metaDescription.content = seoConfig.metaDescription
      document.head.appendChild(metaDescription)
    }

    // Actualizar keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute("content", seoConfig.keywords)
    } else {
      metaKeywords = document.createElement("meta")
      metaKeywords.name = "keywords"
      metaKeywords.content = seoConfig.keywords
      document.head.appendChild(metaKeywords)
    }

    // Agregar Google Analytics si está configurado
    if (seoConfig.googleAnalyticsId && !document.getElementById("ga-script")) {
      const gaScript = document.createElement("script")
      gaScript.id = "ga-script"
      gaScript.async = true
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${seoConfig.googleAnalyticsId}`
      document.head.appendChild(gaScript)

      const gaConfig = document.createElement("script")
      gaConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${seoConfig.googleAnalyticsId}');
      `
      document.head.appendChild(gaConfig)
    }
  }, [seoConfig, isSeoLoading])

  return null // Este componente no renderiza nada visible
}
