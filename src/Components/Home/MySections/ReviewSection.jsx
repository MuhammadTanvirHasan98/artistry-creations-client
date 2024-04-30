import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { Link } from "react-router-dom";
("react-intersection-observer");

const ReviewSection = () => {
  return (
    <div data-aos="zoom-out">
      <div className="min-h-[200px] md:min-h-[300px] lg:min-h-[450px] bg-[url('https://i.ibb.co/1Gppfhm/review.jpg')] bg-no-repeat bg-cover object-fill bg-center flex justify-center items-center md:mt-10 mt-4 py-8 md:py-0">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center md:gap-6 gap-4 p-2 ">
          {/* Left Section */}
          <div className="md:w-[60%] text-center md:text-left  ">
          {/* data-aos="fade-down-right"  */}
            <h1 className="md:text-5xl text-3xl font-bold text-[#fff]">
            We would love to hear your thoughts.
            </h1>
            <p data-aos="fade-up" className="md:my-4 my-2 md:text-xl text-green-500 font-semibold">
            If you have had a positive experience with us, please take a moment to share your thoughts and leave us a review.
            </p>
          </div>

          {/* Right Section */}
          <div data-aos="zoom-in-left" className="md:w-[35%] lg:w-[28%] w-[70%] border-2  border-green-500 hover:border-orange-600  hover:text-black py-2 flex flex-col items-center justify-center text-white">
            <Link to="/review">
              <button className="btn btn-sm md:btn-md lg:btn-lg bg-green-600 text-white font-bold rounded-none md:px-10 px-6  border-none hover:bg-orange-600 hover:text-black">
                Give a Review <MdOutlineReviews className="mt-1 md:text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;