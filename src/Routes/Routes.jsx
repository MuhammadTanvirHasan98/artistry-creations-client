import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddCraft from "../Pages/AddCraft";
import AllCrafts from "../Pages/AllCrafts";
import MyList from "../Pages/MyList";
import UpdateCraft from "../Pages/UpdateCraft";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/allArtAndCraft',
        element:<AllCrafts/>
      },
      {
        path:'/addCraft',
        element:<AddCraft/>
      },
      {
        path:'/myList',
        element:<MyList/>
      },
      {
        path:'/updateCraft',
        element:<UpdateCraft/>
      },
    ]
  }
])