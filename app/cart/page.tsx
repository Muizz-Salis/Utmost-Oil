"use client"

import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { cart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add some premium palm oil to your cart to get started!</p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
        <p className="text-muted-foreground mt-1">
          {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <CartSummary />
            <Link href="/checkout" className="block mt-4">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
