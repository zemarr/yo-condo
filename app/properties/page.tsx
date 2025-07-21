"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { PropertyGrid } from "@/components/property/property-grid"
import { SearchFiltersComponent } from "@/components/search/search-filters"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockProperties } from "@/lib/mock-data"
import { SearchFilters } from "@/lib/types"
import {
  Grid3X3,
  Map,
  // SlidersHorizontal,
  // ArrowUpDown
} from "lucide-react"

export default function PropertiesPage() {
  const [ searchFilters, setSearchFilters ] = useState<SearchFilters>({
    priceRange: [ 0, 5000000 ],
    propertyType: [],
    bedrooms: null,
    bathrooms: null,
    minArea: null,
    maxArea: null,
    location: "",
    status: "all"
  })

  const [ viewMode, setViewMode ] = useState<"grid" | "map">("grid")
  const [ sortBy, setSortBy ] = useState("newest")

  // Filter properties based on search filters
  const filteredProperties = mockProperties.filter((property) => {
    // Price filter
    if (property.price < searchFilters.priceRange[ 0 ] || property.price > searchFilters.priceRange[ 1 ]) {
      return false
    }

    // Property type filter
    if (searchFilters.propertyType.length > 0 && !searchFilters.propertyType.includes(property.type)) {
      return false
    }

    // Bedrooms filter
    if (searchFilters.bedrooms && property.bedrooms < searchFilters.bedrooms) {
      return false
    }

    // Bathrooms filter
    if (searchFilters.bathrooms && property.bathrooms < searchFilters.bathrooms) {
      return false
    }

    // Area filter
    if (searchFilters.minArea && property.area < searchFilters.minArea) {
      return false
    }
    if (searchFilters.maxArea && property.area > searchFilters.maxArea) {
      return false
    }

    // Location filter (simple text search)
    if (searchFilters.location &&
      !property.location.city.toLowerCase().includes(searchFilters.location.toLowerCase()) &&
      !property.location.state.toLowerCase().includes(searchFilters.location.toLowerCase()) &&
      !property.location.address.toLowerCase().includes(searchFilters.location.toLowerCase())) {
      return false
    }

    // Status filter
    if (searchFilters.status !== "all" && property.status !== searchFilters.status) {
      return false
    }

    return true
  })

  // Sort properties
  const sortedProperties = [ ...filteredProperties ].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
        return new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime()
      case "oldest":
        return new Date(a.listedDate).getTime() - new Date(b.listedDate).getTime()
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Search Filters */}
        <div className="mb-8">
          <SearchFiltersComponent onFiltersChange={setSearchFilters} />
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Properties for Sale & Rent</h1>
            <p className="text-muted-foreground">
              {sortedProperties.length} properties found
              {searchFilters.location && ` in ${ searchFilters.location }`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-md text-sm bg-background"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* View Toggle */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("map")}
                className="rounded-l-none"
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(searchFilters.propertyType.length > 0 || searchFilters.bedrooms || searchFilters.bathrooms || searchFilters.location) && (
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {searchFilters.location && (
              <Badge variant="secondary">Location: {searchFilters.location}</Badge>
            )}
            {searchFilters.propertyType.map((type) => (
              <Badge key={type} variant="secondary">{type}</Badge>
            ))}
            {searchFilters.bedrooms && (
              <Badge variant="secondary">{searchFilters.bedrooms}+ bedrooms</Badge>
            )}
            {searchFilters.bathrooms && (
              <Badge variant="secondary">{searchFilters.bathrooms}+ bathrooms</Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchFilters({
                priceRange: [ 0, 5000000 ],
                propertyType: [],
                bedrooms: null,
                bathrooms: null,
                minArea: null,
                maxArea: null,
                location: "",
                status: "all"
              })}
              className="h-6 px-2 text-xs"
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Results */}
        {viewMode === "grid" ? (
          <PropertyGrid properties={sortedProperties} />
        ) : (
          <Card className="h-96 flex items-center justify-center">
            <div className="text-center">
              <Map className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Interactive Map View</h3>
              <p className="text-muted-foreground">
                Map integration with property markers coming soon
              </p>
            </div>
          </Card>
        )}

        {sortedProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No properties found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search filters to find more properties.
            </p>
            <Button
              onClick={() => setSearchFilters({
                priceRange: [ 0, 5000000 ],
                propertyType: [],
                bedrooms: null,
                bathrooms: null,
                minArea: null,
                maxArea: null,
                location: "",
                status: "all"
              })}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
