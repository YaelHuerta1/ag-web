"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

// Definir tipos para la configuración
export interface ConfigContextType {
  config: {
    general: {
      platformName: string
      platformDescription: string
      contactEmail: string
      contactPhone: string
      contactAddress: string
    }
    email: {
      smtpServer: string
      smtpPort: string
      smtpUsername: string
      smtpPassword: string
      senderName: string
      senderEmail: string
      enableEmailNotifications: boolean
    }
    payment: {
      currency: string
      paymentMethods: string[]
      taxRate: string
      enablePayments: boolean
      testMode: boolean
    }
    appearance: {
      primaryColor: string
      secondaryColor: string
      fontFamily: string
      enableDarkMode: boolean
      showTestimonials: boolean
      showInstructors: boolean
    }
    seo: {
      metaTitle: string
      metaDescription: string
      keywords: string
      googleAnalyticsId: string
      enableSitemap: boolean
    }
  }
  isLoading: boolean
  error: string | null
  updateConfig: (section: string, newData: any) => Promise<void>
  refreshConfig: () => Promise<void>
}

// Crear el contexto
const ConfigContext = createContext<ConfigContextType | undefined>(undefined)

// Clave para almacenar la configuración en localStorage
const LOCAL_STORAGE_KEY = "app_config"
// Tiempo de expiración para la caché local (en milisegundos)
const LOCAL_CACHE_TTL = 15 * 60 * 1000 // 15 minutos

// Proveedor del contexto
export function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ConfigContextType["config"] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastFetched, setLastFetched] = useState<number | null>(null)

  // Función para verificar si la caché local ha expirado
  const isCacheExpired = useCallback(() => {
    if (!lastFetched) return true
    return Date.now() - lastFetched > LOCAL_CACHE_TTL
  }, [lastFetched])

  // Función para cargar la configuración desde el servidor
  const fetchConfigFromServer = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/config")

      if (!response.ok) {
        throw new Error("Error al cargar la configuración")
      }

      const data = await response.json()

      // Guardar en el estado
      setConfig(data)

      // Guardar en localStorage con timestamp
      const cacheData = {
        config: data,
        timestamp: Date.now(),
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cacheData))

      // Actualizar timestamp
      setLastFetched(Date.now())

      setError(null)
    } catch (err) {
      setError("No se pudo cargar la configuración. Por favor, intenta de nuevo.")
      console.error("Error al cargar la configuración:", err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Función para cargar la configuración desde localStorage
  const loadConfigFromCache = useCallback(() => {
    try {
      const cachedData = localStorage.getItem(LOCAL_STORAGE_KEY)

      if (cachedData) {
        const { config: cachedConfig, timestamp } = JSON.parse(cachedData)

        // Verificar si la caché ha expirado
        if (Date.now() - timestamp <= LOCAL_CACHE_TTL) {
          setConfig(cachedConfig)
          setLastFetched(timestamp)
          return true
        }
      }

      return false
    } catch (err) {
      console.error("Error al cargar la configuración desde la caché:", err)
      return false
    }
  }, [])

  // Función para refrescar la configuración
  const refreshConfig = useCallback(async () => {
    await fetchConfigFromServer()
  }, [fetchConfigFromServer])

  // Cargar la configuración al iniciar
  useEffect(() => {
    const initConfig = async () => {
      // Intentar cargar desde localStorage primero
      const loadedFromCache = loadConfigFromCache()

      // Si no se pudo cargar desde la caché o la caché ha expirado, cargar desde el servidor
      if (!loadedFromCache || isCacheExpired()) {
        await fetchConfigFromServer()
      } else {
        // Si se cargó desde la caché, actualizar el estado de carga
        setIsLoading(false)
      }
    }

    initConfig()
  }, [fetchConfigFromServer, loadConfigFromCache, isCacheExpired])

  // Función para actualizar la configuración
  const updateConfig = async (section: string, newData: any) => {
    try {
      setIsLoading(true)

      // Preparar los datos a enviar
      const updatedConfig = {
        ...config,
        [section]: {
          ...(config ? config[section as keyof typeof config] : {}),
          ...newData,
        },
      }

      // Enviar la actualización al servidor
      const response = await fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [section]: newData }),
      })

      if (!response.ok) {
        throw new Error("Error al actualizar la configuración")
      }

      const data = await response.json()

      // Actualizar el estado local con la respuesta del servidor
      setConfig(data.config)

      // Actualizar la caché local
      const cacheData = {
        config: data.config,
        timestamp: Date.now(),
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cacheData))

      // Actualizar timestamp
      setLastFetched(Date.now())

      setError(null)
    } catch (err) {
      setError("No se pudo actualizar la configuración. Por favor, intenta de nuevo.")
      console.error("Error al actualizar la configuración:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // Valor del contexto
  const contextValue: ConfigContextType = {
    config: config || {
      general: {
        platformName: "",
        platformDescription: "",
        contactEmail: "",
        contactPhone: "",
        contactAddress: "",
      },
      email: {
        smtpServer: "",
        smtpPort: "",
        smtpUsername: "",
        smtpPassword: "",
        senderName: "",
        senderEmail: "",
        enableEmailNotifications: false,
      },
      payment: {
        currency: "",
        paymentMethods: [],
        taxRate: "",
        enablePayments: false,
        testMode: false,
      },
      appearance: {
        primaryColor: "",
        secondaryColor: "",
        fontFamily: "",
        enableDarkMode: false,
        showTestimonials: false,
        showInstructors: false,
      },
      seo: {
        metaTitle: "",
        metaDescription: "",
        keywords: "",
        googleAnalyticsId: "",
        enableSitemap: false,
      },
    },
    isLoading,
    error,
    updateConfig,
    refreshConfig,
  }

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>
}

// Hook personalizado para usar el contexto
export function useConfig() {
  const context = useContext(ConfigContext)
  if (context === undefined) {
    throw new Error("useConfig debe ser usado dentro de un ConfigProvider")
  }
  return context
}
