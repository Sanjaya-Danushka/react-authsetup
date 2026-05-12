import { Users, Target, Award, Heart } from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=600&fit=crop")`
          }}
        ></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-sm"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white drop-shadow-2xl">
            About ShopHub
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 drop-shadow-lg">
            We're on a mission to make quality products accessible to everyone, 
            everywhere. Founded in 2020, we've served over 100,000 happy customers worldwide.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-white backdrop-blur-md border border-white/30 shadow-xl">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">Made with love for our customers</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                At ShopHub, we believe that everyone deserves access to high-quality products 
                at fair prices. We carefully curate our collection to bring you the best in 
                technology, fashion, and lifestyle products.
              </p>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Our team works around the clock to ensure your shopping experience is seamless, 
                from browsing to delivery. We're not just selling products; we're building relationships.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
                  <div className="mb-3 text-3xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
                  <div className="mb-3 text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
                  <div className="mb-3 text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Our team"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl backdrop-blur-sm bg-white/90">
                <p className="text-2xl font-bold">4.9★</p>
                <p className="text-sm">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product is carefully tested and approved by our team.
              </p>
            </div>

            <div className="group">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Customer Centric</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of every decision we make. Your satisfaction is our priority.
              </p>
            </div>

            <div className="group">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from product selection to customer service.
              </p>
            </div>

            <div className="group">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Passion</h3>
              <p className="text-muted-foreground">
                We're passionate about bringing you the best products and shopping experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented people behind ShopHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                  alt="Team member"
                  className="w-full transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Alex Johnson</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                  alt="Team member"
                  className="w-full transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Sarah Chen</h3>
              <p className="text-muted-foreground">Head of Design</p>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Team member"
                  className="w-full transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Mike Davis</h3>
              <p className="text-muted-foreground">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
