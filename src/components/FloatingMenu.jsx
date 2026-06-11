import {
  FaShoppingCart,
  FaCommentDots,
  FaHeadset,
} from "react-icons/fa";

const FloatingMenu = () => {
  return (
    <div
      className="
        hidden md:block

        fixed
        right-8

        top-[55%]
        -translate-y-1/2

        z-50
      "
    >
      <div
        className="
          bg-[#0047FF]
          rounded-full

          py-5
          px-4

          flex
          flex-col
          items-center

          gap-5

          shadow-lg
        "
      >
        {/* Keranjang */}
        <button
          className="
            text-white
            text-xl
            hover:scale-110
            transition
          "
        >
          <FaShoppingCart />
        </button>

        {/* Chat */}
        <button
          className="
            text-white
            text-xl
            hover:scale-110
            transition
          "
        >
          <FaCommentDots />
        </button>

        {/* Customer Service */}
        <button
          className="
            text-white
            hover:scale-110
            transition
          "
        >
          <FaHeadset className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;