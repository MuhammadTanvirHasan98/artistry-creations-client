import { useEffect, useState } from "react";
import { UseAuthContext } from "../Firebase/FirebaseAuth/FirebaseProvider";
import MyListCard from "./MyListCard/MyListCard";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = UseAuthContext();
  const [crafts, setCrafts] = useState([]);
  const [originalCrafts, setOriginalCrafts] = useState([]);

  useEffect(() => {
    fetch(
      `https://artistry-creations-server.vercel.app/allCrafts/email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setOriginalCrafts(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artistry-creations-server.vercel.app/allCrafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft item has been deleted.",
                icon: "success",
              });
              const remainingCrafts = crafts.filter((item) => item._id !== _id);
              setCrafts(remainingCrafts);
            }
          });
      }
    });
  };

  const handleCustomization = (e) => {
    const value = e.target.value;
    if (value === "Yes") {
      const customizedCrafts = originalCrafts.filter(
        (item) => item.customization === "Yes"
      );
      setCrafts(customizedCrafts);
    } else {
      setCrafts(originalCrafts);
    }
  };

  // console.log(crafts);

  return (
    <div className="md:w-[70%] w-[80%] mx-auto mt-20 text-center mb-36">
      <Helmet>
        <title>My Art&Craft List | Artistry Creations</title>
      </Helmet>

      <div className="lg:w-[70%] md:w-[80%] w-[95%] mx-auto md:mb-16 mb-12">
        <h1 className="md:text-5xl text-4xl font-bold text-purple-800">
          My Art&Craft List
        </h1>
        <hr className="xl:w-1/3 md:w-1/2 w-2/3 border-dashed border-purple-800 my-2 mx-auto" />
        {crafts.length > 0 ? (
          <div className="space-y-4">
            <p className="text-blue-700 text-xl">
              You have added these below items at your Art&Craft List:
            </p>

            <div className="form-control mx-auto md:w-2/3 w-full">
              <label className="label">
                <span className="label-text font-bold text-blue-600 text-lg md:w-[90%] w-full mx-auto">
                  You can filter by Customization Option:
                </span>
              </label>
              <select
                onChange={handleCustomization}
                name="customization"
                className="select select-bordered select-info text-blue-600 xl:w-1/4 lg:w-1/3 md:w-[40%] w-1/2 mx-auto"
              >
                <option>Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        ) : (
          <p className="text-red-600 mt-10 text-2xl font-semibold">
            You did not add any item yet!
          </p>
        )}
      </div>

      {/* My Added Crafts List */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-8">
        {crafts.map((craft) => (
          <MyListCard
            key={craft._id}
            craft={craft}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyList;
