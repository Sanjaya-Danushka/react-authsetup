import { getProducts } from "@/data/products"
import ProductCard from "@/components/default/Productcard"
import { ShoppingCart, Zap, Shield, Star } from "lucide-react"

const Home = () => {
  const products = getProducts()

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop")`
          }}
        ></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 backdrop-blur-md"></div>
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-white/30 px-4 py-2 text-sm backdrop-blur-md border border-white/40 shadow-2xl">
            <Zap className="mr-2 h-4 w-4" />
            New Collection 2024
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white drop-shadow-2xl">
            Welcome to{" "}
            <span className="block bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
              ShopHub
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white drop-shadow-xl">
            Discover premium products with unbeatable prices and fast delivery. 
            Shop the latest trends in tech, fashion, and lifestyle.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="group relative overflow-hidden rounded-lg bg-white/30 px-8 py-4 font-semibold text-white backdrop-blur-md border border-white/40 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl hover:bg-white/40">
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Shop Now
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform group-hover:translate-y-0"></div>
            </button>
            
            <button className="rounded-lg border-2 border-white/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:border-white/70 hover:bg-white/30 shadow-xl">
              Explore Products
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-md border border-white/30 shadow-xl">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/90">Products</div>
            </div>
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-md border border-white/30 shadow-xl">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/90">Support</div>
            </div>
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-md border border-white/30 shadow-xl">
              <div className="text-3xl font-bold text-white">Free</div>
              <div className="text-sm text-white/90">Shipping</div>
            </div>
            <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-md border border-white/30 shadow-xl">
              <div className="text-3xl font-bold text-white">30 Days</div>
              <div className="text-sm text-white/90">Returns</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose ShopHub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                Your payment information is always safe and encrypted
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Get your orders delivered within 2-3 business days
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Quality Products</h3>
              <p className="text-sm text-muted-foreground">
                Curated selection of premium quality items
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                30-day hassle-free return policy on all items
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">
            Featured Products
          </h2>

          <button className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
            View All
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who love shopping with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Amazing quality products and super fast delivery! I've been a customer for over a year and couldn't be happier."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-sm text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Best online shopping experience! The customer service is exceptional and the return policy is hassle-free."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Great prices and amazing product quality! I love how easy it is to find exactly what I'm looking for."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mike Johnson</p>
                  <p className="text-sm text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Deals
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter and get exclusive offers and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-4 py-3 text-foreground bg-background/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="rounded-lg bg-background px-6 py-3 font-semibold text-primary hover:bg-background/90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-muted border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">ShopHub</h3>
              <p className="text-muted-foreground mb-4">
                Your trusted online shopping destination for quality products and exceptional service.
              </p>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xs text-primary">f</span>
                </div>
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xs text-primary">t</span>
                </div>
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-xs text-primary">i</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Shipping Info</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Electronics</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Fashion</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Home & Garden</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Sports</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Track Order</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Returns</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Warranty</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 ShopHub. All rights reserved. Made with ❤️ for amazing customers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
