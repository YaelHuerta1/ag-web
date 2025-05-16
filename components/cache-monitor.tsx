"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Database, Clock } from "lucide-react"
import { useConfig } from "@/contexts/config-context"

export function CacheMonitor() {
  const { refreshConfig } = useConfig()
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)
  const [cacheStats, setCacheStats] = useState({
    serverHits: 0,
    cacheHits: 0,
    totalRequests: 0,
  })

  // Simular estadísticas de caché (en un entorno real, esto vendría del servidor)
  useEffect(() => {
    // Actualizar estadísticas cada 5 segundos
    const interval = setInterval(() => {
      setCacheStats((prev) => ({
        serverHits: prev.serverHits + Math.floor(Math.random() * 2),
        cacheHits: prev.cacheHits + Math.floor(Math.random() * 5),
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 7),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Función para refrescar la caché
  const handleRefreshCache = async () => {
    await refreshConfig()
    setLastRefresh(new Date())
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Database className="mr-2 h-5 w-5" />
          Monitor de Caché
        </CardTitle>
        <CardDescription>Estadísticas y gestión de la caché de configuración</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-sm text-gray-500 mb-1">Solicitudes Totales</p>
              <p className="text-2xl font-bold">{cacheStats.totalRequests}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-sm text-gray-500 mb-1">Aciertos de Caché</p>
              <p className="text-2xl font-bold">{cacheStats.cacheHits}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-sm text-gray-500 mb-1">Consultas al Servidor</p>
              <p className="text-2xl font-bold">{cacheStats.serverHits}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">
                Último refresco: {lastRefresh ? lastRefresh.toLocaleTimeString() : "Nunca"}
              </span>
            </div>
            <Button variant="outline" size="sm" onClick={handleRefreshCache}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refrescar Caché
            </Button>
          </div>

          <div className="text-sm text-gray-500 mt-4">
            <p>
              Eficiencia de caché:{" "}
              {cacheStats.totalRequests > 0 ? Math.round((cacheStats.cacheHits / cacheStats.totalRequests) * 100) : 0}%
            </p>
            <p className="mt-1">La caché mejora el rendimiento reduciendo las consultas al servidor.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
