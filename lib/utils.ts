import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function replacePlaceholders(
  text: string,
  params: Record<string, string>
): string {
  let result = text
  Object.entries(params).forEach(([key, value]) => {
    const placeholder = `{{${key.toUpperCase()}}}`
    result = result.replace(new RegExp(placeholder, "g"), value || placeholder)
  })
  return result
}
