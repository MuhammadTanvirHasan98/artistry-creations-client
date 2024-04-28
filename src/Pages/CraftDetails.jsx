import { useLoaderData } from "react-router-dom";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";

const CraftDetails = () => {
  const craft = useLoaderData();
  console.log(craft);

  const {
    image,
    item_name,
    subcategory_name,
    processing_time,
    price,
    rating,
    customization,
    stock_status,
    short_description,
  } = craft;

  return (
    <div className="w-[90%] mx-auto my-16">
      <h1 className="text-center md:text-5xl text-3xl  font-bold text-purple-800 mb-10">
        Item details
      </h1>
      <div className="xl:w-[70%] md:w-[80%] mx-auto flex flex-col lg:flex-row  border-2 border-purple-300 rounded-xl shadow-2xl bg-gradient-to-br ">
        {/* craft image  */}
        <div className="lg:w-1/2 w-full">
          <img
            src={image}
            className="w-full lg:h-full md:h-[500px] h-[350px] lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl"
          />
        </div>

        {/* Craft Info */}
        <div className="xl:text-2xl lg:w-1/2 w-full lg:p-10 md:p-7 p-5 text-[#385398]">
          <h1 className="lg:text-3xl text-2xl mb-2 font-bold play">
            {item_name}
          </h1>

          <h2 className="xl:text-2xl text-lg font-semibold my-4">
            Subcategory: <span className="font-bold">{subcategory_name}</span> 
          </h2>

          <hr className="border-dashed border-purple-600 my-4" />

          <div className="flex justify-between">
            <p className="flex items-center gap-1 font-semibold xl:text-2xl text-lg">
              <MdOutlinePriceChange />
              {price}
            </p>
            <p className="flex items-center gap-1 font-semibold xl:text-2xl text-lg">
              <IoStarOutline />
              {rating}
            </p>
          </div>

          <hr className="border-dashed border-purple-600 my-4" />

          <div className="flex justify-between">
            <p className="font-semibold">
              Can I customize it? <br />
              Ans:<span className="font-bold"> {customization} </span>
            </p>
            <p className="mx-4 text-4xl">|</p>
            
            <div className="flex items-center">

            <p className="font-semibold">
             Status:<span className="font-bold"> {stock_status} </span>
            </p>
            </div>
          </div>

          <hr className="border-dashed border-purple-600 my-4" />
             
          <p className="font-semibold">Processing Time: <span className="font-bold">
           {processing_time}
            </span> </p> 

          <hr className="border-dashed border-purple-600 my-4" />

          {/* Review */}
          <p>
            <span className="font-semibold text-pretty">Review: </span>
            {short_description}
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
