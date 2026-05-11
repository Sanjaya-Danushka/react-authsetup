
export default function productCard({ product }: { product: any }) {
  return (
    <div>
      <div
        key={product.id}
        className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
      >
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            {product.name}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-gray-500">
            {product.description}
          </p>

          {/* PRICE + BUTTON */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
