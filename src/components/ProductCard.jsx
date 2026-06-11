const ProductCard = ({
image,
name,
price,
sold,
store,
rating,
}) => {
return ( <div className="w-full">


  <img
    src={image}
    alt={name}
    className="
      w-full
      h-[140px]
      md:h-[180px]
      object-cover
      rounded-[20px]
    "
  />

  <h3
    className="
      mt-3
      text-xs
      md:text-sm
      leading-5
      text-gray-800
    "
  >
    {name}
  </h3>

  <div className="flex justify-between items-center mt-2">

    <h2
      className="
        text-red-600
        font-bold
        text-sm
        md:text-base
      "
    >
      {price}
    </h2>

    <span
      className="
        text-[10px]
        text-gray-500
      "
    >
      {sold} terjual
    </span>

  </div>

  <div
    className="
      flex
      justify-between
      items-center
      mt-2
    "
  >
    <div className="flex items-center gap-1">
      <span>👤</span>

      <span className="text-xs text-gray-600">
        {store}
      </span>
    </div>

    <div className="flex items-center gap-1">
      <span className="text-xs">
        {rating}
      </span>

      <span className="text-yellow-400">
        ⭐
      </span>
    </div>
  </div>

</div>

);
};

export default ProductCard;
