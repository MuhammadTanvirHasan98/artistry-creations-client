import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {

  const [subcategory, setCategory] = useState("");
  const { image, subcategory_name, short_description } = category;

  useEffect(() => {
    if (subcategory_name === "01") {
      setCategory("Clay-made pottery");
    }
    if (subcategory_name === "02") {
      setCategory("Stoneware");
    }
    if (subcategory_name === "03") {
      setCategory("Porcelain");
    }
    if (subcategory_name === "04") {
      setCategory("Terra Cotta");
    }
    if (subcategory_name === "05") {
      setCategory("Ceramics & Architectural");
    }
    if (subcategory_name === "06") {
      setCategory("Home decor pottery");
    }
  }, [subcategory]);

  return (
    <div className="mt-16 text-pretty">
      <Link to={`/category/${subcategory_name}`}>
        <div>
          <img
            className="xl:w-[380px] xl:h-[380px] lg:h-[260px] lg:w-[260px] w-[320px] h-[300px] mx-auto rounded-full"
            src={image}
            alt=""
          />
        </div>

        <div className="text-center hover:border-2 border-purple-200 px-2 ease-in  hover:scale-105 transition transform duration-500 ">
          <h1 className="my-2 text-purple-700 font-bold text-2xl">
            {subcategory}
          </h1>
          <p>{short_description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  category: PropTypes.object,
};
