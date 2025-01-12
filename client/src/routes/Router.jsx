import MainLayout from "@/layout/MainLayout";
import SportsLeaguesLayout from "@/layout/SportsLeaguesLayout";
import AccountStatement from "@/pages/account-statement/AccountStatement";
import ActivityLog from "@/pages/activity-log/ActivityLog";
import AdminD from "@/pages/AdminD";
import BalanceOverview from "@/pages/balance-overview/BalanceOverview";
import Banner from "@/pages/Banner";
import BetsHistory from "@/pages/bets-history/BetsHistory";
import CurrentBets from "@/pages/current-bets/CurrentBets";
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
import MyProfile from "@/pages/my-profile/MyProfile";
import ProfitAndLoss from "@/pages/profit-and-loss/ProfitAndLoss";
import Settings from "@/pages/setting/Settings";
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
      {
        path: "/current-bets",
        element: <CurrentBets />,
      },
      {
        path: "/account-statement",
        element: <AccountStatement />,
      },
      {
        path: "/bets-history",
        element: <BetsHistory />,
      },
      {
        path: "/profit-loss",
        element: <ProfitAndLoss />,
      },
      {
        path: "/activity-log",
        element: <ActivityLog />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/setting",
        element: <Settings />,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
      { path: "/terms-conditions", element: <TermsAndCondition /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/rules-regulation", element: <RulesRegulation /> },
      { path: "/kyc", element: <Kyc /> },
      { path: "/responsible-gaming", element: <ResponsibleGaming /> },
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
  // toriqul vai ekhan theke shuru korben evabe
  // {path: "",element: <Home />},
  { path: "/banner", element: <Banner /> },
  { path: "/admind", element: <AdminD /> },
]);

export default router;
