import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/subcategories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  console.log(categories);

  return (
    <div className="text-center text-pretty">
      <div className="lg:w-[70%] md:w-[80%] w-[95%] mx-auto">
      <h1 className="md:text-4xl text-3xl font-bold text-[#265073]">
        Art & Craft Categories
      </h1>
      <hr className="xl:w-1/3 md:w-1/2 w-2/3 border-dashed border-[#265073] my-2 mx-auto" />
      <p className="text-[#2D9596] ">Dive into our curated selection of art and craft wonders, each waiting to mesmerize you with its unique charm.
      You can see art and craft  items by category here. We have premium collection of Ceramics and Pottery to make you happy.</p>
      </div> 

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-10">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
