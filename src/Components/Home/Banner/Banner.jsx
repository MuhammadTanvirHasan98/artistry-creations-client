
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Banner = () => {
  return (
    <div className="z-0">

      <div className="" data-aos="zoom-in">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          loop={true}
          className="mySwiper"
        >
  
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[800px] md:min-h-[600px] min-h-[350px] bg-[url('https://i.ibb.co/8MQ2BfT/pottery-handmade.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h3 className="md:text-2xl text-xl font-semibold text-sky-400 animate__animated animate__fadeInTopLeft  animate__slow">
                      Wonderful Artistry
                    </h3>
                    <h1 className="md:text-7xl text-4xl  font-bold animate__animated  animate__fadeInUp animate__slower text-[#f3dead]">
                    Take Hold Of <br /> Peaceful Beauty
                    </h1>
                    <p  className="md:my-4 my-2 md:text-xl  md:w-[70%] animate__animated animate__fadeInBottomRight md:mx-0 w-[90%] mx-auto">
                    We believe in the beauty of handcrafted ceramics and pottery. Each piece tells a story, carrying the marks of the artist’s hands and the essence of their creativity.
                    </p>
                    <button className="btn btn-sm md:btn-md btn-outline btn-info text-white font-bold rounded-none animate__animated animate__backInUp  hover:bg-blue-600 hover:text-black">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[800px] md:min-h-[600px] min-h-[350px] bg-[url('https://i.ibb.co/hfD4t76/vecteezy-ai-generated-pottery-background-with-copy-space-36725197.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h3 className="md:text-2xl text-xl font-semibold text-sky-400 animate__animated animate__fadeInTopLeft  animate__slow">
                      Wonderful Artistry
                    </h3>
                    <h1 className="md:text-7xl text-4xl  font-bold animate__animated  animate__fadeInUp animate__slower text-[#f3dead]">
                    Take Hold Of <br /> Peaceful Beauty
                    </h1>
                    <p  className="md:my-4 my-2 md:text-xl  md:w-[70%] animate__animated animate__fadeInBottomRight md:mx-0 w-[90%] mx-auto">
                    We believe in the beauty of handcrafted ceramics and pottery. Each piece tells a story, carrying the marks of the artist’s hands and the essence of their creativity.
                    </p>
                    <button className="btn btn-sm md:btn-md btn-outline btn-info text-white font-bold rounded-none animate__animated animate__backInUp  hover:bg-blue-600 hover:text-black">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="lg:min-h-[800px] md:min-h-[600px] min-h-[350px] bg-[url('https://i.ibb.co/6DtSg95/beverage-pottery.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h3 className="md:text-2xl text-xl font-semibold text-sky-400 animate__animated animate__fadeInTopLeft  animate__slow">
                      Wonderful Artistry
                    </h3>
                    <h1 className="md:text-7xl text-4xl  font-bold animate__animated  animate__fadeInUp animate__slower text-[#f3dead]">
                    Take Hold Of <br /> Peaceful Beauty
                    </h1>
                    <p  className="md:my-4 my-2 md:text-xl  md:w-[70%] animate__animated animate__fadeInBottomRight md:mx-0 w-[90%] mx-auto">
                    We believe in the beauty of handcrafted ceramics and pottery. Each piece tells a story, carrying the marks of the artist’s hands and the essence of their creativity.
                    </p>
                    <button className="btn btn-sm md:btn-md btn-outline btn-info text-white font-bold rounded-none animate__animated animate__backInUp  hover:bg-blue-600 hover:text-black">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;