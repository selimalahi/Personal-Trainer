import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AllReview from "../../Pages/AllReview/AllReview";
import Blog from "../../Pages/Blog/Blog";
import DetailsPage from "../../Pages/DetailsPage/DetailsPage";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Home/Services/Services";
import ServicesCart from "../../Pages/Home/Home/Services/ServicesCart/ServicesCart";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


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
          element:<AddReview></AddReview>,
          loader: ({params}) => fetch(`https://assignment-11-server-site-sigma.vercel.app/addreview/${params.id}`)

        },
        {
          path:'/blog',
          element:<Blog></Blog>

        },
        {
          path:'/allreviews',
          element:<AllReview></AllReview>
        }

      ]
      
    }
  ])

  export default router;