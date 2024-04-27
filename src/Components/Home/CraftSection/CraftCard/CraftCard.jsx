import { IoStarOutline } from "react-icons/io5";
import {  FaRegEye } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UseAuthContext } from "../../../../Firebase/FirebaseAuth/FirebaseProvider";

const Card = () => {

   const {user} = UseAuthContext();
 
  // const {
  //   id,
  //   image,
  //   segment_name,
  //   short_des,
  //   services,
  //   status,
  //   area,
  //   price,
  //   location,
  // } = card;
  // console.log(image)

  return (
    <div className="card hover:border-2  border-indigo-400 ease-in  hover:scale-105 transition transform duration-500 md:w-full hover:shadow-xl">
      {/* Card image */}
      <div
        data-aos="zoom-in"
        className="w-full xl:min-h-[350px] lg:min-h-[250px] md:min-h-[250px] min-h-[280px] bg-[url('https://i.ibb.co/6DtSg95/beverage-pottery.jpg')] object-cover bg-no-repeat bg-cover bg-center flex flex-col justify-end rounded-2xl"
      >
     

        <div className="bg-indigo-100 text-indigo-600 p-2 font-bold flex justify-between text-sm hover:bg-indigo-600 hover:text-indigo-100">
          <div className="flex gap-4">
            <p className="flex items-center gap-1">
            <IoStarOutline />
              4.5
            </p>
          </div>
          <p className="flex items-center gap-1">
          <MdOutlinePriceChange className="text-xl"/>2000
          </p>
        </div>
      </div>

      {/* Cards Info */}
      <div className="p-4 pt-1 text-center">
        <div data-aos="flip-up">
          <h2 className="lg:text-2xl text-xl font-bold play tracking-wide bg-gradient-to-r from-blue-600 via-yellow-600 to-purple-600 bg-300% text-transparent bg-clip-text animate-gradient">
            Clay Ceramics
          </h2>
          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quo quos dolor optio explicabo natus.</p>
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

export default Card;

// Card.propTypes = {
//   card: PropTypes.object,
// };