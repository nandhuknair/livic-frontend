import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Grid2X2, Grid3X3, LayoutGrid, Filter, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface Product {
  id: number
  name: string
  price: number
  image: string
  availableSizes: string[]
}

export default function ProductList() {
  const [gridView, setGridView] = useState<'2x2' | '3x3' | '4x4'>('4x4')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const products: Product[] = [
    {
      id: 1,
      name: "Brown Flannel Checks Shirt",
      price: 1299,
      image: "/placeholder.svg?height=400&width=300",
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: "Grey Flannel Checks Shirt",
      price: 1299,
      image: "/placeholder.svg?height=400&width=300",
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: "Black Textured Polo T-Shirt",
      price: 1099,
      image: "/placeholder.svg?height=400&width=300",
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 4,
      name: "Pink Textured Polo T-Shirt",
      price: 1099,
      image: "/placeholder.svg?height=400&width=300",
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
  ]

  const collections = [
    { name: 'SHIRTS', count: 256 },
    { name: 'T-SHIRTS', count: 65 },
    { name: 'TROUSERS', count: 55 },
    { name: 'JEANS', count: 55 },
    { name: 'JACKETS', count: 30 },
    { name: 'CARGO PANTS', count: 20 },
    { name: 'SWEATERS', count: 18 },
  ]

  const sizes = [
    { name: 'S', count: 362 },
    { name: 'M', count: 375 },
    { name: 'L', count: 377 },
    { name: 'XL', count: 382 },
    { name: 'XXL', count: 362 },
    { name: '28', count: 40 },
    { name: '30', count: 142 },
  ]

  const fits = [
    { name: 'Baggy Fit', count: 10 },
    { name: 'Bootcut', count: 12 },
    { name: 'Box Fit', count: 23 },
    { name: 'Loose Fit', count: 6 },
    { name: 'Oversized Fit', count: 24 },
    { name: 'Regular Fit', count: 23 },
    { name: 'Relaxed Fit', count: 89 },
  ]

  const FilterSection = ({ title, items }: { title: string, items: { name: string, count: number }[] }) => (
    <div className="mb-8 ">
      <h3 className="font-semibold mb-4 text-lg">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item.name} className="flex items-center space-x-2 cursor-pointer">
            <Checkbox id={item.name} />
            <span className="text-sm">{item.name}</span>
            <span className="text-sm text-gray-500">({item.count})</span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Refine your product search
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 overflow-y-auto h-[calc(100vh-120px)]">
                <FilterSection title="Collections" items={collections} />
                <FilterSection title="Size" items={sizes} />
                <FilterSection title="Fit" items={fits} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Filters Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <FilterSection title="Collections" items={collections} />
          <FilterSection title="Size" items={sizes} />
          <FilterSection title="Fit" items={fits} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">View As</span>
              <div className="flex gap-1 border rounded-lg p-1">
                <Button
                  variant={gridView === '2x2' ? 'secondary' : 'ghost'}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setGridView('2x2')}
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button
                  variant={gridView === '3x3' ? 'secondary' : 'ghost'}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setGridView('3x3')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={gridView === '4x4' ? 'secondary' : 'ghost'}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setGridView('4x4')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Select defaultValue="curated">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="curated">Curated For You</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            gridView === '2x2' ? 'grid-cols-1 sm:grid-cols-2' :
            gridView === '3x3' ? 'grid-cols-2 sm:grid-cols-3' :
            'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
          }`}>
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-2 text-sm sm:text-base">{product.name}</h3>
                <p className="text-gray-900 mb-2 font-bold">₹{product.price}</p>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}