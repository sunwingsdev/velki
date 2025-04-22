import AccountStatementTabs from "@/components/AccountStatementTabs/AccountStatementTabs";
import AccountSummary from "@/components/AccountSummary/AccountSummary";
import AccountTabs from "@/components/AccountTabs/AccountTabs";
import ActiveGame from "@/components/ActiveGame/ActiveGame";
import AdminSetting from "@/components/Admin Setting/AdminSetting";
import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import Banking from "@/components/Banking/Banking";
import BetList from "@/components/BetList/BetList";
import BetListLive from "@/components/BetListLive/BetListLive";
import DeactiveGame from "@/components/DeactiveGame/DeactiveGame";
import HomeControl from "@/components/HomeControl/HomeControl";
import LiveGame from "@/components/LiveGame/LiveGame";
import MyAccount from "@/components/MyAccount/MyAccount";
import Profile from "@/components/Profile/Profile";
import Setting from "@/components/Setting/Setting";
import MainLayout from "@/layout/MainLayout";
import SportsLeaguesLayout from "@/layout/SportsLeaguesLayout";
import AccountStatement from "@/pages/account-statement/AccountStatement";
import ActivityLog from "@/pages/activity-log/ActivityLog";
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
import AdminRoute from "./AdminRoute";
import DemoGame from "@/pages/home/DemoGame/DemoGame";
import DashboardLayout from "@/layout/DashboardLayout";
import UsersData from "@/pages/UsersData/UsersData";
import AddGame from "@/pages/dashboard/AddGame";
import MotherAdminRoute from "./MotherAdminRoute";
import ColorControl from "@/pages/dashboard/ColorControl";
import MotherAdminLogin from "@/pages/MotherAdminLogin";
import { NotFound } from "@/pages/NotFound";
import GameApi from "@/components/GameApi/GameApi";

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
        path: "/games/demo/:id",
        element: <DemoGame />,
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
  {
    path: "/admindashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "generalsetting", element: <Setting /> },
      { path: "adminsetting", element: <AdminSetting /> },
      { path: "gameapi", element: <GameApi /> },
      {
        path: "homecontrol",
        element: (
          <MotherAdminRoute>
            <HomeControl />
          </MotherAdminRoute>
        ),
      },
      {
        path: "colorcontrol",
        element: (
          <MotherAdminRoute>
            <ColorControl />
          </MotherAdminRoute>
        ),
      },
      {
        path: "addgame",
        element: (
          <MotherAdminRoute>
            {" "}
            <AddGame />{" "}
          </MotherAdminRoute>
        ),
      },
      { path: "myaccount", element: <MyAccount /> },
      { path: "betlist", element: <BetList /> },
      { path: "betlive", element: <BetListLive /> },
      { path: "banking", element: <Banking /> },
      { path: "activegame", element: <ActiveGame /> },
      { path: "deactivegame", element: <DeactiveGame /> },
      { path: "livegame", element: <LiveGame /> },
      { path: "usersdata/:role", element: <UsersData /> },
    ],
  },
  { path: "/motheradmin", element: <MotherAdminLogin /> },
  { path: "/admin", element: <Banner /> },
  { path: "/accountsummary", element: <AccountSummary /> },
  { path: "/accounttabs", element: <AccountTabs /> },
  { path: "/accountstatementtabs", element: <AccountStatementTabs /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
