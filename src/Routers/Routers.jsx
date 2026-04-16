import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendDetails from "../pages/FriendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "stats",
        element: <Stats></Stats>,
      },
      {
        path: "/friendDetails/:friendId",
        loader: () => fetch("/Friends.json"),
        element: <FriendDetails></FriendDetails>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
