import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines clsx for conditional classes with tailwind-merge for proper Tailwind CSS class merging.
 * This utility helps avoid class conflicts when conditionally applying Tailwind classes.
 *
 * @param inputs - Class values to combine
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
