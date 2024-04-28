import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";



const AllCrafts = () => {


  
  const [crafts, setCrafts] = useState([]);
   
  useEffect(()=>{
      fetch("http://localhost:4000/allCrafts")
      .then(res=> res.json())
      .then(data=>{
        setCrafts(data);
      })
  },[])

  console.log(crafts);


  return (
    <div className="md:w-[70%] w-[95%] mx-auto my-20">
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-purple-800 text-center mb-10">
        All Art & Craft are here
      </h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th className="w-1/3 md:text-xl">Art&Craft Item</th>
                <th className="w-1/4 md:text-xl">Subcategory</th>
                <th className="w-1/5 md:text-xl">Rating</th>
                <th className="w-1/5 md:text-xl">Action</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {
                crafts.map(craft =>(
                  <tr key={craft?._d} className="text-center md:text-lg text-xs">
                  <td className="px-1">
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle md:w-16 md:h-16 w-12 h-12">
                          <img
                            src={craft.image}
                            alt="Art&Craft Image"
                          />
                        </div>
                      </div>
                      <div>
                        <h1 className="font-bold text-center">{craft?.item_name}</h1>
                      </div>
                    </div>
                  </td>
  
                  <td  className="px-1">
                    <h1>
                      {craft?.subcategory_name}
                    </h1>
                  </td>
  
                  <td  className="px-1">4.5</td>
                  <td  className="px-1">
                    <Link to={`/craftDetails/${craft?._id}`}>
                    <button className="btn md:text-lg btn-ghost btn-xs"><IoEyeOutline/></button>
                    </Link>
                  </td>
                </tr>
                ))
              }

              {/* <tr className="text-center md:text-lg text-xs">
                <td className="px-1">
                  <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i.ibb.co/Dt1rS85/22234103196.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-bold text-center">Clay Ceramics Stoneware</h1>
                    </div>
                  </div>
                </td>

                <td  className="px-1">
                  <h1>
                    Desktop Support Technician
                  </h1>
                </td>

                <td  className="px-1">4.5</td>
                <td  className="px-1">
                  <button className="btn btn-ghost btn-xs">Details</button>
                </td>
              </tr> */}

           
              {/* row 2 */}
         
      
              {/* row 3 */}
             
           
            </tbody>

            {/* foot */}
            <tfoot>
            <tr className="text-center">
                <th className="w-1/3 md:text-xl">Art&Craft Item</th>
                <th className="w-1/4 md:text-xl">Subcategory</th>
                <th className="w-1/5 md:text-xl">Rating</th>
                <th className="w-1/5 md:text-xl">Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCrafts;
