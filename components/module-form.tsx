"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { PlusCircle, Trash2 } from "lucide-react"

interface Lesson {
  id: string
  content: string
}

interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

interface ModuleFormProps {
  module: Module
  moduleIndex: number
  onModuleChange: (moduleId: string, field: string, value: string) => void
  onRemoveModule: (moduleId: string) => void
  onAddLesson: (moduleId: string) => void
  onLessonChange: (moduleId: string, lessonId: string, value: string) => void
  onRemoveLesson: (moduleId: string, lessonId: string) => void
}

export default function ModuleForm({
  module,
  moduleIndex,
  onModuleChange,
  onRemoveModule,
  onAddLesson,
  onLessonChange,
  onRemoveLesson,
}: ModuleFormProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Módulo {moduleIndex}</h3>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onRemoveModule(module.id)}
              disabled={moduleIndex === 1}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`module-${module.id}-title`}>Título del Módulo</Label>
            <Input
              id={`module-${module.id}-title`}
              value={module.title}
              onChange={(e) => onModuleChange(module.id, "title", e.target.value)}
              placeholder="Ej. Introducción a las Habilidades Gerenciales"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`module-${module.id}-description`}>Descripción del Módulo</Label>
            <Textarea
              id={`module-${module.id}-description`}
              value={module.description}
              onChange={(e) => onModuleChange(module.id, "description", e.target.value)}
              placeholder="Breve descripción del contenido del módulo"
              rows={2}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Lecciones</Label>
              <Button variant="outline" size="sm" onClick={() => onAddLesson(module.id)}>
                <PlusCircle className="mr-2 h-3 w-3" />
                Agregar Lección
              </Button>
            </div>

            <div className="space-y-3 pl-4 border-l-2 border-gray-200">
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lesson.id} className="flex items-start gap-2">
                  <Input
                    value={lesson.content}
                    onChange={(e) => onLessonChange(module.id, lesson.id, e.target.value)}
                    placeholder={`Lección ${lessonIndex + 1}`}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onRemoveLesson(module.id, lesson.id)}
                    disabled={module.lessons.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
