import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { UseAuthContext } from "../Firebase/FirebaseAuth/FirebaseProvider";

const UpdateCraft = () => {
  const { user } = UseAuthContext();

  const loadedCraft = useLoaderData();
  console.log(loadedCraft);

  const {
    _id,
    item_name,
    processing_time,
    subcategory_name,
    customization,
    price,
    rating,
    image,
    stock_status,
    short_description,
  } = loadedCraft;

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
    const user_name = user?.displayName;
    const user_email = user?.email;

    const updateCraft = {
      item_name,
      processing_time,
      subcategory_name,
      customization,
      price,
      rating,
      image,
      stock_status,
      short_description,
      user_name,
      user_email,
    };
    console.log(updateCraft);

    fetch(`https://artistry-creations-server.vercel.app/allCrafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your craft item has been updated.",
            icon: "success",
          });
          console.log(data);
        }
        if (data.modifiedCount == 0) {
          Swal.fire({
            title: "Not Updated!",
            text: "You did not update any field of your craft item.",
            icon: "error",
          });
          //  e.target.reset();
          console.log(data);
        }
      });
  };

  return (
    <div className="md:w-[80%] mx-auto my-20">
      <Helmet>
        <title>Update Craft | Artistry Creations</title>
      </Helmet>

      <div className="bg-[#F4F3F0] md:p-10 p-6 my-4 rounded-lg md:w-[80%] w-[92%] mx-auto border-2 border-sky-300 bg-gradient-to-br from-purple-200 via-blue-50 to-blue-200">
        <div className="text-center">
          <h1 className="md:text-4xl text-3xl coff font-bold text-blue-600">
            Update Your Craft
          </h1>
          <hr className="md:w-1/2 w-2/3 mx-auto mt-2 border-blue-700 border-dashed" />
          <p className="md:w-3/4 mx-auto mt-2 text-blue-700 font-semibold tracking-wide">
            You can update any information you want. After submitting your
            update form, your craft item will be updated.
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleUpdateCraft}>
            {/* Field 1 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-indigo-700   text-lg">
                    Item Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter item name"
                  name="itemName"
                  className="input input-bordered input-primary text-indigo-700   "
                  defaultValue={item_name}
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-indigo-700   text-lg">
                    Processing Time
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter time in hrs/days"
                  name="time"
                  className="input input-bordered input-primary text-indigo-700   "
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
                  <span className="label-text font-bold text-indigo-700   text-lg">
                    Subcategory
                  </span>
                </label>
                <select
                  name="subcategory"
                  className="select select-bordered select-primary text-indigo-700  "
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
                  <span className="label-text font-bold text-indigo-700   text-lg">
                    Customization Option
                  </span>
                </label>
                <select
                  name="customization"
                  className="select select-bordered select-primary text-indigo-700  "
                  defaultValue={customization}
                >
                  <option>Options</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            {/* Field 3 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-indigo-700   text-lg">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  className="input input-bordered input-primary text-indigo-700  "
                  defaultValue={price}
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-indigo-700 text-lg">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter rating out of 5"
                  name="rating"
                  className="input input-bordered input-primary text-indigo-700"
                  defaultValue={rating}
                  required
                />
              </div>
            </div>

            {/* Field 4 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-indigo-700 text-lg">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo url"
                  className="input input-bordered input-primary text-indigo-700"
                  defaultValue={image}
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-indigo-700   text-lg">
                    Stock Status
                  </span>
                </label>
                <select
                  name="status"
                  className="select select-bordered select-primary text-indigo-700  "
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
                <span className="label-text font-bold text-indigo-700   text-lg">
                  Short Description
                </span>
              </label>
              <textarea
                name="shortDes"
                className="textarea textarea-primary text-indigo-700  "
                placeholder="Give short description within 20 words."
                defaultValue={short_description}
              ></textarea>
            </div>

            {/*Add coffee Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary btn-outline font-bold text-xl px-10"
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
