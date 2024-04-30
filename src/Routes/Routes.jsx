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
import CraftDetails from "../Pages/CraftDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SubcategoryCrafts from "../Components/Home/CategorySection/CategoryCard/SubcategoryCrafts/SubcategoryCrafts";
import Review from "../Pages/Review";


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
        path:'/craftDetails/:id',
        element:
        <PrivateRoute>
          <CraftDetails/>
        </PrivateRoute>,
        loader:({params})=>fetch(`https://artistry-creations-server.vercel.app/allCrafts/${params.id}`)
      },
      {
        path:'/allArtAndCraft',
        element:<AllCrafts/>
      },
      {
        path:'/addCraft',
        element:<PrivateRoute>
          <AddCraft/>
        </PrivateRoute>
      },
      {
        path:'/updateCraft/:id',
        element:<PrivateRoute>
          <UpdateCraft/>
        </PrivateRoute>,
        loader:({params})=>fetch(`https://artistry-creations-server.vercel.app/allCrafts/${params.id}`)
      },
      {
        path:'/myList',
        element: <PrivateRoute>
          <MyList/>
        </PrivateRoute>
      },
      {
        path:'/updateCraft',
        element:<PrivateRoute>
          <UpdateCraft/>
        </PrivateRoute>
      },
      {
        path:'/subcategory/:subcategory',
        element:<SubcategoryCrafts/>,
        loader:({params})=>fetch(`https://artistry-creations-server.vercel.app/allCrafts/subcategory/${params.subcategory}`)

      },
      {
        path:'/review',
        element:<Review/>,
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
    ]
  }
])