"use client"

import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckoutButton } from "@/components/checkout-button"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

// Replace with your actual WhatsApp business number
const WHATSAPP_NUMBER = "2348012345678" // Format: country code + number (no + or spaces)

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart()
  const router = useRouter()

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart")
    }
  }, [cart, router])

  if (cart.length === 0) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/cart">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
        <p className="text-muted-foreground mb-8">Review your order and complete checkout via WhatsApp</p>

        <div className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">
                      {item.name} ({item.size})
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity} × ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-semibold text-foreground">₦{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-primary text-2xl">₦{totalPrice.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Instructions */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">How to complete your order:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Click the "Checkout via WhatsApp" button below</li>
                <li>You'll be redirected to WhatsApp with your order details</li>
                <li>Send the message to confirm your order</li>
                <li>Our team will contact you to arrange delivery and payment</li>
              </ol>
            </CardContent>
          </Card>

          {/* Checkout Button */}
          <CheckoutButton phoneNumber={WHATSAPP_NUMBER} />

          <p className="text-center text-sm text-muted-foreground">
            By proceeding, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </div>
  )
}
