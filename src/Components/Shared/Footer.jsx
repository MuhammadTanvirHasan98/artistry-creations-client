import { ImFacebook2, ImInstagram } from "react-icons/im";
import logo from "../../assets/logo.png";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <footer className="lg:py-20 md:py-14 py-10 bg-indigo-200 text-base-content ">
        <div className="md:w-[70%] w-[80%] mx-auto ">
          <div className="flex flex-col md:flex-row md:justify-between justify-center  gap-4 mb-10">
            <div className="md:w-1/2 w-full">
              <h1 className="md:text-3xl text-2xl font-bold mb-2 text-center md:text-left text-indigo-600">
                Get in Touch
              </h1>
              <p className="text-center md:text-left text-gray-600"> Join {" "}
                <span className="text-indigo-600 font-bold play">
                  Artistry Creations
                </span>{" "}
                today to showcase your creations and build your personal gallery of masterpieces. With every stroke of the brush and every turn of the wheel, let your creativity shine bright.
              </p>
              <p className="text-gray-600 my-2 text-center md:text-left">
                Contact:{" "}
                <span className="text-indigo-500 font-semibold">
                  +8801750996919
                </span>{" "}
              </p>
            </div>

            <div className="space-y-6 ">
              <form>
                <h6 className="md:text-2xl font-semibold text-xl text-center md:text-left text-indigo-600">
                  Newsletter
                </h6>

                <div className="flex flex-col   md:items-start items-center">
                <label className="label">
                  <span className="label-text text-gray-600">Enter your email address:</span>
                </label>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered input-info rounded-none md:w-full w-[180px] md:h-[48px] h-[34px]"
                  />
                  <button className="btn md:btn-md btn-sm btn-primary rounded-none my-auto">
                    Subscribe
                  </button>
                </div>
                </div>

              </form>
            </div>
          </div>

          {/* Terms and Privacy */}
          <div>
            <hr className="border-indigo-300 w-[80%] mx-auto my-4" />
            <div>
              <nav className="w-2/3 mx-auto flex  items-center justify-center gap-10 text-indigo-600 text-xl">
                <a className="link link-hover"><ImFacebook2 /></a>
                <a className="link link-hover"><ImInstagram /></a>
                <a className="link link-hover"><FaSquareTwitter className="text-2xl" /></a>
              </nav>
            </div>

            <hr className="border-indigo-300 w-[80%] mx-auto my-4" />

            <div>
              <nav className="w-2/3 mx-auto flex flex-col items-center md:flex-row justify-between gap-2 text-indigo-500">
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
            </div>
            <hr className="border-indigo-300 w-[80%] mx-auto my-4" />
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row justify-between">
            <p className="text-gray-600">
              All rights reserved@
              <span className="font-bold text-indigo-500">2024</span>{" "}
            </p>
            <p className="font-semibold text-indigo-700 flex items-center play">
              <img
                className="w-[15px]  h-[13px] rounded-full"
                src={logo}
                alt="logo"
              />
              Artistry Creations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
