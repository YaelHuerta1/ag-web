"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, ArrowLeft, Save, Eye } from "lucide-react"
import AdminLayout from "@/components/admin-layout"
import ModuleForm from "@/components/module-form"
import BenefitForm from "@/components/benefit-form"
import CoursePreview from "@/components/course-preview"

// Tipos para el formulario
interface Module {
  id: string
  title: string
  description: string
  lessons: { id: string; content: string }[]
}

interface Benefit {
  id: string
  content: string
}

interface CourseFormData {
  title: string
  shortDescription: string
  longDescription: string
  category: string
  hours: string
  price: string
  startDate: string
  instructor: {
    name: string
    bio: string
  }
  modules: Module[]
  benefits: Benefit[]
  image: string
}

export default function NewCoursePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("informacion")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<CourseFormData>({
    title: "",
    shortDescription: "",
    longDescription: "",
    category: "",
    hours: "",
    price: "",
    startDate: "",
    instructor: {
      name: "",
      bio: "",
    },
    modules: [
      {
        id: "1",
        title: "",
        description: "",
        lessons: [{ id: "1", content: "" }],
      },
    ],
    benefits: [{ id: "1", content: "" }],
    image: "/online-learning-platform.png",
  })

  // Manejadores para actualizar el estado del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleInstructorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      instructor: {
        ...prev.instructor,
        [name]: value,
      },
    }))
  }

  // Manejadores para módulos
  const handleAddModule = () => {
    setFormData((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        {
          id: Date.now().toString(),
          title: "",
          description: "",
          lessons: [{ id: Date.now().toString(), content: "" }],
        },
      ],
    }))
  }

  const handleModuleChange = (moduleId: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.map((module) => (module.id === moduleId ? { ...module, [field]: value } : module)),
    }))
  }

  const handleRemoveModule = (moduleId: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.filter((module) => module.id !== moduleId),
    }))
  }

  // Manejadores para lecciones
  const handleAddLesson = (moduleId: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              lessons: [...module.lessons, { id: Date.now().toString(), content: "" }],
            }
          : module,
      ),
    }))
  }

  const handleLessonChange = (moduleId: string, lessonId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              lessons: module.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, content: value } : lesson,
              ),
            }
          : module,
      ),
    }))
  }

  const handleRemoveLesson = (moduleId: string, lessonId: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              lessons: module.lessons.filter((lesson) => lesson.id !== lessonId),
            }
          : module,
      ),
    }))
  }

  // Manejadores para beneficios
  const handleAddBenefit = () => {
    setFormData((prev) => ({
      ...prev,
      benefits: [...prev.benefits, { id: Date.now().toString(), content: "" }],
    }))
  }

  const handleBenefitChange = (benefitId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      benefits: prev.benefits.map((benefit) => (benefit.id === benefitId ? { ...benefit, content: value } : benefit)),
    }))
  }

  const handleRemoveBenefit = (benefitId: string) => {
    setFormData((prev) => ({
      ...prev,
      benefits: prev.benefits.filter((benefit) => benefit.id !== benefitId),
    }))
  }

  // Envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validación básica
    if (!formData.title || !formData.shortDescription || !formData.category || !formData.hours || !formData.price) {
      toast({
        title: "Error de validación",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulación de envío a API
    setTimeout(() => {
      toast({
        title: "Curso creado exitosamente",
        description: "El curso ha sido agregado a la plataforma",
      })
      setIsSubmitting(false)
      router.push("/admin/dashboard")
    }, 1500)
  }

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => router.push("/admin/dashboard")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold">Agregar Nuevo Curso</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setActiveTab("vista-previa")}>
              <Eye className="mr-2 h-4 w-4" />
              Vista Previa
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              <Save className="mr-2 h-4 w-4" />
              {isSubmitting ? "Guardando..." : "Guardar Curso"}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="informacion">Información General</TabsTrigger>
            <TabsTrigger value="contenido">Contenido</TabsTrigger>
            <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
            <TabsTrigger value="vista-previa">Vista Previa</TabsTrigger>
          </TabsList>

          <TabsContent value="informacion">
            <Card className="p-6">
              <form className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Información del Curso</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Título del Curso *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Ej. Desarrollo de Habilidades Gerenciales"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoría *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => handleSelectChange("category", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Desarrollo Personal">Desarrollo Personal</SelectItem>
                          <SelectItem value="Liderazgo">Liderazgo</SelectItem>
                          <SelectItem value="Comunicación">Comunicación</SelectItem>
                          <SelectItem value="Inteligencia Emocional">Inteligencia Emocional</SelectItem>
                          <SelectItem value="Coaching">Coaching</SelectItem>
                          <SelectItem value="Bienestar">Bienestar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hours">Duración (horas) *</Label>
                      <Input
                        id="hours"
                        name="hours"
                        type="number"
                        value={formData.hours}
                        onChange={handleInputChange}
                        placeholder="Ej. 20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Precio (MXN) *</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Ej. 2500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Fecha de Inicio</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        placeholder="Ej. 15 de junio, 2025"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shortDescription">Descripción Corta *</Label>
                    <Textarea
                      id="shortDescription"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleInputChange}
                      placeholder="Breve descripción del curso (máximo 150 caracteres)"
                      rows={2}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="longDescription">Descripción Detallada</Label>
                    <Textarea
                      id="longDescription"
                      name="longDescription"
                      value={formData.longDescription}
                      onChange={handleInputChange}
                      placeholder="Descripción detallada del curso, sus objetivos y a quién está dirigido"
                      rows={5}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h2 className="text-xl font-semibold">Información del Instructor</h2>
                  <div className="space-y-2">
                    <Label htmlFor="instructor.name">Nombre del Instructor *</Label>
                    <Input
                      id="instructor.name"
                      name="name"
                      value={formData.instructor.name}
                      onChange={handleInstructorChange}
                      placeholder="Ej. María de los Angeles Aguiñaga Villaseñor"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instructor.bio">Biografía del Instructor</Label>
                    <Textarea
                      id="instructor.bio"
                      name="bio"
                      value={formData.instructor.bio}
                      onChange={handleInstructorChange}
                      placeholder="Breve biografía y experiencia del instructor"
                      rows={3}
                    />
                  </div>
                </div>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="contenido">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Contenido del Curso</h2>
                  <Button onClick={handleAddModule}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Agregar Módulo
                  </Button>
                </div>

                <div className="space-y-8">
                  {formData.modules.map((module, index) => (
                    <ModuleForm
                      key={module.id}
                      module={module}
                      moduleIndex={index + 1}
                      onModuleChange={handleModuleChange}
                      onRemoveModule={handleRemoveModule}
                      onAddLesson={handleAddLesson}
                      onLessonChange={handleLessonChange}
                      onRemoveLesson={handleRemoveLesson}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="beneficios">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Beneficios del Curso</h2>
                  <Button onClick={handleAddBenefit}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Agregar Beneficio
                  </Button>
                </div>

                <div className="space-y-4">
                  {formData.benefits.map((benefit, index) => (
                    <BenefitForm
                      key={benefit.id}
                      benefit={benefit}
                      benefitIndex={index + 1}
                      onBenefitChange={handleBenefitChange}
                      onRemoveBenefit={handleRemoveBenefit}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="vista-previa">
            <CoursePreview course={formData} />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
