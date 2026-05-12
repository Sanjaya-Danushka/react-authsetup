import { getProducts } from "@/data/products"
import ProductCard from "@/components/default/Productcard"
import { Link } from "react-router-dom"
import { ShoppingCart, Zap, Shield, Star } from "lucide-react"

const Home = () => {
  const products = getProducts()

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          {/* High-quality background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1472851296607-05ab3db4d95f?w=1920&h=1080&fit=crop&auto=format")`
            }}
          ></div>
          
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
          
          {/* Subtle pattern overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
          {/* Premium Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 text-sm font-medium text-amber-200 backdrop-blur-sm border border-amber-400/30 shadow-lg">
            <span className="mr-2">🔥</span>
            <span>Premium Collection 2024</span>
          </div>

          {/* Elegant Typography */}
          <div className="mb-8 space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide text-white">
              <span className="block font-extralight">Discover</span>
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white">
              ShopHub
            </h2>
          </div>

          {/* Refined Description */}
          <p className="mx-auto mb-12 max-w-3xl text-lg sm:text-xl leading-relaxed text-white/90 font-light">
            Experience the finest selection of premium products, curated for those who appreciate quality, 
            style, and exceptional service.
          </p>

          {/* Premium CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-12 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                <ShoppingCart className="h-5 w-5" />
                Start Shopping
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
            
            <button className="group rounded-full border-2 border-white/30 px-12 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:scale-105">
              <span className="flex items-center gap-3">
                Explore Collection
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Elegant Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Premium Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">Free</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Express Shipping</div>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/60 uppercase tracking-wider">Scroll</span>
            <div className="w-0.5 h-12 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURES SECTION */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="relative mx-auto max-w-6xl px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">ShopHub</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Experience shopping redefined with our premium features and exceptional service
            </p>
          </div>

          {/* Premium Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group text-center">
              <div className="mb-8 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">Secure Payment</h3>
              <p className="text-slate-600 leading-relaxed">
                Bank-level security with encrypted transactions and fraud protection
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group text-center">
              <div className="mb-8 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">Express Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Same-day delivery available on select items with real-time tracking
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group text-center">
              <div className="mb-8 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">Premium Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Handpicked products from world-renowned luxury brands
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group text-center">
              <div className="mb-8 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">Easy Returns</h3>
              <p className="text-slate-600 leading-relaxed">
                60-day return policy with free pickup and instant refunds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM PRODUCTS SECTION */}
      <section className="relative py-32 bg-white">
        <div className="relative mx-auto max-w-6xl px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Featured</span> Products
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Explore our curated collection of premium products selected for quality and style
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Products
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM NEWSLETTER SECTION */}
      <section className="relative py-32 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="relative mx-auto max-w-4xl px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
              🎯 Exclusive Offers
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Stay <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Ahead</span> of the Curve
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
            Get exclusive access to new arrivals, special discounts, and insider tips delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-slate-300 px-6 py-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Subscribe Now
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Join 50,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="relative bg-slate-900 text-white py-20">
        <div className="relative mx-auto max-w-6xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                ShopHub
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
                Your premium shopping destination for quality products and exceptional service. 
                Experience shopping redefined with our curated collections.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.77-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069 3.204 0 3.584.012 4.85.069 3.264.148 4.77 1.699 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Products</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Returns</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Track Order</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2024 ShopHub. All rights reserved. Crafted with ❤️ for premium shopping experience.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
