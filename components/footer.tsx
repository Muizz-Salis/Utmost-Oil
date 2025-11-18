import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-[#b00a16] bg-[#d40c1a] mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-[#ffb901]">Utmost</span>
                <span className="text-white">Oils</span>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Premium organic palm oil sourced directly from certified farms. Quality you can trust, delivered to your doorstep.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#ffb901] hover:text-[#d40c1a] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/utmostoil_and_foodhubs?igsh=amM3ZjVweTl3a3Bq"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#ffb901] hover:text-[#d40c1a] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[#ffb901] hover:text-[#d40c1a] flex items-center justify-center transition-colors text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ffb901] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Mobolaje modern market, beside durbar stadium Oyo, Oyo town
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#ffb901] flex-shrink-0" />
                <a href="tel:+2348012345678" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  +234 903 562 7450
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#ffb901] flex-shrink-0" />
                <a href="mailto:info@utmostoils.com" className="text-sm text-white/80 hover:text-[#ffb901] transition-colors">
                  info@utmostoils.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs text-white/60 mb-2">Business Hours:</p>
              <p className="text-sm text-white font-medium">Mon - Sat: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-white/80">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80 text-center md:text-left">
              © {currentYear} <span className="text-[#ffb901] font-semibold">UtmostOils</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
