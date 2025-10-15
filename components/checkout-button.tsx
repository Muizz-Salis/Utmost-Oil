"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

interface CheckoutButtonProps {
  phoneNumber: string
}

export function CheckoutButton({ phoneNumber }: CheckoutButtonProps) {
  const { cart, totalPrice, clearCart } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) return

    // Format order details for WhatsApp
    let message = "Hello! I would like to place an order:%0A%0A"
    message += "*Order Details:*%0A"

    cart.forEach((item) => {
      message += `• ${item.name} (${item.size}) x ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString()}%0A`
    })

    message += `%0A*Total Amount: ₦${totalPrice.toLocaleString()}*%0A%0A`
    message += "Please confirm my order and provide your account details. Thank you!"

    // Clean phone number (remove any non-digit characters)
    const cleanPhone = phoneNumber.replace(/\D/g, "")

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`
    window.open(whatsappUrl, "_blank")

    // Optional: Clear cart after checkout
    // clearCart()
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={cart.length === 0}
      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
      size="lg"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Checkout via WhatsApp
    </Button>
  )
}
