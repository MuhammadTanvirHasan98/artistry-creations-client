// import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection/CategorySection";
import CraftSection from "./CraftSection/CraftSection";
import SlideSection from "./MySections/SlideSection";

const Home = () => {
  return (
    <div>
      <Helmet>
         <title>
            Home | Artistry Creations
         </title>
      </Helmet>
       {/* <Banner/> */}
       <div className="md:w-[70%] w-[80%] mx-auto space-y-40 mb-36">
         <CraftSection/>
         <CategorySection/>
       </div>
       <SlideSection/>
    </div>
  );
};

export default Home;