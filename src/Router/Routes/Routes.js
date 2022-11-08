import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Home/Services/Services";
import ServicesCart from "../../Pages/Home/Home/Services/ServicesCart/ServicesCart";


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

        // {
        //   path:'/all-services',
        //   element:<Services></Services>
        // }

      ]
      
    }
  ])

  export default router;