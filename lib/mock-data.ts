import { Property } from "./types"

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Luxury Villa with Ocean View",
    price: 2450000,
    type: "villa",
    status: "for-sale",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    ],
    location: {
      address: "123 Ocean Drive",
      city: "Malibu",
      state: "CA",
      zipCode: "90265",
      coordinates: { lat: 34.0259, lng: -118.7798 }
    },
    features: [ "Ocean View", "Private Pool", "Smart Home", "Wine Cellar", "3-Car Garage" ],
    description: "Stunning modern villa perched on the cliffs of Malibu with breathtaking ocean views. This architectural masterpiece features floor-to-ceiling windows, an infinity pool, and premium finishes throughout.",
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@propexplorer.com",
      avatar: "https://images.unsplash.com/photo-1681500920181-0aff411f8cab?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    listedDate: "2024-01-15",
    featured: true
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    price: 4500,
    type: "apartment",
    status: "for-rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    ],
    location: {
      address: "456 Metropolitan Ave",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    features: [ "City View", "Concierge", "Gym", "Rooftop Terrace", "In-unit Laundry" ],
    description: "Elegant 2-bedroom apartment in the heart of Manhattan. Features modern amenities, stunning city views, and access to building's luxury facilities.",
    agent: {
      name: "Michael Chen",
      phone: "(555) 987-6543",
      email: "michael@propexplorer.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    listedDate: "2024-01-20",
    featured: true
  },
  {
    id: "3",
    title: "Charming Suburban Family Home",
    price: 750000,
    type: "house",
    status: "for-sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop"
    ],
    location: {
      address: "789 Maple Street",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
      coordinates: { lat: 30.2672, lng: -97.7431 }
    },
    features: [ "Backyard", "Fireplace", "Updated Kitchen", "Hardwood Floors", "2-Car Garage" ],
    description: "Beautiful family home in a quiet neighborhood. Perfect for families with excellent schools nearby and a spacious backyard for children to play.",
    agent: {
      name: "Emily Rodriguez",
      phone: "(555) 456-7890",
      email: "emily@propexplorer.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    listedDate: "2024-01-18"
  },
  {
    id: "4",
    title: "Modern Downtown Condo",
    price: 895000,
    type: "condo",
    status: "for-sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
    ],
    location: {
      address: "321 Urban Plaza",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      coordinates: { lat: 47.6062, lng: -122.3321 }
    },
    features: [ "Mountain View", "Balcony", "Modern Kitchen", "Parking", "Pet Friendly" ],
    description: "Sleek modern condo with stunning mountain views. Located in the heart of Seattle with easy access to tech companies and vibrant nightlife.",
    agent: {
      name: "David Kim",
      phone: "(555) 321-0987",
      email: "david@propexplorer.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    listedDate: "2024-01-22",
    featured: true
  },
  {
    id: "5",
    title: "Cozy Townhouse with Garden",
    price: 3200,
    type: "townhouse",
    status: "for-rent",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
    ],
    location: {
      address: "654 Garden Lane",
      city: "Portland",
      state: "OR",
      zipCode: "97201",
      coordinates: { lat: 45.5152, lng: -122.6784 }
    },
    features: [ "Private Garden", "Fireplace", "Updated Appliances", "Quiet Street", "Storage" ],
    description: "Charming townhouse with a private garden. Perfect for those who love outdoor space while being close to the city center.",
    agent: {
      name: "Lisa Wang",
      phone: "(555) 654-3210",
      email: "lisa@propexplorer.com",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    listedDate: "2024-01-25"
  },
  {
    id: "6",
    title: "Executive Penthouse Suite",
    price: 8500,
    type: "apartment",
    status: "for-rent",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    images: [
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=800&h=600&fit=crop"
    ],
    location: {
      address: "999 Skyline Boulevard",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    features: [ "Panoramic Views", "Private Elevator", "Rooftop Access", "Premium Finishes", "Concierge" ],
    description: "Luxury penthouse with breathtaking panoramic views of Miami Beach. Features the finest finishes and exclusive building amenities.",
    agent: {
      name: "Carlos Martinez",
      phone: "(555) 789-0123",
      email: "carlos@propexplorer.com",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    listedDate: "2024-01-28",
    featured: true
  }
]
