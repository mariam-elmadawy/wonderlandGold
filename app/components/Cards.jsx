const products = [
  {
    id: 1,
    title: "Necklice",
    price: "200$",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
  },
  {
    id: 2,
    title: "Bracelete",
    price: "250$",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
  },
  {
    id: 3,
    title: "Rings",
    price: "400$",
    img: "https://images.unsplash.com/photo-1631982690223-8aa4be0a2497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  },
  {
    id: 4,
    title: "Set",
    price: "1300$",
    img: "https://images.unsplash.com/photo-1585960622850-ed33c41d6418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 5,
    title: "Earring",
    price: "180$",
    img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    id: 6,
    title: "Rings",
    price: "450$",
    img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 7,
    title: "Necklace",
    price: "250$",
    img: "https://images.unsplash.com/photo-1633555234047-192d10238f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
  },
  {
    id: 8,
    title: "Earrings",
    price: "300$",
    img: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80",
  },
  {
    id: 9,
    title: "Set",
    price: "750$",
    img: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];
export default function Cards() {
  return (
    <div className="py-4 px-10 md:px-20">
      <div className="mx-auto max-w-2xl px-4 my-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-wider uppercase  text-yellow-700">
          New Collection
        </h2>
        <p className="text-gray-700 text-lg">What is new at 2023?</p>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 lg:h-80 transition duration-300">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-gray-700">{product.title}</h3>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
