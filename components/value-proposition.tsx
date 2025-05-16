import { Lightbulb, Users, Target, Heart } from "lucide-react"

export default function ValueProposition() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Nuestra Propuesta de Valor
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Contribuimos en la búsqueda constante de la esencia del desarrollo humano
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Capacitación Integral</h3>
            <p className="text-gray-600">
              Nuestros programas abordan todas las dimensiones del ser humano para un desarrollo completo.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-3 bg-secondary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Enfoque Colaborativo</h3>
            <p className="text-gray-600">Trabajamos juntos para descubrir y potenciar tus capacidades únicas.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Descubrimiento Personal</h3>
            <p className="text-gray-600">Te ayudamos a identificar y desarrollar tus potencialidades ocultas.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-3 bg-secondary/10 rounded-full mb-4">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Desarrollo Humano</h3>
            <p className="text-gray-600">Nuestro objetivo es contribuir a tu crecimiento personal y profesional.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
