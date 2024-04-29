import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { subcategoryName } from "../../../../JS/Function";

const CategoryCard = ({ category }) => {

  const [subcategory, setSubcategory] = useState("");
  const { image, subcategory_name, short_description } = category;

   
  useEffect(() => {
    setSubcategory(subcategoryName(subcategory_name))
 }, [subcategory_name]);



  return (
    <div className="mt-16 text-pretty">
      <Link to={`/subcategory/${subcategory_name}`}>
        <div>
          <img
            className="xl:w-[380px] xl:h-[380px] lg:h-[260px] lg:w-[260px] w-[320px] h-[300px] mx-auto rounded-full"
            src={image}
            alt=""
          />
        </div>

        <div className="text-center hover:border-2 border-[#9AD0C2] px-2 ease-in  hover:scale-105 transition transform duration-500 ">
          <h1 className="my-2 text-[#265073] font-bold text-2xl">
            {subcategory}
          </h1>
          <p className="text-[#2D9596]">{short_description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  category: PropTypes.object,
};
