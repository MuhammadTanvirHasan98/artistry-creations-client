import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { UseAuthContext } from "../Firebase/FirebaseAuth/FirebaseProvider";

const AddCraft = () => {
  const { user } = UseAuthContext();

  const handleAddCraft = (e) => {
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


    const newCraft = {
      item_name, processing_time, subcategory_name, customization, price, rating, image, stock_status, user_name, user_email,
      short_description
    };
    console.log(newCraft);


     fetch("https://artistry-creations-server.vercel.app/allCrafts",{
       method:"POST",
       headers:{
        "content-type":"application/json"
       },
       body:JSON.stringify(newCraft)
     })
     .then(res=> res.json())
     .then(data =>{
        if(data.insertedId){
          Swal.fire({
            title: "Added!",
            text: "Your craft item has been added.",
            icon: "success"
          });
          //  e.target.reset(); // it does not work
           console.log(data);
        }
     })
  };

  return (
    <div className="md:w-[80%] mx-auto my-20">
      <Helmet>
        <title>Add Art&Craft | Artistry Creations</title>
      </Helmet>

      <div className="bg-[#F4F3F0] md:p-10 p-6 my-4 rounded-lg md:w-[80%] w-[92%] mx-auto border-2 border-purple-300 bg-gradient-to-br from-blue-200 via-blue-50 to-purple-200">
        <div className="text-center">
          <h1 className="md:text-4xl text-3xl coff font-bold text-purple-800">
            Add New Craft
          </h1>
          <hr className="md:w-1/3 w-1/2 mx-auto border-purple-700 border-dashed" />
          <p className="md:w-3/4 mx-auto md:mt-6 mt-2 text-blue-700 font-semibold tracking-wide">
          You can add craft item you like most so that people may know about new creations of Ceramics and Pottery collections.After submitting this form, your craft item will be added to our <span className="font-bold"> All Arts&Craft </span>Section.
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleAddCraft}>
            {/* Field 1 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Item Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter item name"
                  name="itemName"
                  className="input input-bordered input-info text-blue-600 "
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Processing Time
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter time in hrs/days"
                  name="time"
                  className="input input-bordered input-info text-blue-600 "
                  required
                />
              </div>
            </div>

            {/* Field 2 */}
            {/* Select field of subcategory and Customization */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Subcategory
                  </span>
                </label>
                <select
                  name="subcategory"
                  className="select select-bordered select-info text-blue-600"
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
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Customization Option
                  </span>
                </label>
                <select
                  name="customization"
                  className="select select-bordered select-info text-blue-600"
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
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  className="input input-bordered input-info text-blue-600 "
                  required
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter rating out of 5"
                  name="rating"
                  className="input input-bordered input-info text-blue-600"
                  required
                />
              </div>
            </div>

            {/* Field 4 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo url"
                  className="input input-bordered input-info text-blue-600"
                />
              </div>

              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    Stock Status
                  </span>
                </label>
                <select
                  name="status"
                  className="select select-bordered select-info text-blue-600"
                >
                  <option>Options</option>
                  <option value="In stock">In Stock</option>
                  <option value="Made to order">Made to Order</option>
                </select>
              </div>
            </div>

            {/* Field 5 */}
            <div className="flex flex-col md:flex-row justify-between md:gap-4">
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    User Name
                  </span>
                </label>

                <div className="border-2 border-blue-300 rounded-lg">
                  <input
                    type="text"
                    name="userName"
                    className="input input-bordered input-info text-blue-600 w-full font-semibold"
                    disabled={true}
                    value={user?.displayName}
                  />
                </div>
              </div>

              {/* User email */}
              <div className="form-control md:w-1/2 w-full">
                <label className="label">
                  <span className="label-text font-bold text-blue-600 text-lg">
                    User Email
                  </span>
                </label>

                <div className="border-2 border-blue-300 rounded-lg">
                  <input
                    type="text"
                    name="userEmail"
                    className="input input-bordered input-info text-blue-600 w-full font-semibold"
                    disabled={true}
                    value={user?.email}
                  />
                </div>
              </div>
            </div>

            {/*Short description field */}
            <div className="form-control w-">
              <label className="label">
                <span className="label-text font-bold text-blue-600 text-lg">
                  Short Description
                </span>
              </label>
              <textarea
                name="shortDes"
                className="textarea textarea-info text-blue-600"
                placeholder="Give short description within 20-25 words."
              ></textarea>
            </div>

            {/*Add coffee Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary btn-outline font-bold text-xl  px-10"
              >
                Add Craft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;
