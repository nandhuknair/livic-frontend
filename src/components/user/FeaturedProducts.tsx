
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import image1 from '../../assets/WhatsApp Unknown 2024-11-08 at 3.33.33 PM/WhatsApp Image 2024-10-30 at 10.59.26 PM (1).jpeg'
import image2 from '../../assets/WhatsApp Unknown 2024-11-08 at 3.33.33 PM/WhatsApp Image 2024-10-30 at 10.59.26 PM (2).jpeg'
import image3 from '../../assets/WhatsApp Unknown 2024-11-08 at 3.33.33 PM/WhatsApp Image 2024-10-30 at 10.59.27 PM.jpeg'




const FeaturedProducts = () => {
    const featuredProducts = [
        { id: 1, name: "Classic White Shirt", price: 59.99, image: image1 },
        { id: 2, name: "Slim Fit Jeans", price: 79.99, image: image2 },
        { id: 3, name: "Leather Jacket", price: 199.99, image: image3 },
        { id: 4, name: "Casual Sneakers", price: 89.99, image: image3 },
      ]
  return (
    <div>
      
      <section id="products" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl  tracking-wider mb-10 text-center text-black">SEASONAL FAVS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="bg-white border border-gray-200">
                  <CardContent className="p-4">
                    <img src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover mb-4" />
                    <h3 className="font-semibold mb-2 text-black">{product.name}</h3>
                    <p className="text-black font-bold">${product.price.toFixed(2)}</p>
                    <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

    </div>
  )
}

export default FeaturedProducts
