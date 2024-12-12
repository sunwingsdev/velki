import MainLayout from "@/layout/MainLayout";
import SportsLeaguesLayout from "@/layout/SportsLeaguesLayout";
import BalanceOverview from "@/pages/balance-overview/BalanceOverview";
import Casino from "@/pages/home/Casino/Casino";
import Home from "@/pages/home/Home/Home";
import Kyc from "@/pages/home/Kyc/Kyc";
import Leagues from "@/pages/home/Leagues/Leagues";
import Login from "@/pages/home/Login/Login";
import PrivacyPolicy from "@/pages/home/PrivacyPolicy/PrivacyPolicy";
import Register from "@/pages/home/Register/Register";
import ResponsibleGaming from "@/pages/home/ResponsibleGaming/ResponsibleGaming";
import RulesRegulation from "@/pages/home/RulesRegulation/RulesRegulation";
import Sports from "@/pages/home/Sports/Sports";
import TermsAndCondition from "@/pages/home/TermsAndCondition/TermsAndCondition";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/balance-overview",
        element: <BalanceOverview />,
      },
    ],
  },
  {
    path: "/leagues",
    element: <SportsLeaguesLayout />,
    children: [
      {
        path: "",
        element: <Leagues />,
      },
    ],
  },
  {
    path: "/sports",
    element: <SportsLeaguesLayout />,
    children: [
      {
        path: "",
        element: <Sports />,
      },
    ],
  },
  {
    path: "/casino",
    element: <SportsLeaguesLayout />,
    children: [
      {
        path: "",
        element: <Casino />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Register /> },
  { path: "/terms-conditions", element: <TermsAndCondition /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/rules-regulation", element: <RulesRegulation /> },
  { path: "/kyc", element: <Kyc /> },
  { path: "/responsible-gaming", element: <ResponsibleGaming /> },
]);

export default router;
