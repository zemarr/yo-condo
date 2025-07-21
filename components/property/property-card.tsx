"use client"

import Image from "next/image"
import Link from "next/link"
import { Property } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Mail
} from "lucide-react"
import { cn, formatPrice, getStatusColor } from "@/lib/utils"

interface PropertyCardProps {
  property: Property
  className?: string
}

export function PropertyCard({ property, className }: PropertyCardProps) {

  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-all duration-300 group py-0", className)}>
      <div className="relative">
        <Link href={`/property/${ property.id }`}>
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={property.images[ 0 ]}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={cn(getStatusColor(property.status), 'text-[10px]')}>
            {property.status.replace("-", " ").toUpperCase()}
          </Badge>
          {property.featured && (
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 text-[10px]">
              FEATURED
            </Badge>
          )}
        </div>

        {/* Heart button */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Price overlay */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/95 dark:bg-black/95 px-3 py-1 rounded-lg">
            <span className="font-bold text-lg text-primary">
              {formatPrice(property.price, property.status)}
            </span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <Link href={`/property/${ property.id }`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">
            {property.location.city}, {property.location.state}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms} Bedroom{property.bedrooms > 1 ? "s" : ""}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms} Bathroom{property.bathrooms > 1 ? "s" : ""}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Agent info */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-2">
            <Image
              src={property.agent.avatar}
              alt={property.agent.name}
              width={32}
              height={32}
              className="rounded-full text-[10px] h-8 overflow-hidden"
            />
            <div>
              <p className="font-medium text-sm">{property.agent.name}</p>
              <p className="text-xs text-muted-foreground">Agent</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Phone className="h-3 w-3" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Mail className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
