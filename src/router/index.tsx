import { AdminLayout, AuthLayout, MainLayout } from "components/layouts";
import { PATH } from "constant";
import Account from "pages/Account";
import { Login, Register, Home, RoomDetails } from "pages";
import RoomsList from "pages/RoomsList";
import { RouteObject } from "react-router-dom";
import { ViTri } from "types";
import Users from "components/templates/Admin/Users/Users";
import { Locations, Rooms } from "pages/Admin";
import { RoomChecked } from "components/templates";

interface ParentProps {
  LocationHeader: ViTri[];
  type: string;
}

export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout {...(null as any as ParentProps)} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.account,
        element: <Account />,
      },
      {
        path: PATH.roomslist,
        element: <RoomsList />,
      },
      {
        path: PATH.roomdetails,
        element: <RoomDetails />,
      },
      {
        path: PATH.roomchecked,
        element: <RoomChecked />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
  {
    path: PATH.admin,
    element: <AdminLayout />,
    children: [
      {
        path: PATH.users,
        element: <Users />,
      },
      {
        path: PATH.location,
        element: <Locations />,
      },
      {
        path: PATH.room,
        element: <Rooms />,
      },
    ],
  },
];
