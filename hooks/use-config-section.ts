"use client"

import { useState, useEffect, useCallback } from "react"
import { useConfig } from "@/contexts/config-context"

/**
 * Hook para obtener una sección específica de la configuración
 * Utiliza caché local y del servidor para mejorar el rendimiento
 */
export function useConfigSection<T>(sectionName: string) {
  const { config, isLoading: isGlobalLoading } = useConfig()
  const [sectionData, setSectionData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Función para cargar la sección desde el servidor
  const fetchSection = useCallback(async () => {
    try {
      setIsLoading(true)

      // Intentar obtener la sección del contexto global primero
      if (config && config[sectionName as keyof typeof config]) {
        setSectionData(config[sectionName as keyof typeof config] as unknown as T)
        setError(null)
        setIsLoading(false)
        return
      }

      // Si no está en el contexto global, obtenerla del servidor
      const response = await fetch(`/api/config/${sectionName}`)

      if (!response.ok) {
        throw new Error(`Error al cargar la sección ${sectionName}`)
      }

      const data = await response.json()
      setSectionData(data as T)
      setError(null)
    } catch (err) {
      setError(`No se pudo cargar la sección ${sectionName}. Por favor, intenta de nuevo.`)
      console.error(`Error al cargar la sección ${sectionName}:`, err)
    } finally {
      setIsLoading(false)
    }
  }, [config, sectionName])

  // Cargar la sección al iniciar o cuando cambie el contexto global
  useEffect(() => {
    if (!isGlobalLoading) {
      fetchSection()
    }
  }, [fetchSection, isGlobalLoading])

  return {
    data: sectionData,
    isLoading: isLoading || isGlobalLoading,
    error,
    refresh: fetchSection,
  }
}
