import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart } from 'lucide-react'

const ProductShowcase: React.FC = () => {
  const productImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ]

  const relatedProducts = [
    { id: 1, name: "Related Product 1", price: "$99.99", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Related Product 2", price: "$89.99", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Related Product 3", price: "$109.99", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Related Product 4", price: "$79.99", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="font-sans">
      {/* Full-width image slider */}
      <Carousel className="w-full">
        <CarouselContent>
          {productImages.map((image, index) => (
            <CarouselItem key={index}>
              <img src={image} alt={`Product view ${index + 1}`} className="w-full h-[60vh] object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>

      {/* Product details */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">Premium Cotton T-Shirt</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(125 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, 
              this shirt offers a perfect blend of style and comfort for everyday wear.
            </p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Available Colors</h2>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-white border border-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Select Size</h2>
              <div className="flex space-x-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <Button key={size} variant="outline" className="w-12 h-12">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-3xl font-bold mb-4">$49.99</p>
              <Button className="w-full mb-4 bg-black text-white hover:bg-gray-800">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShowcase