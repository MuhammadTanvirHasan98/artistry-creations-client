import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection/CategorySection";
import CraftSection from "./CraftSection/CraftSection";
import SlideSection from "./MySections/SlideSection";
import ReviewSection from "./MySections/ReviewSection";

const Home = () => {
  return (
    <div>
      <Helmet>
         <title>
            Home | Artistry Creations
         </title>
      </Helmet>
       <Banner/>
       <div className="md:w-[70%] w-[80%] mx-auto md:space-y-80 space-y-72 md:my-80  my-36">
         <CraftSection/>
         <CategorySection/>
       </div>
       <SlideSection/>
       <div className="md:w-[70%] w-[80%] mx-auto md:my-72 my-44 ">
        <ReviewSection/>
       </div>
    </div>
  );
};

export default Home;