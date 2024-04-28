import { useEffect, useState } from "react";
import { UseAuthContext } from "../Firebase/FirebaseAuth/FirebaseProvider";
import MyListCard from "./MyListCard/MyListCard";


const MyList = () => {
  const {user} = UseAuthContext();


  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/allCrafts/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);

  console.log(crafts);

  

  return (
    <div className="md:w-[70%] w-[80%] mx-auto my-20 text-center">
         <div className="lg:w-[70%] md:w-[80%] w-[95%] mx-auto mb-10">
        <h1 className="md:text-5xl text-4xl font-bold text-purple-800">
          My Art&Craft List
        </h1>
        <hr className="xl:w-1/3 md:w-1/2 w-2/3 border-dashed border-purple-800 my-2 mx-auto" />
        {
          crafts.length > 0 ?  <p className="text-blue-700 ">
           You have added these below items at your Art&Craft List.
          </p>
          : 
          <p className="text-red-600 mt-10 text-2xl font-semibold">
           You did not add any item yet!
          </p>
        }
      </div>


       {/* My Added Crafts List */}
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8">
        {
           crafts.map(craft=> (
            <MyListCard 
             key={craft._id}
             craft={craft}
           />) )
        }
       </div>




    </div>
  );
};

export default MyList; 