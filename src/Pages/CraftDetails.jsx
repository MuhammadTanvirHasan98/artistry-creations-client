import { useLoaderData } from "react-router-dom";


const CraftDetails = () => {

   
 const craft = useLoaderData();
  console.log(craft);

  return (
    <div>
        <h1 className="text-center text-4xl">Craft details</h1>
    </div>
  );
};

export default CraftDetails;