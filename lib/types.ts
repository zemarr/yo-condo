export interface Property {
  id: string
  title: string
  price: number
  type: "house" | "apartment" | "condo" | "townhouse" | "villa"
  status: "for-sale" | "for-rent" | "sold" | "rented"
  bedrooms: number
  bathrooms: number
  area: number // in sqft
  images: string[]
  location: {
    address: string
    city: string
    state: string
    zipCode: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  features: string[]
  description: string
  agent: {
    name: string
    phone: string
    email: string
    avatar: string
  }
  listedDate: string
  featured?: boolean
}

export interface SearchFilters {
  priceRange: [number, number]
  propertyType: string[]
  bedrooms: number | null
  bathrooms: number | null
  minArea: number | null
  maxArea: number | null
  location: string
  status: "for-sale" | "for-rent" | "all"
}
