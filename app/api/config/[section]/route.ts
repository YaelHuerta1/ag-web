import { NextResponse } from "next/server"
import { getCacheValue, setCacheValue } from "@/lib/cache-service"

// Importamos la configuración desde el endpoint principal
// En un entorno real, esto sería una consulta a la base de datos
import { configData } from "../route"

// TTL para la caché de secciones de configuración (30 minutos)
const SECTION_CACHE_TTL = 30 * 60 * 1000

export async function GET(request: Request, { params }: { params: { section: string } }) {
  try {
    const { section } = params

    // Validar que la sección existe
    if (!section || !["general", "email", "payment", "appearance", "seo"].includes(section)) {
      return NextResponse.json({ error: "Sección no válida" }, { status: 400 })
    }

    // Clave de caché para esta sección
    const cacheKey = `app:config:section:${section}`

    // Intentar obtener la sección de la caché
    const cachedSection = await getCacheValue(cacheKey)

    // Si existe en la caché, devolverla
    if (cachedSection) {
      console.log(`Sección ${section} obtenida de la caché`)
      return NextResponse.json(cachedSection)
    }

    // Si no existe en la caché, obtenerla de la fuente de datos
    console.log(`Sección ${section} obtenida de la fuente de datos`)
    const sectionData = configData[section as keyof typeof configData]

    // Almacenar en caché para futuras solicitudes
    await setCacheValue(cacheKey, sectionData, SECTION_CACHE_TTL)

    return NextResponse.json(sectionData)
  } catch (error) {
    console.error("Error al obtener la sección de configuración:", error)
    return NextResponse.json({ error: "Error al obtener la sección de configuración" }, { status: 500 })
  }
}
