import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-secondary/10 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              A&G Capacitación
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Capacitación y consultoría integral y colaborativa para el desarrollo de tus potencialidades.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link href="/cursos">Explorar Cursos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/nosotros">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('/abstract-geometric-pattern.png')] bg-cover bg-center opacity-10"></div>
    </section>
  )
}
