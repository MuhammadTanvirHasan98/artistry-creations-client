// import Banner from "./Banner/Banner";
import CraftSection from "./CraftSection/CraftSection";

const Home = () => {
  return (
    <div>
       {/* <Banner/> */}
       <div className="md:w-[70%] w-[80%] mx-auto">
         <CraftSection/>
       </div>
    </div>
  );
};

export default Home;