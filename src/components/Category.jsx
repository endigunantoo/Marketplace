const Category = () => {
  return (
    <section className="max-w-[1100px] mx-auto mt-6">

      <div className="flex justify-center">

        <div className="w-[900px] flex items-center justify-between">

          {/* Label Rekomendasi */}
          <div
            className="
              bg-blue-700
              text-white
              px-5
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
            <span>❤️</span>
            <span>Anda mungkin menyukai</span>
          </div>

          {/* Kategori */}
          <button
            className="
              bg-gray-100
              px-5
              py-2
              rounded-full
              text-sm
              hover:bg-gray-200
              transition
            "
          >
            Gitar
          </button>

          <button
            className="
              bg-gray-100
              px-5
              py-2
              rounded-full
              text-sm
              hover:bg-gray-200
              transition
            "
          >
            HandPhone
          </button>

          <button
            className="
              bg-gray-100
              px-5
              py-2
              rounded-full
              text-sm
              hover:bg-gray-200
              transition
            "
          >
            Laptop
          </button>

          <button
            className="
              bg-gray-100
              px-5
              py-2
              rounded-full
              text-sm
              hover:bg-gray-200
              transition
            "
          >
            Motor
          </button>

          <button
            className="
              bg-gray-100
              px-5
              py-2
              rounded-full
              text-sm
              hover:bg-gray-200
              transition
            "
          >
            Pakaian Pria
          </button>

          <button
            className="
              bg-gray-100
              px-5
              py-2
              rounded-full
              text-sm
              hover:bg-gray-200
              transition
            "
          >
            Case
          </button>

        </div>

      </div>

    </section>
  );
};

export default Category;