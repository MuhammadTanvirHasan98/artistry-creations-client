import { Link, NavLink } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";
import { UseAuthContext } from "../../Firebase/FirebaseAuth/FirebaseProvider";


const Navbar = () => {
  const { user, logOut } = UseAuthContext();


  const navLinks = (
    <div className="flex flex-col  lg:flex-row gap-2 ">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-indigo-600 text-indigo-700"
              : "font-bold btn text-sky-600"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-indigo-600 text-indigo-700"
              : "font-bold btn text-sky-600"
          }
          to="/allArtAndCraft"
        >
          All Art&Craft Items
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-indigo-600 text-indigo-700"
              : "font-bold btn text-sky-600"
          }
          to="/userProfile"
        >
         Add Art&Craft
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-indigo-600 text-indigo-700"
              : "font-bold btn text-sky-600"
          }
          to="/userProfile"
        >
         My Art&Craft List
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="relative z-10">
      <div className="navbar p-0 mt-2 lg:mt-4 border-2 border-blue-400 bg-gradient-to-r from-blue-400 to-white flex justify-between">
        <div className="navbar-start ">
          {/* Navbar left section */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-0 mr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {/* Navbar when md screen */}
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <HiHomeModern className="text-5xl text-indigo-600 lg:text-7xl" />
              <div className=" bg-gradient-to-r from-indigo-200  px-1 border-2 border-blue-500">
                <h1 className="text-indigo-800  lg:text-2xl text-sm font-bold">
                  Muhammad <br />
                  <span className="lg:text-xl text-indigo-600 flex justify-center text-[12px]   md:tracking-extra-wide tracking-widest ">
                    Real Estate
                  </span>
                </h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-2">{navLinks}</ul>
        </div>

        {user ? (
          <div className="flex justify-end w-[30%]">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="m-1">
              <img
              className="w-[40px] mr-2  h-[40px] border-2 border-blue-700 p-[1px] rounded-full"
              src={user?.photoURL!==null ?  user?.photoURL :"https://i.ibb.co/NThmbzT/Userprofile.png" }
              alt="logo"
              
            />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 right-0"
              >
                <p className="text-center text-indigo-500 play font-bold">{user?.displayName ? user?.displayName :"User Name"}</p>
                <Link className="flex mt-2 justify-center" to="/login">
              <button
                onClick={()=>logOut()}
                className="btn btn-sm mr-2 bg-sky-400 font-bold text-white"
              >
                Log out
              </button>
            </Link>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end lg:flex gap-2">
            <Link to="/register">
              <button className="btn btn-sm md:btn-md border-blue-500 bg-sky-400 font-bold text-white">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-sm md:btn-md border-blue-500 mr-2 bg-sky-400 font-bold text-white">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;