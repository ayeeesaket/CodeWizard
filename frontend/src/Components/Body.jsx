import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Browse from "./Browse";
const Body = () => {
  const approuter = createBrowserRouter([
    {path:"/",element:<Browse/>},
    {path: "/login", element: <Login />},
    {path: "/Register", element: <Register/>},

    // {path : "/UsernameRecover" , element : <UsernameRecover/>},
    
  ]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
