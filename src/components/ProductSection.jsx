import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductSection = () => {
return ( <section className="max-w-[1100px] mx-auto mt-6 px-4 md:px-0">


  <div
    className="
      bg-white
      rounded-[30px]
      p-4 md:p-10
      shadow-sm
    "
  >

    {/* Category */}
    <div className="mb-8">

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-2
          md:gap-4
        "
      >

        <div
          className="
            bg-blue-700
            text-white
            px-3 md:px-5
            py-2
            rounded-full
            text-sm
            font-medium
            flex
            items-center
            gap-2
            whitespace-nowrap
          "
        >
          ❤️ Anda mungkin menyukai
        </div>

        <button className="bg-gray-100 px-3 md:px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
          Gitar
        </button>

        <button className="bg-gray-100 px-3 md:px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
          HandPhone
        </button>

        <button className="bg-gray-100 px-3 md:px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
          Laptop
        </button>

        <button className="bg-gray-100 px-3 md:px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
          Motor
        </button>

        <button className="bg-gray-100 px-3 md:px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
          Pakaian Pria
        </button>

        <button className="bg-gray-100 px-3 md:px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition">
          Case
        </button>

      </div>

    </div>

    {/* Product Grid */}
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        md:gap-6
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          sold={product.sold}
          store={product.store}
          rating={product.rating}
        />
      ))}
    </div>

  </div>

</section>

);
};

export default ProductSection;
