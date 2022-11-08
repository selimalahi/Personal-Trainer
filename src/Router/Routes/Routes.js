import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
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
            loader: () => fetch('http://localhost:5000/services')
            
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
        }

      ]
      
    }
  ])

  export default router;