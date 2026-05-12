
import { ShoppingCart, Heart, Star } from "lucide-react"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const cartContext = useContext(CartContext)

  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addToCart(product)
    }
  }

  return (
    <div className="group">
      <div
        className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* IMAGE CONTAINER */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />
          
          {/* OVERLAY ACTIONS */}
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="rounded-full bg-white/90 p-2 text-foreground backdrop-blur-sm transition hover:bg-white hover:scale-110"
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <button 
                onClick={handleAddToCart}
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                <ShoppingCart className="mr-2 inline h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* RATING BADGE */}
          <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm backdrop-blur-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.5</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>

          {/* PRICE + BUTTON */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground line-through">
                ${(product.price * 1.2).toFixed(2)}
              </p>
            </div>

            <button 
              onClick={handleAddToCart}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 hover:scale-105"
            >
              <ShoppingCart className="mr-1 inline h-4 w-4" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
