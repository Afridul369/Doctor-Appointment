import { createBrowserRouter, redirect } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Bookings from "../Pages/Bookings/Bookings";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import DoctorNotFound from "../Pages/DoctorNotFound/DoctorNotFound";

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
          path: '/doctordetails/:slug',
          Component: DoctorDetails,
          errorElement: <DoctorNotFound />,
          loader: async ({params})=> {
            const res = await fetch('/doctors.json')
            const data = await res.json()
            const doctor = data.find(d => d.name.toLowerCase().replace(/\s+/g,'-') === params.slug)
            if(!doctor) throw new Error(`${params.slug} Not Found`)
            return doctor
          }
        },

    ]
  },
]);
