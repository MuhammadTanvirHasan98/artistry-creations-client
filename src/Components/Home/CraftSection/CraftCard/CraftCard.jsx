import { IoStarOutline } from "react-icons/io5";
import {  FaRegEye } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"


const CraftCard = ({craft}) => {

  //  const {user} = UseAuthContext();
 
  const {
    _id,
    item_name,
    image,
    rating,
    price,
    short_description
  } = craft;
  console.log(image)

  return (
    <div className="card hover:border-2  border-indigo-400 ease-in  hover:scale-105 transition transform duration-500 md:w-full hover:shadow-xl hover:bg-gradient-to-tr from-yellow-50 via-purple-50 to-orange-50">

      {/* Card image */}
      <div data-aos="zoom-in" className="rounded-xl">
        <img className="w-full xl:h-[330px] md:h-[220px] h-[280px] rounded-t-2xl" src={image} alt="img" />

        <div className="bg-gradient-to-br from-green-100 via-purple-100 to-blue-100 text-indigo-600 p-2 font-bold flex justify-between text-sm hover:text-purple-700">
          <div className="flex gap-4">
            <p className="flex items-center gap-1">
            <IoStarOutline />
             {rating}
            </p>
          </div>
          <p className="flex items-center gap-1">
          <MdOutlinePriceChange className="text-xl"/>{price}
          </p>
        </div>
      </div>

      {/* Cards Info */}
      <div className="p-4 pt-1 text-center">
        <div data-aos="flip-up">
          <h2 className="lg:text-2xl text-xl font-bold play tracking-wide bg-gradient-to-r from-blue-600 via-yellow-600 to-purple-600 bg-300% text-transparent bg-clip-text animate-gradient">
            {item_name}
          </h2>
          <p className="text-gray-900 hover:text-purple-950">{short_description}</p>
        </div>

          <hr className="border-dashed border-indigo-600 w-[95%] mx-auto my-2" />

        <div data-aos="fade-up" className="flex justify-center">
          <Link to='/'>
            <button className="btn btn-outline text-indigo-600 hover:text-indigo-100 hover:bg-indigo-600 font-bold">
              View<FaRegEye className="text-xl"/> Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CraftCard;

CraftCard.propTypes = {
  craft: PropTypes.object,
};