import { useEffect, useState } from "react";
import CraftCard from "./CraftCard/CraftCard";
import { Link } from "react-router-dom";

const CraftSection = () => {
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allCrafts")
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, []);

  console.log(crafts);

  return (
    <div className="my-20 text-center text-pretty">
      <div className="lg:w-[70%] md:w-[80%] w-[95%] mx-auto mb-10">
        <h1 className=" md:text-4xl text-3xl font-bold text-purple-800">
          Art & Craft Items
        </h1>
        <hr className="xl:w-1/3 md:w-1/2 w-2/3 border-dashed border-purple-800 my-2 mx-auto" />
        <p className="text-blue-600">
        Welcome to the enchanting world of Artistry Creations, where creativity knows no bounds! Whether you are drawn to the delicate elegance of ceramics or the timeless allure of pottery.
       
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8">
        {crafts.slice(0, 6).map((craft) => (
          <CraftCard key={craft._id} craft={craft} />
        ))}
      </div>

      <div className="md:mt-16 mt-10 text-center">
        <Link to="/allArtAndCraft">
          <button className="btn btn-outline text-indigo-600 hover:text-indigo-100 hover:bg-indigo-600 font-bold px-8 text-xl">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CraftSection;
