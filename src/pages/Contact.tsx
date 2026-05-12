import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for contacting us! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=400&fit=crop")`
          }}
        ></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-sm"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-2xl">
            Get in Touch
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 drop-shadow-lg">
            We're here to help! Reach out to us with any questions, feedback, or support needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground mb-2">support@shophub.com</p>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground mb-2">123 Shop Street</p>
                <p className="text-sm text-muted-foreground">New York, NY 10001</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-card border border-border p-8 shadow-xl backdrop-blur-sm bg-white/50">
                <h2 className="mb-6 text-3xl font-bold text-foreground">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-white/50 px-4 py-3 text-foreground backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-white/50 px-4 py-3 text-foreground backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl bg-white/50 px-4 py-3 text-foreground backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-xl bg-white/50 px-4 py-3 text-foreground backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                How long does shipping take?
              </h3>
              <p className="text-muted-foreground">
                Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days.
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                What's your return policy?
              </h3>
              <p className="text-muted-foreground">
                We offer a 30-day hassle-free return policy. Items must be unused and in original packaging.
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-6 shadow-lg backdrop-blur-sm bg-white/50">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Do you offer international shipping?
              </h3>
              <p className="text-muted-foreground">
                Yes, we ship to over 50 countries worldwide. International shipping times and rates vary by location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-primary-foreground shadow-2xl">
            <MessageCircle className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-3xl font-bold">Need Immediate Help?</h2>
            <p className="mb-6 text-lg opacity-90">
              Our live chat support is available 24/7 to assist you with any questions.
            </p>
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-primary transition hover:scale-105 hover:shadow-xl">
              Start Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
