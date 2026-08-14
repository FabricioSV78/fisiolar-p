import {
  Activity,
  Baby,
  Bone,
  Brain,
  Dumbbell,
  HeartPulse,
  Magnet,
  Radio,
  RotateCcw,
  Sparkles,
  Waves,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconKey } from '../data/content'

const iconMap: Record<IconKey, LucideIcon> = {
  activity: Activity,
  baby: Baby,
  bone: Bone,
  brain: Brain,
  dumbbell: Dumbbell,
  heartPulse: HeartPulse,
  magnet: Magnet,
  radio: Radio,
  rotate: RotateCcw,
  sparkles: Sparkles,
  waves: Waves,
  zap: Zap,
}

type TreatmentIconProps = {
  name: IconKey
  size?: number
  strokeWidth?: number
}

export function TreatmentIcon({ name, size = 24, strokeWidth = 1.8 }: TreatmentIconProps) {
  const Icon = iconMap[name]
  return <Icon aria-hidden="true" size={size} strokeWidth={strokeWidth} />
}
