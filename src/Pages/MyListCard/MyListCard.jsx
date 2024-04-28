import { IoStarOutline } from "react-icons/io5";
import { MdEditSquare, MdOutlinePriceChange } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";

const MyListCard = () => {
  return (
    <div className="">
      <div className=" hover:bg-slate-100  rounded-lg shadow-xl">
        {/* Card Image */}
        <figure className="xl:px-8 xl:pt-8 px-5 pt-5">
          <img
            src="https://i.ibb.co/Pg89NR4/stoneware1-png.jpg"
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </figure>

       {/* Card price and rating */}
        <div className="text-center font-semibold p-4">
          <div>
            <div className="bg-gradient-to-br from-green-100 via-purple-100 to-blue-100 text-indigo-600 p-2 font-bold flex justify-between text-sm hover:text-purple-700 rounded-b-lg">
              <div className="flex gap-4">
                <p className="flex items-center gap-1">
                  <IoStarOutline />
                  4.5
                </p>
              </div>
              <p className="flex items-center gap-1">
                <MdOutlinePriceChange className="text-xl" />
                3000
              </p>
            </div>
          </div>
         
         {/* Cards Info */}
         <div className="text-lg">
          <h2 className="md:text-2xl text-3xl   font-semibold text-center mb-2">
           Clay ceramics and beauty
          </h2>
          <p>
            Customization option:{" "}
            <span className="font-bold text-yellow-600">Yes</span>
          </p>
          <p>
            Stock Status:{" "}
            <span className="font-bold text-yellow-600">In stock</span>
          </p>
         </div>
         {/* Buttons */}
          <div className="flex justify-center gap-3 mt-2" >
            <button className="btn btn-outline btn-error text-2xl"><RiDeleteBin3Fill /></button>
            <button className="btn btn-outline btn-primary text-2xl"><MdEditSquare /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
