import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BallTriangle} from "react-loader-spinner";
import { UseAuthContext } from "../Firebase/FirebaseAuth/FirebaseProvider";

const PrivateRoute = ({ children }) => {
  console.log("Private Route Called!");
  const { user, loading } = UseAuthContext();
  const location = useLocation();
  console.log(location);
  console.log(loading);
  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="blue"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

//https://i.ibb.co/ScPqhdG/ceramics-Architectural.jpg
//https://i.ibb.co/dj6MWBH/home-Decor.png
//https://i.ibb.co/31z3T9h/porcelain.jpg
//https://i.ibb.co/SJfmC3d/pottery-handmade.jpg
//https://i.ibb.co/Y3f3dbd/stoneware.jpg
//https://i.ibb.co/Z68xSgj/teracotta.png
//
//https://i.ibb.co/Pg89NR4/stoneware1-png.jpg