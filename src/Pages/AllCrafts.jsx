import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet";

const AllCrafts = () => {
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
    <div className="md:w-[70%] w-[95%] mx-auto my-20">
        <Helmet>
         <title>
            All Art&Craft | Artistry Creations
          </title>
        </Helmet>

      <h1 className="lg:text-5xl md:text-4xl text-3xl text-purple-800 text-center mb-10">
        All Art & Craft are here
      </h1>

      <div>
        <div className="overflow-x-auto border-2 bg-gradient-to-tr from-purple-100 to-blue-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th className="w-1/3 md:text-xl xl:text-2xl">Art&Craft Item</th>
                <th className="w-1/4 md:text-xl xl:text-2xl">Subcategory</th>
                <th className="w-1/5 md:text-xl xl:text-2xl">Rating</th>
                <th className="w-1/5 md:text-xl xl:text-2xl">Explore</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {crafts.map((craft) => (
                <tr key={craft?._d} className="text-center md:text-lg text-xs">
                  <td className="px-1">
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle md:w-16 md:h-16 w-12 h-12">
                          <img src={craft.image} alt="Art&Craft Image" />
                        </div>
                      </div>
                      <div>
                        <h1 className="font-bold text-center">
                          {craft?.item_name}
                        </h1>
                      </div>
                    </div>
                  </td>

                  <td className="px-1 font-semibold">
                    <h1>{craft?.subcategory_name}</h1>
                  </td>

                  <td className="px-1 font-semibold">4.5</td>
                  <td className="px-1">
                    <Link
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="View Details"
                      to={`/craftDetails/${craft?._id}`}
                    >
                      <button className="btn md:text-lg btn-ghost btn-xs ">
                        <IoEyeOutline />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* foot */}
            <tfoot>
              <tr className="text-center">
                <th className="w-1/3 md:text-xl xl:text-2xl">Art&Craft Item</th>
                <th className="w-1/4 md:text-xl xl:text-2xl">Subcategory</th>
                <th className="w-1/5 md:text-xl xl:text-2xl">Rating</th>
                <th className="w-1/5 md:text-xl xl:text-2xl">Explore</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <Tooltip 
        id="my-tooltip" 
        place="top" 
        effect="solid"
        style={{ backgroundColor: "#9CAFAA", color: "white", fontWeight:"700" }}/>
      </div>
    </div>
  );
};

export default AllCrafts;
