import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold text-white">A&G Capacitación</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-xs">
              Contribuimos en la búsqueda constante de la esencia del desarrollo humano a través de capacitación y
              consultoría integral y colaborativa.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-gray-400 hover:text-white">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Cursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos/desarrollo-personal" className="text-gray-400 hover:text-white">
                  Desarrollo Personal
                </Link>
              </li>
              <li>
                <Link href="/cursos/liderazgo" className="text-gray-400 hover:text-white">
                  Liderazgo
                </Link>
              </li>
              <li>
                <Link href="/cursos/inteligencia-emocional" className="text-gray-400 hover:text-white">
                  Inteligencia Emocional
                </Link>
              </li>
              <li>
                <Link href="/cursos/comunicacion" className="text-gray-400 hover:text-white">
                  Comunicación Efectiva
                </Link>
              </li>
              <li>
                <Link href="/cursos/coaching" className="text-gray-400 hover:text-white">
                  Coaching
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">Av. Principal #123, Ciudad</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">+52 123 456 7890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">info@agcapacitacion.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} A&G Capacitación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
