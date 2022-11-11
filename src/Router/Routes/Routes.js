import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
// import AllReview from "../../Pages/AllReview/AllReview";
import Blog from "../../Pages/Blog/Blog";
import DetailsPage from "../../Pages/DetailsPage/DetailsPage";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdatePage from "../../Pages/UpdatePage/UpdatePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('https://assignment-11-server-site-sigma.vercel.app/services')
            
        },
        {
          path:'/all-services',
          element:<Services></Services>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/details/:id',
          element:<DetailsPage></DetailsPage>,
          loader: ({params}) => fetch(`https://assignment-11-server-site-sigma.vercel.app/details/${params.id}`)

        },
        {
          path: '/addreview/:id',
          element:<PrivateRoute><AddReview></AddReview></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-11-server-site-sigma.vercel.app/addreview/${params.id}`)

        },
        {
          path:'/blog',
          element:<Blog></Blog>

        },
        {
          path:'/myreviews',
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdatePage></UpdatePage>,</PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/updatereviews/${params.id}`)

        },
        {
          path:'/addservice',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        }
        

      ]
      
    }
  ])

  export default router;