import CraftCard from "./CraftCard/CraftCard";


const CraftSection = () => {
  return (
    <div className="my-20">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8">
       <CraftCard/>
       <CraftCard/>
       <CraftCard/>
    </div>

    </div>
  );
};

export default CraftSection;