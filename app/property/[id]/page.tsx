"use client"

import { useState } from "react"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockProperties } from "@/lib/mock-data"
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  Phone,
  Mail,
  CalendarDays,
  Car,
  Wifi,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

// interface PropertyDetailParams {
//   id: string
// }

export default function PropertyDetailPage() {
  const params = useParams();
  const id = params.id;
  const property = mockProperties.find(p => p.id === id);
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0)

  if (!property) {
    notFound()
  }

  const formatPrice = (price: number, status: string) => {
    if (status === "for-rent") {
      return `$${ price.toLocaleString() }/mo`
    }
    return `$${ price.toLocaleString() }`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "for-sale":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "for-rent":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "sold":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
      case "rented":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-8">
          <Image
            src={property.images[ currentImageIndex ]}
            alt={property.title}
            fill
            className="object-cover"
          />

          {/* Navigation buttons */}
          {property.images.length > 1 && (
            <>
              <Button
                size="icon"
                variant="secondary"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${ index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>

          {/* Overlay badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className={getStatusColor(property.status)}>
              {property.status.replace("-", " ").toUpperCase()}
            </Badge>
            {property.featured && (
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                FEATURED
              </Badge>
            )}
          </div>

          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button size="icon" variant="secondary" className="bg-white/80 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="bg-white/80 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-4">
                {formatPrice(property.price, property.status)}
              </div>
            </div>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Square className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{property.area.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <CalendarDays className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold">{new Date(property.listedDate).getFullYear()}</div>
                    <div className="text-sm text-muted-foreground">Listed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {/* Additional common features */}
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span>High-Speed Internet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Security System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Updated Electrical</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Parking Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Location & Neighborhood</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                    <p className="text-sm text-muted-foreground">
                      {property.location.address}, {property.location.city}, {property.location.state}
                    </p>
                  </div>
                </div>

                {/* Neighborhood info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="font-semibold">Walk Score</div>
                    <div className="text-2xl font-bold text-green-600">85</div>
                    <div className="text-sm text-muted-foreground">Very Walkable</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="font-semibold">Transit Score</div>
                    <div className="text-2xl font-bold text-blue-600">72</div>
                    <div className="text-sm text-muted-foreground">Excellent Transit</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="font-semibold">Bike Score</div>
                    <div className="text-2xl font-bold text-purple-600">68</div>
                    <div className="text-sm text-muted-foreground">Very Bikeable</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{property.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">Licensed Real Estate Agent</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call {property.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>Estimate Monthly Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Home Price</label>
                    <div className="text-lg font-semibold">{formatPrice(property.price, property.status)}</div>
                  </div>

                  {property.status === "for-sale" && (
                    <>
                      <div>
                        <label className="text-sm font-medium">Down Payment (20%)</label>
                        <div className="text-lg font-semibold">${(property.price * 0.2).toLocaleString()}</div>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Estimated Monthly Payment</label>
                        <div className="text-xl font-bold text-primary">
                          ${Math.round((property.price * 0.8 * 0.00417)).toLocaleString()}/mo
                        </div>
                        <p className="text-xs text-muted-foreground">*Estimated at 5% interest rate</p>
                      </div>
                    </>
                  )}

                  <Button variant="outline" className="w-full">
                    Get Pre-Approved
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Tour */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    Schedule In-Person Tour
                  </Button>
                  <Button variant="outline" className="w-full">
                    Virtual Tour
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Available 7 days a week from 9 AM to 7 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
