/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { SearchFilters } from "@/lib/types"
import { Search, MapPin, Home, Filter, X } from "lucide-react"

interface SearchFiltersProps {
  onFiltersChange: (filters: SearchFilters) => void
  className?: string
}

export function SearchFiltersComponent({ onFiltersChange, className }: SearchFiltersProps) {
  const [ filters, setFilters ] = useState<SearchFilters>({
    priceRange: [ 0, 5000000 ],
    propertyType: [],
    bedrooms: null,
    bathrooms: null,
    minArea: null,
    maxArea: null,
    location: "",
    status: "all"
  })

  const [ showAdvanced, setShowAdvanced ] = useState(false)

  const propertyTypes = [
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "condo", label: "Condo" },
    { value: "townhouse", label: "Townhouse" },
    { value: "villa", label: "Villa" }
  ]

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFiltersChange(updatedFilters)
  }

  const togglePropertyType = (type: string) => {
    const newTypes = filters.propertyType.includes(type)
      ? filters.propertyType.filter(t => t !== type)
      : [ ...filters.propertyType, type ]
    updateFilters({ propertyType: newTypes })
  }

  const clearFilters = () => {
    const defaultFilters: SearchFilters = {
      priceRange: [ 0, 5000000 ],
      propertyType: [],
      bedrooms: null,
      bathrooms: null,
      minArea: null,
      maxArea: null,
      location: "",
      status: "all"
    }
    setFilters(defaultFilters)
    onFiltersChange(defaultFilters)
  }

  return (
    <Card className={className}>
      <CardContent className="p-6 py-0">
        {/* Primary Search */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="md:col-span-2">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter city, neighborhood, or address"
                value={filters.location}
                onChange={(e) => updateFilters({ location: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={filters.status} onValueChange={(value: any) => updateFilters({ status: value })}>
            <SelectTrigger className="md:col-span-1 w-full">
              <SelectValue placeholder="Buy or Rent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="for-rent">For Rent</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        {/* Advanced Filters Toggle */}
        <div className={`${ showAdvanced && "mb-4" } flex items-center gap-1`}>
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-xs !px-0"
          >
            <Filter className="h-4 w-4 mr-2" />
            {showAdvanced ? "Hide" : "Show"} Advanced Filters
          </Button>

          {(filters.propertyType.length > 0 || filters.bedrooms || filters.bathrooms) && (
            <Button variant="ghost" onClick={clearFilters} className="text-sm">
              <X className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="space-y-6 pt-4 border-t">
            {/* Property Type */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Property Type</Label>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((type) => (
                  <Badge
                    key={type.value}
                    variant={filters.propertyType.includes(type.value) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => togglePropertyType(type.value)}
                  >
                    <Home className="h-3 w-3 mr-1" />
                    {type.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Price Range: ${filters.priceRange[ 0 ].toLocaleString()} - ${filters.priceRange[ 1 ].toLocaleString()}
              </Label>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilters({ priceRange: [ value[ 0 ], value[ 1 ] ] })}
                max={5000000}
                min={0}
                step={50000}
                className="w-full"
              />
            </div>

            {/* Bedrooms & Bathrooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Bedrooms</Label>
                <Select value={filters.bedrooms?.toString() || ""} onValueChange={(value) => updateFilters({ bedrooms: value ? parseInt(value) : null })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Bathrooms</Label>
                <Select value={filters.bathrooms?.toString() || ""} onValueChange={(value) => updateFilters({ bathrooms: value ? parseInt(value) : null })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Square Footage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Min Area (sqft)</Label>
                <Input
                  type="number"
                  placeholder="Min sqft"
                  value={filters.minArea || ""}
                  onChange={(e) => updateFilters({ minArea: e.target.value ? parseInt(e.target.value) : null })}
                />
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">Max Area (sqft)</Label>
                <Input
                  type="number"
                  placeholder="Max sqft"
                  value={filters.maxArea || ""}
                  onChange={(e) => updateFilters({ maxArea: e.target.value ? parseInt(e.target.value) : null })}
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
