import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Bookings from "../Pages/Bookings/Bookings";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component : Home
        },
        {
          path: '/bookings',
          Component: Bookings
        },
        {
          path: '/doctordetails/:id',
          loader: async ({params})=> {
            const res = await fetch('doctors.json')
            const data = await res.json()
            return data.find(d => d.id === parseInt(params.id))
          },
          Component: DoctorDetails
        },

    ]
  },
]);
