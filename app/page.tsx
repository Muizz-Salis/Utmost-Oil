import { products } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          <span className="text-[#ffb901]">UtmostOils</span> <span className="text-primary">Organic Palm Oil</span> 
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Pure, high-quality palm oil sourced directly from local farms. Perfect for cooking, frying, and all your
          culinary needs.
        </p>
      </section>

      {/* Products Grid */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Available Sizes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-lg bg-card border border-border">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">🌴</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">100% Organic</h3>
          <p className="text-sm text-muted-foreground">Sourced from certified organic palm plantations</p>
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
          <p className="text-sm text-muted-foreground">Premium quality palm oil at competitive prices</p>
        </div>
      </section>
    </div>
  )
}
