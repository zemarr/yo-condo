import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number, status: string) => {
  if (status === "for-rent") {
    return `$${ price.toLocaleString() }/mo`
  }
  return `$${ price.toLocaleString() }`
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "for-sale":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400"
    case "for-rent":
      return "bg-blue-900 text-background dark:bg-blue-900 dark:text-foreground"
    case "sold":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400"
    case "rented":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400"
  }
}