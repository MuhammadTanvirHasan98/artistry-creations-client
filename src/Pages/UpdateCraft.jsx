import { Helmet } from "react-helmet";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import { UseAuthContext } from "../Firebase/FirebaseAuth/FirebaseProvider";

const UpdateCraft = () => {
  // const { user } = UseAuthContext();

  const loadedCraft = useLoaderData();
  console.log(loadedCraft);
   
   const{item_name, processing_time, subcategory_name, customization,price, rating, image, stock_status, short_description} = loadedCraft;

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const item_name = form.get("itemName");
    const processing_time = form.get("time");
    const subcategory_name = form.get("subcategory");
    const customization = form.get("customization");
    const price = form.get("price");
    const rating = form.get("rating");
    const image = form.get("photo");
    const stock_status = form.get("status");
    const short_description = form.get("shortDes");

   
    const updateCraft = {
      item_name, processing_time, subcategory_name, customization, price, rating, image, stock_status, short_description
    };
    console.log(updateCraft);

  };

  return (
    <div className="md:w-[80%] mx-auto my-20">
      <Helmet>
        <title>Update Craft | Artistry Creations</title>
      </Helmet>
      <Link to="/">
        <h1 className="flex items-center gap-2 text-2xl coff font-bold ml-6">
          <IoMdArrowBack />
          Back to Home
        </h1>
      </Link>
      <div className="bg-[#F4F3F0] md:p-10 p-6 my-4 rounded-lg md:w-[80%] w-[92%] mx-auto">
        <div className="text-center">
          <h1 className="md:text-4xl text-3xl coff font-bold text-orange-800">
            Update Your Craft
          </h1>
          <hr className="md:w-1/2 w-2/3 mx-auto mt-2 border-orange-700 border-dashed" />
          <p className="md:w-3/4 mx-auto md:mt-6 mt-2 text-orange-800 font-semibold tracking-wide">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleUpdateCraft}>
            {/* Field 1 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Item Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter item name"
                  name="itemName"
                  className="input input-bordered input-warning text-orange-700 "
                  defaultValue={item_name}
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Processing Time
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter time in hrs/days"
                  name="time"
                  className="input input-bordered input-warning text-orange-700 "
                  defaultValue={processing_time}
                  required
                />
              </div>
            </div>

            {/* Field 2 */}
            {/* Select field of subcategory and Customization */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Subcategory
                  </span>
                </label>
                <select
                  name="subcategory"
                  className="select select-bordered select-warning text-orange-700"
                  defaultValue={subcategory_name}
                >
                  <option>Options</option>
                  <option value="01">Clay-made pottery</option>
                  <option value="02">Stoneware</option>
                  <option value="03">Porcelain</option>
                  <option value="04">Terra Cotta</option>
                  <option value="05">Ceramics & Architectural</option>
                  <option value="06">Home decor pottery</option>
                </select>
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Customization Option
                  </span>
                </label>
                <select
                  name="customization"
                  className="select select-bordered select-warning text-orange-700"
                  defaultValue={customization}
                >
                    <option>Options</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            {/* Field 3 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  className="input input-bordered input-warning text-orange-700"
                  defaultValue={price}
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Rating
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter rating out of 5"
                  name="rating"
                  className="input input-bordered input-warning text-orange-700"
                  defaultValue={rating}
                  required
                />
              </div>
            </div>

            {/* Field 4 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo url"
                  className="input input-bordered input-warning text-orange-700"
                  defaultValue={image}
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-orange-700 text-lg">
                    Stock Status
                  </span>
                </label>
                <select
                  name="status"
                  className="select select-bordered select-warning text-orange-700"
                  defaultValue={stock_status}
                >
                  <option>Options</option>
                  <option value="In stock">In Stock</option>
                  <option value="Made to order">Made to Order</option>
                </select>
              </div>
            </div>
    
            {/*Short description field */}
            <div className="form-control w-">
              <label className="label">
                <span className="label-text font-bold text-orange-700 text-lg">
                  Short Description
                </span>
              </label>
              <textarea
                name="shortDes"
                className="textarea textarea-warning text-orange-700"
                placeholder="Give short description within 20 words."
                defaultValue={short_description}
              ></textarea>
            </div>

            {/*Add coffee Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-warning btn-outline font-bold text-xl  px-10"
              >
                Update Craft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCraft;
