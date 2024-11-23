import Image from "next/image";
  export default function ProductList({products}) {
    if (!products || products.length === 0) {
      return <p className="text-center text-gray-500">No products found.</p>;
    }
    return (
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">Tienda</h2>
          <p className="mt-1 text-gray-600 text-sm/6">Mira nuestros productos.</p>

          <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
            <div key={product.id} className="relative group">
              <Image
                alt={product.name}
                src={product.image.link}
                className="object-cover w-full bg-gray-200 rounded-md aspect-square group-hover:opacity-75 lg:aspect-auto lg:h-80"
                width={200}
                height={200}
              />
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/tienda/${product.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* Puedes agregar más datos aquí si los tienes, como color */}
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
  }
  
