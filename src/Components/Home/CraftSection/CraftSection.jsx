import { useEffect, useState } from "react";
import CraftCard from "./CraftCard/CraftCard";


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
      <h1 className="text-center">{crafts.length}</h1>
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

    </div>
  );
};

export default CraftSection;