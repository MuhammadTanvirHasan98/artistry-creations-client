import { GrStarOutline } from "react-icons/gr";
import { MdOutlinePriceChange } from "react-icons/md";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import { subcategoryName } from "../../../../../JS/Function";

const SubcategoryCard = ({ craft }) => {


    
  const[subcategory, setSubcategory]=useState('');

  const { _id,image, item_name,processing_time,short_description,subcategory_name, price, rating } =
  craft;

  
  useEffect(() => {
     setSubcategory(subcategoryName(subcategory_name))
  }, [subcategory_name]);


 

  return (
    <div>
      <div data-aos='fade-out' className=" hover:bg-slate-100  rounded-lg shadow-xl">
        {/* Card Image */}
        <figure className="xl:px-8 xl:pt-8 px-5 pt-5">
          <img
            src={image}
            alt="craft_image"
            className="rounded-xl w-full xl:h-[250px] md:h-[220px] h-[280px]"
          />
        </figure>

        {/* Card price and rating */}
        <div className="p-4">
          <div>
            <div className="bg-gradient-to-br from-green-100 via-purple-100 to-blue-100 text-indigo-600 p-2 font-bold flex justify-between text-sm hover:text-purple-700 rounded-b-lg">
              <div className="flex gap-4">
                <p className="flex items-center gap-1">
                  <GrStarOutline />
                  {rating}
                </p>
              </div>
              <p className="flex items-center gap-1">
                <MdOutlinePriceChange className="text-xl" />
                {price}
              </p>
            </div>
          </div>

          {/* Cards Info */}
          <div>
            <h2 className="md:text-2xl text-3xl my-1 font-semibold text-left text-[#416D19]">
              {item_name}
            </h2>

            <div className="text-left space-y-1">
              <p className="font-semibold">
                Processing Time:{" "}
                <span className="font-bold text-yellow-600">
                  {processing_time}
                </span>
              </p>
              <p className="font-semibold">
                Subcategory:{" "}
                <span className="font-bold text-yellow-600">
                  {subcategory}
                </span>
              </p>
              <p><span className="font-semibold"> Short Description: </span>{short_description}</p>
            </div>
          </div>
          {/* Buttons */}
          <div data-aos="flip-right" className="flex justify-center">
          <Link to={`/craftDetails/${_id}`}>
            <button className="btn btn-outline md:btn-md btn-sm text-indigo-600 hover:text-white hover:bg-indigo-600 hover:border-white  font-bold xl:mt-2 md:mt-0 mt-2 ">
              View Details
            </button>
          </Link>
         </div>

        </div>
      </div>
      <Tooltip
        id="my-tooltip1"
        place="top"
        effect="solid"
        style={{ backgroundColor: "red", color: "white", fontWeight: "700" }}
      />
      <Tooltip
        id="my-tooltip2"
        place="top"
        effect="solid"
        style={{ backgroundColor: "blue", color: "white", fontWeight: "700" }}
      />
    </div>
  );
};

export default SubcategoryCard;

SubcategoryCard.propTypes = {
  craft: PropTypes.object,
  handleDelete: PropTypes.func,
};
