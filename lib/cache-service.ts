/**
 * Servicio de caché para la aplicación
 * En un entorno de producción, esto podría usar Redis, Memcached u otro sistema de caché
 */

// Simulación de un almacén de caché
type CacheStore = {
  [key: string]: {
    value: any
    expiry: number | null
  }
}

// Almacén de caché en memoria (en producción usaríamos Redis u otra solución)
const cacheStore: CacheStore = {}

// Tiempo de vida predeterminado para las entradas de caché (en milisegundos)
const DEFAULT_TTL = 5 * 60 * 1000 // 5 minutos

/**
 * Obtiene un valor de la caché
 * @param key Clave de la caché
 * @returns El valor almacenado o null si no existe o ha expirado
 */
export async function getCacheValue<T>(key: string): Promise<T | null> {
  const cacheEntry = cacheStore[key]

  // Si no hay entrada en la caché, devolver null
  if (!cacheEntry) {
    return null
  }

  // Comprobar si la entrada ha expirado
  if (cacheEntry.expiry && Date.now() > cacheEntry.expiry) {
    // Eliminar la entrada expirada
    delete cacheStore[key]
    return null
  }

  // Devolver el valor almacenado
  return cacheEntry.value as T
}

/**
 * Almacena un valor en la caché
 * @param key Clave de la caché
 * @param value Valor a almacenar
 * @param ttl Tiempo de vida en milisegundos (opcional, por defecto 5 minutos)
 */
export async function setCacheValue<T>(key: string, value: T, ttl: number = DEFAULT_TTL): Promise<void> {
  cacheStore[key] = {
    value,
    expiry: ttl ? Date.now() + ttl : null,
  }
}

/**
 * Elimina una entrada de la caché
 * @param key Clave de la caché
 */
export async function deleteCacheValue(key: string): Promise<void> {
  delete cacheStore[key]
}

/**
 * Elimina todas las entradas de la caché que coincidan con un patrón
 * @param pattern Patrón para las claves a eliminar (por ejemplo, 'config:*')
 */
export async function deleteCachePattern(pattern: string): Promise<void> {
  const regex = new RegExp(pattern.replace("*", ".*"))

  Object.keys(cacheStore).forEach((key) => {
    if (regex.test(key)) {
      delete cacheStore[key]
    }
  })
}

/**
 * Obtiene un valor de la caché o lo calcula si no existe
 * @param key Clave de la caché
 * @param fetchFn Función para obtener el valor si no está en caché
 * @param ttl Tiempo de vida en milisegundos (opcional)
 * @returns El valor almacenado o calculado
 */
export async function getOrSetCache<T>(key: string, fetchFn: () => Promise<T>, ttl: number = DEFAULT_TTL): Promise<T> {
  // Intentar obtener el valor de la caché
  const cachedValue = await getCacheValue<T>(key)

  // Si existe en la caché, devolverlo
  if (cachedValue !== null) {
    return cachedValue
  }

  // Si no existe, calcularlo
  const freshValue = await fetchFn()

  // Almacenarlo en la caché
  await setCacheValue(key, freshValue, ttl)

  // Devolverlo
  return freshValue
}
