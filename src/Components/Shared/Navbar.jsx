import { Link, NavLink } from "react-router-dom";
import { UseAuthContext } from "../../Firebase/FirebaseAuth/FirebaseProvider";
import logo from "../../assets/logo1.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = UseAuthContext();
  const [theme, setTheme] = useState("light");

  // change theme by toggle
  const handleToggle = (e) => {
     console.log(e.target.checked)
    if (e.target.checked) {
      setTheme("lemonade");
    } else {
      setTheme("light");
    }
  };

 
  // when theme changes then it will also store in local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

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
          All Art&Craft
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-indigo-600 text-indigo-700"
              : "font-bold btn text-sky-600"
          }
          to="/addCraft"
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
          to="/myList"
        >
          My Art&Craft List
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="relative z-10">
      <div className="navbar p-0 border-2 border-blue-400 bg-gradient-to-r from-blue-50 to-white flex justify-between lg:px-20 md:px-10 px-3">
        <div className="navbar-start w-full">
          {/* Navbar left section */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm px-0 mr-1 btn-ghost lg:hidden flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
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
              <img className="w-[30px] h-[26px]" src={logo} alt="logo" />

              <h1 className="  lg:text-3xl text-xl font-bold text-indigo-600 flex justify-center text-[12px] tracking-wide bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">
                Artistry Creations
              </h1>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex mr-2">
          <ul className=" flex gap-2">{navLinks}</ul>
        </div>


        {/* Theme Controller */}
         <div>
            <label className="cursor-pointer grid place-items-center">
                  <input
                    type="checkbox"
                    onChange={handleToggle}
                    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                  />
                  <svg
                    className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <svg
                    className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
            </label>
         </div>

        {user ? (
          <div className="flex justify-end md:w-[70%]">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  className="w-[40px] mr-2  h-[40px] border-2 border-blue-700 p-[1px] rounded-full"
                  src={
                    user?.photoURL !== null
                      ? user?.photoURL
                      : "https://i.ibb.co/NThmbzT/Userprofile.png"
                  }
                  alt="logo"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 right-0"
              >
                <p className="text-center text-indigo-500 play font-bold">
                  {user?.displayName ? user?.displayName : "User Name"}
                </p>
                <Link className="flex mt-2 justify-center" to="/login">
                  <button
                    onClick={() => logOut()}
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
            <Link to="/login">
              <button className="btn btn-sm md:btn-md btn-outline border-blue-500 mr-2 font-bold text-blue-600">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-sm md:btn-md border-blue-500 bg-sky-400 hover:text-blue-500 hover:bg-white font-bold text-white">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
