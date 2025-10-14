"use client"

import { useCart } from "@/lib/cart-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function CartSummary() {
  const { totalItems, totalPrice } = useCart()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Items ({totalItems})</span>
          <span className="font-semibold">₦{totalPrice.toLocaleString()}</span>
        </div>
        <Separator />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-primary">₦{totalPrice.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  )
}
