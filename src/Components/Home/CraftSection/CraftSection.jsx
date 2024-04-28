import { useEffect, useState } from "react";
import CraftCard from "./CraftCard/CraftCard";
import { Link } from "react-router-dom";


const CraftSection = () => {

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
    <div className="my-20">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8">

       {
        crafts.slice(0,6).map(craft => (
          <CraftCard 
           key={craft._id}
           craft={craft}
          />
        ))
       }
    </div>
 
    <div className="mt-16 text-center">
    <Link to='/allArtAndCraft'>
            <button className="btn btn-outline text-indigo-600 hover:text-indigo-100 hover:bg-indigo-600 font-bold px-8 text-xl">
               Explore More
            </button>
          </Link>
    </div>
     
    </div>
  );
};

export default CraftSection;