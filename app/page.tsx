import Hero from "@/components/hero"
import FeaturedCourses from "@/components/featured-courses"
import ValueProposition from "@/components/value-proposition"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <FeaturedCourses />
      <Testimonials />
    </div>
  )
}
