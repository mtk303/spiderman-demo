import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/User/Home";
import Login from "../components/Auth/Login";



const router = createBrowserRouter([
   
    {
      path : "/",
      element : <Home />
    },
    {
      path : "/login",
      element : <Login />
    }
]);


export default router;