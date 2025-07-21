import { Property } from "@/lib/types"
import { PropertyCard } from "./property-card"

interface PropertyGridProps {
  properties: Property[]
  className?: string
}

export function PropertyGrid({ properties, className }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2">No properties found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search filters to find more properties.
        </p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${ className }`}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
