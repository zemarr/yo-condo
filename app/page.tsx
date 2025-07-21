/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { PropertyGrid } from "@/components/property/property-grid"
import { SearchFiltersComponent } from "@/components/search/search-filters"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockProperties } from "@/lib/mock-data"
import { SearchFilters } from "@/lib/types"
import {
  TrendingUp,
  MapPin,
  Users,
  Shield,
  ArrowRight,
  Star,
  Search,
  Home,
  Building2
} from "lucide-react"

export default function HomePage() {
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

  const featuredProperties = mockProperties.filter(p => p.featured)
  const recentProperties = mockProperties.slice(0, 6)

  const stats = [
    { label: "Properties Listed", value: "10,000+", icon: Home },
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Cities Covered", value: "100+", icon: MapPin },
    { label: "Years Experience", value: "15+", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
            alt="Modern homes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {" "}Dream Condo
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the perfect property with our revolutionary real estate platform.
            High-quality listings, interactive maps, and seamless transactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5 mr-2" />
              Browse Properties
            </Button>
            <Button size="lg" variant="outline" className="text-foreground border-white">
              <Building2 className="h-5 w-5 mr-2" />
              List Your Condo
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SearchFiltersComponent onFiltersChange={setSearchFilters} />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Properties</Badge>
            <h2 className="text-3xl font-bold mb-4">Handpicked Premium Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully selected premium properties that offer exceptional value
              and outstanding features for discerning buyers and renters.
            </p>
          </div>

          <PropertyGrid properties={featuredProperties} className="mb-8" />

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/properties">
                View All Properties
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Listings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Listings</h2>
              <p className="text-muted-foreground">Fresh properties just added to our platform</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/properties">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <PropertyGrid properties={recentProperties} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose YoCondo?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the most comprehensive and user-friendly real estate platform
              with cutting-edge features to make your property journey seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Advanced Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Find exactly what you&apos;re looking for with our powerful search filters
                  and intelligent recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Interactive Maps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Explore neighborhoods with our interactive maps showing schools,
                  transport, and local amenities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Secure Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Complete your property transactions with confidence using our
                  secure platform and verified agents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect home through YoCondo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Searching
            </Button>
            <Button size="lg" variant="outline" className="!bg-secondary-foreground dark:!bg-foreground/70 dark:!text-background/90 border dark:!border-background/30 !text-secondary/90 !border-secondary/60">
              List Your Condo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  YoCondo
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted partner in finding the perfect property.
                Revolutionizing real estate with technology and innovation.
              </p>
              <div className="flex gap-2">
                {[ 1, 2, 3, 4, 5 ].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">4.9/5 rating</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Buyers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/buy" className="hover:text-foreground">Browse Properties</Link></li>
                <li><Link href="/mortgage" className="hover:text-foreground">Mortgage Calculator</Link></li>
                <li><Link href="/neighborhoods" className="hover:text-foreground">Neighborhood Guide</Link></li>
                <li><Link href="/buying-guide" className="hover:text-foreground">Buying Guide</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Sellers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/sell" className="hover:text-foreground">List Your Condo</Link></li>
                <li><Link href="/valuation" className="hover:text-foreground">Property Valuation</Link></li>
                <li><Link href="/agents" className="hover:text-foreground">Find an Agent</Link></li>
                <li><Link href="/selling-guide" className="hover:text-foreground">Selling Guide</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="/press" className="hover:text-foreground">Press</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 YoCondo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
