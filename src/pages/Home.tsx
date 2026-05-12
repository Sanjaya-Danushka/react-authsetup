import { getProducts } from "@/data/products"
import ProductCard from "@/components/default/Productcard"
import { Link } from "react-router-dom"
import { ShoppingCart, Zap, Shield, Star } from "lucide-react"

const Home = () => {
  const products = getProducts()

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          {/* Main Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-pulse"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop")`
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-indigo-900/80 animate-gradient"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          {/* Floating Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm backdrop-blur-xl border border-white/30 shadow-2xl animate-float">
            <Zap className="mr-2 h-4 w-4 text-yellow-300" />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-semibold">
              ✨ New Collection 2024
            </span>
          </div>

          {/* Main Title with Animation */}
          <div className="space-y-4 mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-shimmer">
                Welcome to
              </span>
            </h1>
            <h2 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
                ShopHub
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-4xl text-xl sm:text-2xl leading-relaxed text-white/90 font-light animate-slide-up">
            Discover premium products with unbeatable prices and fast delivery. 
            Shop the latest trends in tech, fashion, and lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-3xl animate-slide-up animation-delay-200">
              <span className="relative z-10 flex items-center gap-3">
                <ShoppingCart className="h-6 w-6" />
                Shop Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-y-full transition-transform group-hover:translate-y-0"></div>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full transition-transform group-hover:translate-x-0"></div>
            </button>
            
            <button className="group rounded-2xl border-2 border-white/50 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all hover:border-white/80 hover:bg-white/20 hover:scale-105 shadow-xl animate-slide-up animation-delay-400">
              <span className="flex items-center gap-3">
                Explore Products
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all hover:bg-white/20 hover:scale-105 animate-float animation-delay-600">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-white/80 font-medium">Products</div>
            </div>
            <div className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all hover:bg-white/20 hover:scale-105 animate-float animation-delay-800">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-white/80 font-medium">Support</div>
            </div>
            <div className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all hover:bg-white/20 hover:scale-105 animate-float animation-delay-1000">
              <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">Free</div>
              <div className="text-white/80 font-medium">Shipping</div>
            </div>
            <div className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all hover:bg-white/20 hover:scale-105 animate-float animation-delay-1200">
              <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">30 Days</div>
              <div className="text-white/80 font-medium">Returns</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Why Choose ShopHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing you with the best shopping experience possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative text-center p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-xl">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Secure Payment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your payment information is always safe and encrypted with industry-standard security
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative text-center p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-xl">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get your orders delivered within 2-3 business days with express shipping options
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-3xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative text-center p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-xl">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Quality Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Curated selection of premium quality items from trusted brands worldwide
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-3xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative text-center p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-xl">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <ShoppingCart className="h-10 w-10" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">Easy Returns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  30-day hassle-free return policy on all items with no questions asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50"></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our handpicked selection of premium products
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/80 px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View All Products
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
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
