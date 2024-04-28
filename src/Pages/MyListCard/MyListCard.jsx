import { GrStarOutline } from "react-icons/gr";
import { MdEditSquare, MdOutlinePriceChange } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const MyListCard = ({craft}) => {
   
   const{image, item_name, customization, stock_status, price, rating} = craft;

  return (
    <div className="">
      <div className=" hover:bg-slate-100  rounded-lg shadow-xl">
        {/* Card Image */}
        <figure className="xl:px-8 xl:pt-8 px-5 pt-5">
          <img
            src={image}
            alt="craft_image"
            className="rounded-xl w-full xl:h-[300px] md:h-[220px] h-[280px]"
          />
        </figure>

       {/* Card price and rating */}
        <div className="text-center font-semibold p-4">
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
         <div className="text-lg">
          <h2 className="md:text-2xl text-3xl   font-semibold text-center mb-2">
           {item_name}
          </h2>
          <p>
            Customization option:{" "}
            <span className="font-bold text-yellow-600">{customization}</span>
          </p>
          <p>
            Stock Status:{" "}
            <span className="font-bold text-yellow-600">{stock_status}</span>
          </p>
         </div>
         {/* Buttons */}
          <div className="flex justify-center gap-3 mt-2" >
            <Link>
            <button className="btn btn-outline btn-error text-2xl"><RiDeleteBin3Fill /></button>
            </Link>

            <Link>
            <button className="btn btn-outline btn-primary text-2xl"><MdEditSquare /></button>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;


MyListCard.propTypes = {
   craft: PropTypes.object
}