import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-[2000px] mx-auto">
       <Outlet/>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
};

export default MainLayout;