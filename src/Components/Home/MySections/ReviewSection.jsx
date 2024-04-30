import { Typewriter } from "react-simple-typewriter";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideCard from "./SlideSection";

const Test = () => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1
    }
  };

  return (
    <div>
       <h1 className='text-center text-2xl'>Test Slider</h1>
       <h1 className="font-bold text-center">
        Hi, my name is{' '}
        <span style={{ color: 'blue', fontWeight: 'bold' }}>
          {/* Use the Typewriter component here */}
          <Typewriter
            words={['Muhammad', 'Tanvir', 'Hasan']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="mt-10 border-2 p-10 border-blue-400 relative">
      <Carousel 
      responsive={responsive}
      infinite={true} // Enable looping
      swipeable={true}
      draggable={true}
      centerMode={true}
      ssr={true} // Server-side rendering
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px mx-2"
      renderButtonGroupOutside={true}
    >
       <SlideCard/>
       <SlideCard/>
       <SlideCard/>
       <SlideCard/>
       <SlideCard/>
       <SlideCard/>
       <SlideCard/>
       <SlideCard/>
      {/* Add as many items as you want */}
    </Carousel>



      </div>
      
    </div>
  );
};

export default Test;