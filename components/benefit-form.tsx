"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface Benefit {
  id: string
  content: string
}

interface BenefitFormProps {
  benefit: Benefit
  benefitIndex: number
  onBenefitChange: (benefitId: string, value: string) => void
  onRemoveBenefit: (benefitId: string) => void
}

export default function BenefitForm({ benefit, benefitIndex, onBenefitChange, onRemoveBenefit }: BenefitFormProps) {
  return (
    <div className="flex items-center gap-2">
      <Input
        value={benefit.content}
        onChange={(e) => onBenefitChange(benefit.id, e.target.value)}
        placeholder={`Beneficio ${benefitIndex}`}
        className="flex-1"
      />
      <Button variant="outline" size="icon" onClick={() => onRemoveBenefit(benefit.id)} disabled={benefitIndex === 1}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
