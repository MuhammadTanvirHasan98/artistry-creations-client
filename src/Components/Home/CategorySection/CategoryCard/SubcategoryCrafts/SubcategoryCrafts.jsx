import { useLoaderData } from "react-router-dom";
import SubcategoryCard from "./SubcategoryCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { subcategoryName } from "../../../../../JS/Function";


const SubcategoryCrafts = () => {
  
  const[subcategory, setSubcategory]=useState('');
  
  const loadedCrafts = useLoaderData();
  console.log(loadedCrafts)

  const craft = loadedCrafts.find(item=> item.subcategory_name) 
  console.log(craft)

  
  useEffect(() => {
    setSubcategory(subcategoryName(craft.subcategory_name))
 }, [craft.subcategory_name]);



 return (
  <div className="md:w-[70%] w-[80%] mx-auto my-16 text-center">
        
  <Helmet>
   <title>
      Crafts by category | Artistry Creations
    </title>
  </Helmet>

   <div className="lg:w-[70%] md:w-[80%] w-[95%] mx-auto mb-10">
  <h1 className="md:text-5xl text-4xl font-bold text-purple-800">
      Arts&Crafts List by Subcategory
  </h1>
  <hr className="xl:w-1/3 md:w-1/2 w-2/3 border-dashed border-purple-800 my-2 mx-auto" />
  {
    loadedCrafts.length > 0 ?  <p className="text-blue-700 text-xl">
     You have these below items of Subcategory <span className="font-semibold">{subcategory} </span> :
    </p>
    : 
    <p className="text-red-600 mt-10 text-2xl font-semibold">
     You did not add any item yet!
    </p>
  }
</div>


  {/* Categories Cards List */}
 <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8">
  {
     loadedCrafts.map(craft=> (
      <SubcategoryCard 
       key={craft._id}
       craft={craft}
     />) )
  }
 </div>

</div>
 );
};

export default SubcategoryCrafts;