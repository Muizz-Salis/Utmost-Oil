"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem as CartItemType } from "@/lib/cart-context"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={`${item.name} - ${item.size}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{item.name}</h3>
          <p className="text-sm text-muted-foreground">{item.size}</p>
          <p className="mt-1 font-semibold text-primary">₦{item.price.toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-semibold">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:bg-destructive/10"
            onClick={() => removeFromCart(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="font-bold text-lg text-foreground">₦{(item.price * item.quantity).toLocaleString()}</p>
      </div>
    </div>
  )
}
