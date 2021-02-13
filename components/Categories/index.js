const Categories = () => {
  const categoriess = [
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`,
    `Phones`
  ];
  return (
    <div className="bg-gray-100 px-6 py-3 overflow-x-auto scrollbar-hidden">
     <div className="text-sm flex space-x-4">
      {categoriess.map((category) => {
        return (
          <a className="text-gray-800 whitespace-nowrap" key={category} href="#">
            {category}
          </a>
        );
      })}
       </div>
    </div>
  );
};
export default Categories;
