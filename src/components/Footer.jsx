import logo from "../assets/logo.png";

const Footer = () => {
return ( <footer className="bg-[#001B4E] mt-16">


  <div
    className="
      max-w-[1100px]
      mx-auto
      px-4
      md:px-0
      py-10
      md:py-16
    "
  >

    {/* Logo */}
    <div className="flex justify-center">

      <img
        src={logo}
        alt="Rekber.me"
        className="
          h-10
          md:h-14
          object-contain
        "
      />

    </div>

    {/* Deskripsi */}
    <div className="text-center mt-6">

      <p
        className="
          text-white
          text-sm
          md:text-lg
          font-medium
        "
      >
        Rekber.me adalah platform rekening
      </p>

      <p
        className="
          text-white
          text-sm
          md:text-lg
          font-medium
        "
      >
        bersama terpercaya untuk
      </p>

      <p
        className="
          text-white
          text-sm
          md:text-lg
          font-medium
        "
      >
        transaksi online yang aman dan
      </p>

      <p
        className="
          text-white
          text-sm
          md:text-lg
          font-medium
        "
      >
        terjamin
      </p>

    </div>

    {/* Garis Pemisah */}
    <div className="mt-8 md:mt-10 border-t border-white/20"></div>

    {/* Copyright */}
    <div className="text-center mt-6 md:mt-8">

      <p
        className="
          text-white
          text-[10px]
          md:text-xs
        "
      >
        © 2025 REKBER.ME. ALL RIGHT RESERVED.
      </p>

      <p
        className="
          text-white
          text-[10px]
          md:text-xs
          mt-1
        "
      >
        PART OF PT REKBER TRANSAKSI AMAN
      </p>

    </div>

  </div>

</footer>

);
};

export default Footer;
