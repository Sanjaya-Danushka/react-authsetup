import { getProducts } from "@/data/products"
import ProductCard from "@/components/default/Productcard"

const Home = () => {
  const products = getProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="mb-4 text-5xl font-extrabold">Welcome to ShopHub</h1>

          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Discover premium products with unbeatable prices and fast delivery.
          </p>

          <button className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:scale-105 hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Products
          </h2>

          <button className="rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-gray-100">
            View All
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
