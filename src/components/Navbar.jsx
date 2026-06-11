import { useState } from "react";

import {
  FaSearch,
  FaClipboardList,
  FaUserCircle,
  FaBars,
  FaShoppingCart,
  FaCommentDots,
  FaHeadset,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="
        bg-white
        fixed
        top-0
        left-0
        right-0
        z-50
        shadow-sm
      "
    >
      <div className="max-w-[1100px] mx-auto px-4">

        {/* Bar Atas */}
        <div className="flex items-center justify-between py-4 gap-4">

          {/* Logo */}
          <img
            src={logo}
            alt="Rekber.me"
            className="h-8 md:h-12"
          />

          {/* Search Desktop */}
          <div className="hidden md:flex flex-1 max-w-[600px] relative">

            <input
              type="text"
              placeholder="Tumbler"
              className="
                w-full
                h-11
                border-2
                border-blue-600
                rounded-full
                px-5
                outline-none
              "
            />

            <FaSearch
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-xl
              "
            />

          </div>

          {/* Tombol Desktop */}
          <div className="hidden md:flex items-center gap-3">

            <button
              className="
                flex
                items-center
                gap-2
                px-5
                py-2
                border-2
                border-blue-600
                rounded-full
                text-blue-600
              "
            >
              <FaClipboardList />
              Order
            </button>

            <button
              className="
                flex
                items-center
                gap-2
                px-5
                py-2
                bg-blue-600
                text-white
                rounded-full
              "
            >
              <FaUserCircle />
              Login
            </button>

          </div>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FaBars />
          </button>

        </div>

        {/* Search Mobile */}
        <div className="md:hidden pb-4">

          <div className="relative">

            <input
              type="text"
              placeholder="Cari"
              className="
                w-full
                h-10
                border-2
                border-blue-600
                rounded-full
                px-4
                outline-none
              "
            />

            <FaSearch
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
              "
            />

          </div>

        </div>

        {/* Menu Desktop */}
        <div
          className="
            hidden
            md:flex
            justify-center
            gap-8
            text-sm
            pb-3
          "
        >
          <span>Peralatan dapur</span>
          <span>Elektronik</span>
          <span>Pakaian pria & wanita</span>
          <span>Kendaraan</span>
          <span>Aksesoris</span>
          <span>DLL</span>
        </div>

      </div>

      {/* MOBILE SIDEBAR */}
      {mobileMenu && (
        <>
          {/* Overlay */}
          <div
            className="
              md:hidden
              fixed

              top-[118px]
              left-0
              right-0
              bottom-0

              bg-black/30

              z-[998]
            "
            onClick={() => setMobileMenu(false)}
          />

          {/* Sidebar */}
          <div
            className="
              md:hidden
              fixed

              top-[118px]
              right-0

              w-[200px]

              h-[calc(100vh-118px)]

              bg-gradient-to-b
              from-[#003087]
              to-[#002766]

              z-[999]

              p-6

              shadow-2xl

              transition-all
              duration-300
            "
          >
            <div className="flex flex-col gap-8 text-white">

              <div className="flex items-center gap-4">
                <FaShoppingCart className="text-xl" />
                <span className="font-medium">
                  Keranjang
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCommentDots className="text-xl" />
                <span className="font-medium">
                  Pesan
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaHeadset className="text-xl" />
                <span className="font-medium">
                  Customer Service
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaClipboardList className="text-xl" />
                <span className="font-medium">
                  Order
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaUserCircle className="text-xl" />
                <span className="font-medium">
                  Login
                </span>
              </div>

            </div>
          </div>
        </>
      )}

    </header>
  );
};

export default Navbar;