import { NextResponse } from "next/server"
import { getCacheValue, setCacheValue, deleteCachePattern } from "@/lib/cache-service"

// Clave de caché para la configuración completa
const CONFIG_CACHE_KEY = "app:config"
// Prefijo para las claves de caché de secciones individuales
const SECTION_CACHE_PREFIX = "app:config:section:"
// TTL para la caché de configuración (1 hora)
const CONFIG_CACHE_TTL = 60 * 60 * 1000

// En un entorno real, esto se conectaría a una base de datos
// usamos un archivo JSON simulado
export let configData = {
  general: {
    platformName: "Desarrollo Humano",
    platformDescription: "Plataforma de cursos en línea enfocada en el desarrollo humano integral y colaborativo.",
    contactEmail: "info@desarrollohumano.com",
    contactPhone: "+52 123 456 7890",
    contactAddress: "Av. Principal #123, Ciudad de México",
  },
  email: {
    smtpServer: "smtp.example.com",
    smtpPort: "587",
    smtpUsername: "notifications@desarrollohumano.com",
    smtpPassword: "password123",
    senderName: "Desarrollo Humano",
    senderEmail: "notifications@desarrollohumano.com",
    enableEmailNotifications: true,
  },
  payment: {
    currency: "MXN",
    paymentMethods: ["creditCard", "paypal", "bankTransfer"],
    taxRate: "16",
    enablePayments: true,
    testMode: true,
  },
  appearance: {
    primaryColor: "#5272FF",
    secondaryColor: "#1C9AEA",
    fontFamily: "Inter",
    enableDarkMode: true,
    showTestimonials: true,
    showInstructors: true,
  },
  seo: {
    metaTitle: "Desarrollo Humano | Cursos en línea para potenciar tus capacidades",
    metaDescription:
      "Descubre nuestros cursos de desarrollo humano integral y colaborativo. Potencia tus capacidades y alcanza tu máximo potencial.",
    keywords: "desarrollo humano, cursos en línea, capacitación, habilidades blandas, liderazgo, negociación",
    googleAnalyticsId: "UA-XXXXXXXXX-X",
    enableSitemap: true,
  },
}

export async function GET() {
  try {
    // Intentar obtener la configuración de la caché
    const cachedConfig = await getCacheValue(CONFIG_CACHE_KEY)

    // Si existe en la caché, devolverla
    if (cachedConfig) {
      console.log("Configuración obtenida de la caché")
      return NextResponse.json(cachedConfig)
    }

    // Si no existe en la caché, obtenerla de la fuente de datos
    // En un entorno real, esto sería una consulta a la base de datos
    console.log("Configuración obtenida de la fuente de datos")

    // Almacenar en caché para futuras solicitudes
    await setCacheValue(CONFIG_CACHE_KEY, configData, CONFIG_CACHE_TTL)

    return NextResponse.json(configData)
  } catch (error) {
    console.error("Error al obtener la configuración:", error)
    return NextResponse.json({ error: "Error al obtener la configuración" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const newConfig = await request.json()

    // Validar los datos recibidos (implementar validación adecuada)
    if (!newConfig) {
      return NextResponse.json({ error: "Datos de configuración inválidos" }, { status: 400 })
    }

    // Actualizar la configuración
    // En un entorno real, esto guardaría en una base de datos
    configData = { ...configData, ...newConfig }

    // Invalidar la caché de configuración completa
    await deleteCachePattern(CONFIG_CACHE_KEY)

    // Invalidar la caché de las secciones actualizadas
    for (const section in newConfig) {
      await deleteCachePattern(`${SECTION_CACHE_PREFIX}${section}`)
    }

    // Actualizar la caché con la nueva configuración
    await setCacheValue(CONFIG_CACHE_KEY, configData, CONFIG_CACHE_TTL)

    return NextResponse.json({
      success: true,
      message: "Configuración actualizada correctamente",
      config: configData,
    })
  } catch (error) {
    console.error("Error al actualizar la configuración:", error)
    return NextResponse.json(
      {
        error: "Error al procesar la solicitud",
      },
      { status: 500 },
    )
  }
}
