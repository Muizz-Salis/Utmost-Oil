"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

interface DeliveryInfo {
  fullName: string
  phoneNumber: string
  address: string
}

interface CheckoutButtonProps {
  phoneNumber: string
  deliveryInfo: DeliveryInfo
}

export function CheckoutButton({ phoneNumber, deliveryInfo }: CheckoutButtonProps) {
  const { cart, totalPrice, clearCart } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) return

    // Validate delivery information
    if (!deliveryInfo.fullName || !deliveryInfo.phoneNumber || !deliveryInfo.address) {
      alert("Please fill in all delivery information fields before checking out.")
      return
    }

    // Format order details for WhatsApp
    let message = "Hello! I would like to place an order:%0A%0A"
    
    // Add delivery information
    message += "*Delivery Information:*%0A"
    message += `Name: ${deliveryInfo.fullName}%0A`
    message += `Phone: ${deliveryInfo.phoneNumber}%0A`
    message += `Address: ${deliveryInfo.address}%0A%0A`
    
    // Add order details
    message += "*Order Details:*%0A"

    cart.forEach((item) => {
      message += `• ${item.name} (${item.size}) x ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString()}%0A`
    })

    message += `%0A*Total Amount: ₦${totalPrice.toLocaleString()}*%0A`
    message += "*(Delivery fee not included - varies by location)*%0A%0A"
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
