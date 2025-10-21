"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/data/products"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.size,
      image: product.image,
    })
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className={`relative ${product.id === "palm-oil-20l" ? "aspect-[4/5]" : "aspect-square"} overflow-hidden bg-white`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={`${product.name} - ${product.size}`}
            fill
            className={`${product.category === "groundnut-oil" || product.category === "others" || product.id === "palm-oil-20l" || product.image.includes("Utmost_25L_Yellow") || product.image.includes("Utmost_-_Ragolis") || product.image.includes("Utmost_25L_Blue") ? "object-cover" : "object-contain"} transition-transform group-hover:scale-105`}
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-base text-foreground">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{product.size}</p>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{product.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-bold text-primary">₦{product.price.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="sm"
          disabled={isAdding}
        >
          <ShoppingCart className="mr-2 h-3.5 w-3.5" />
          {isAdding ? "Added!" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
