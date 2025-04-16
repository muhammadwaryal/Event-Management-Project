import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AttendeeDashboard from "./components/AttendeeDashboard";
//  import Events from "./components/Events";
import Event from "./components/Event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./components/Events";

//  import SideBar from "./components/Sidebar";
// import Browse from "./components/Browse";
 //import Dashboard from "./pages/Dashboard";
// import SearchEvents from "./pages/SearchEvents";
// import RegisteredEvents from "./pages/RegisteredEvents";
// import Settings from "./pages/Settings";


const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/signup',
    element:<Signup/>
  },
  //  {
  // //   path:"/Browse",
  // //   element:<Browse/>
  // }
  ,
    {
     path:"/Profile",
     element:<Profile/>
   },
    {
       path:"/Events",
     element:<Events/>
    }
  ,{
    path:"/AttendeeDashboard",
    element:<AttendeeDashboard/>
  }
])

function App() {

  return (
    <>
      { <RouterProvider router = {appRouter}/> } 
     
      
    </>
  )
}

export default App;
