import { products } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const palmOilProducts = products.filter((product) => product.category === "palm-oil")
  const groundnutOilProducts = products.filter((product) => product.category === "groundnut-oil")
  const othersProducts = products.filter((product) => product.category === "others")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          <span className="text-[#ffb901]">UtmostOils</span> <span className="text-primary">Premium Organic Products</span> 
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Pure, high-quality oils and rice sourced directly from local farms. Perfect for cooking, frying, and all your
          culinary needs.
        </p>
      </section>

      {/* Palm Oil Products Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Palm Oil</h2>
        <p className="text-muted-foreground mb-6">Premium organic palm oil in various sizes</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {palmOilProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Groundnut Oil Products Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Groundnut Oil</h2>
        <p className="text-muted-foreground mb-6">Premium organic groundnut oil in various sizes</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {groundnutOilProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Others Section - Rice */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-2">Others</h2>
        <p className="text-muted-foreground mb-6">Premium quality rice in various sizes</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {othersProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* View Cart Button */}
      <div className="flex justify-center mb-16">
        <Link href="/cart">
          <Button size="lg" className="px-8 py-6 text-lg font-semibold">
            View Cart
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-lg bg-card border border-border">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">🌴</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">100% Organic</h3>
          <p className="text-sm text-muted-foreground">Sourced from certified organic plantations</p>
        </div>
        <div className="text-center p-6 rounded-lg bg-card border border-border">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
          <p className="text-sm text-muted-foreground">Quick and reliable delivery to your doorstep</p>
        </div>
        <div className="text-center p-6 rounded-lg bg-card border border-border">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">💯</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
          <p className="text-sm text-muted-foreground">Premium quality oils at competitive prices</p>
        </div>
      </section>
    </div>
  )
}
