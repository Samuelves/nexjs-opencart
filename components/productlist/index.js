const ProductList = () => {
  const products = [
    {
      name: "Phone",
      description: "Phone Phone Phone",
      styles: [
        {
          name: "Iphone",
          price: "$99999",
          image: "/vercel.svg",
        },
        {
          name: "Galaxy",
          price: "$6666",
          image: "",
        },
        {
          name: "Xiomi",
          price: "$1",
          image: "",
        },
      ],
    },
    {
      name: "Phone",
      description: "Phone Phone Phone",
      styles: [
        {
          name: "Iphone",
          price: "$99999",
          image: "/vercel.svg",
        },
        {
          name: "Galaxy",
          price: "$6666",
          image: "",
        },
        {
          name: "Xiomi",
          price: "$1",
          image: "",
        },
      ],
    },
  ];
  return (
    <div className="py-16 px-8">
      {products.map((product) => {
        return (
          <div>
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-800">{product.description}</p>
            </div>
            <div className="mt-4 shadow-xl">
              <div className="shadow-lg">
                <a href="#">
                  <div>
                    <img src={product.styles[0].image} alt="" />
                  </div>
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-800">{product.styles[0].name}</p>
                    <p className="mt-1 text-sm text-gray-800">{product.styles[0].price}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
