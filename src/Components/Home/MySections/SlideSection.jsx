import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const SlideSection = () => {
  return (
    <div className="z-0">
      <div className="" data-aos="zoom-in">
        <div className="text-center my-10 mx-auto w-[80%]">
          <h1 className="text-4xl text-[#46c594] font-bold">
            World Best Ceramics & Pottery
          </h1>
          <p className="lg:w-1/2 mx-auto mt-2">
            Explore unparalleled craftsmanship and timeless beauty in our
            world-renowned ceramics and pottery collection. Elevate your space
            with <span className="font-bold">Artistry Creations</span>
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,EffectFade, Pagination, Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="xl:min-h-[900px] lg:min-h-[800px] md:min-h-[600px] min-h-[350px] bg-[url('https://i.ibb.co/JrHZ8QQ/world-1.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h1 className="md:text-7xl text-4xl  font-bold animate__animated  animate__fadeInUp animate__slow text-[#f3dead]">
                      The Beauty of <br />
                      <span style={{ color: "#f3dead", fontWeight: "bold" }}>
                        <Typewriter
                          words={["Ceramics", "and", "Pottery"]}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={60}
                          deleteSpeed={50}
                          delaySpeed={700}
                        />
                      </span>
                    </h1>
                    <p className="md:my-4 my-2 text-lg md:text-xl animate__animated animate__fadeInBottomLeft animate__slow md:w-[70%] md:mx-0 w-[90%] mx-auto ">
                      Immerse yourself in unparalleled craftsmanship with our
                      world-class ceramics and pottery collection, where
                      artistry meets functionality in every piece
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="xl:min-h-[900px] lg:min-h-[800px] md:min-h-[600px] min-h-[350px] bg-[url('https://i.ibb.co/yyBjhnt/world-3.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-end items-center md:gap-10 gap-4">
                  <div className="md:w-2/3 text-center md:text-right text-white md:ml-20">
                    <h1 className="md:text-7xl text-4xl  font-bold animate__animated  animate__fadeInUp animate__slow text-[#46c594]">
                    The Allure of <br />
                    <span style={{ color: "#46c594", fontWeight: "bold" }}>
                        <Typewriter
                          words={["Ceramics", "and", "Pottery"]}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={60}
                          deleteSpeed={50}
                          delaySpeed={700}
                        />
                      </span>
                    </h1>
                    <div className="flex flex-row-reverse">
                    <p className="md:my-4 my-2 text-lg md:text-xl animate__animated animate__fadeInBottomRight animate__slow md:w-[70%] md:mx-0 w-[90%] mx-auto text-gray-800">
                    Explore timeless beauty and intricate designs crafted by skilled artisans, showcasing the rich heritage of ceramics with each unique creation
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="xl:min-h-[900px] lg:min-h-[800px] md:min-h-[600px] min-h-[350px] bg-[url('https://i.ibb.co/XbMdL95/world2.jpg')] bg-no-repeat bg-cover bg-center flex justify-center items-center py-8 md:py-0">
                {/* Slider left Section */}
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-10 gap-4 p-2 ">
                  <div className="md:w-2/3 text-center md:text-left text-white md:ml-20">
                    <h1 className="md:text-7xl text-4xl  font-bold animate__animated  animate__fadeInUp animate__slow text-[#6a4f10]">
                    Unveiling Charms of<br /> 
                    <span style={{ color: "#6a4f10", fontWeight: "bold" }}>
                        <Typewriter
                          words={["Ceramics", "and", "Pottery"]}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={60}
                          deleteSpeed={50}
                          delaySpeed={700}
                        />
                      </span>
                    </h1>
                    <p className="md:my-4 my-2 md:text-xl  md:w-[70%] animate__animated animate__fadeInBottomLeft animate__slow  md:mx-0 w-[90%] mx-auto text-yellow-600">
                    From functional pottery to decorative ceramics, discover the perfect blend of tradition and innovation, elevating your space with exquisite artistry
                    </p>
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

export default SlideSection;
