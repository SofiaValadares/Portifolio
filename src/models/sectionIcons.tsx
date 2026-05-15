import {
  AtSign,
  BarChart3,
  Briefcase,
  CheckSquare,
  Code2,
  Database,
  Layers,
  type LucideProps,
} from 'lucide-react'

type IconProps = Pick<LucideProps, 'className' | 'size' | 'strokeWidth'>

const navIconDefaults: LucideProps = {
  size: 20,
  strokeWidth: 2,
  'aria-hidden': true,
}

export function IconCheckSquare({ className, size, strokeWidth }: IconProps) {
  return (
    <CheckSquare
      className={className}
      size={size ?? navIconDefaults.size}
      strokeWidth={strokeWidth ?? navIconDefaults.strokeWidth}
      aria-hidden
    />
  )
}

export function IconLayers({ className, size, strokeWidth }: IconProps) {
  return (
    <Layers
      className={className}
      size={size ?? navIconDefaults.size}
      strokeWidth={strokeWidth ?? navIconDefaults.strokeWidth}
      aria-hidden
    />
  )
}

export function IconBriefcase({ className, size, strokeWidth }: IconProps) {
  return (
    <Briefcase
      className={className}
      size={size ?? navIconDefaults.size}
      strokeWidth={strokeWidth ?? navIconDefaults.strokeWidth}
      aria-hidden
    />
  )
}

export function IconAtSign({ className, size, strokeWidth }: IconProps) {
  return (
    <AtSign
      className={className}
      size={size ?? navIconDefaults.size}
      strokeWidth={strokeWidth ?? navIconDefaults.strokeWidth}
      aria-hidden
    />
  )
}

export function IconCode({ className, size, strokeWidth }: IconProps) {
  return (
    <Code2
      className={className}
      size={size ?? navIconDefaults.size}
      strokeWidth={strokeWidth ?? navIconDefaults.strokeWidth}
      aria-hidden
    />
  )
}

export function IconDatabase({ className, size, strokeWidth }: IconProps) {
  return (
    <Database
      className={className}
      size={size ?? navIconDefaults.size}
      strokeWidth={strokeWidth ?? navIconDefaults.strokeWidth}
      aria-hidden
    />
  )
}

export function IconBarChart({ className, size, strokeWidth }: IconProps) {
  return (
    <BarChart3
      className={className}
      size={size ?? navIconDefaults.size}
      strokeWidth={strokeWidth ?? navIconDefaults.strokeWidth}
      aria-hidden
    />
  )
}
