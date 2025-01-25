import AccountStatementTabs from "@/components/AccountStatementTabs/AccountStatementTabs";
import AccountSummary from "@/components/AccountSummary/AccountSummary";
import AccountTabs from "@/components/AccountTabs/AccountTabs";
import ActiveGame from "@/components/ActiveGame/ActiveGame";
import AdminSetting from "@/components/Admin Setting/AdminSetting";
import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import Banking from "@/components/Banking/Banking";
import BetList from "@/components/BetList/BetList";
import BetListLive from "@/components/BetListLive/BetListLive";
import CommonNavMenu from "@/components/CommonNavMenu/CommonNavMenu";
import DeactiveGame from "@/components/DeactiveGame/DeactiveGame";
import Game from "@/components/GameApi/Game";
import HeadingNavbar from "@/components/HeadingNavbar/HeadingNavbar";
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
  { path: "/adminLogin", element: <Banner /> },
  { path: "/adminDashboard", element: <AdminDashboard /> },
  { path: "/setting1234", element: <Setting /> },
  { path: "/myAccount", element: <MyAccount /> },
  { path: "/betLive", element: <BetListLive /> },
  { path: "/betList", element: <BetList /> },
  { path: "/banking", element: <Banking /> },
  { path: "/headingNavbar", element: <HeadingNavbar /> },
  { path: "/adminSetting", element: <AdminSetting /> },
  { path: "/gameApi", element: <Game /> },
  { path: "/activeGame", element: <ActiveGame /> },
  { path: "/deactiveGame", element: <DeactiveGame /> },
  { path: "/liveGame", element: <LiveGame /> },
  { path: "/homeControl", element: <HomeControl /> },
  { path: "/commonNavMenu", element: <CommonNavMenu /> },
  { path: "/accountSummary", element: <AccountSummary /> },
  { path: "/accountTabs", element: <AccountTabs /> },
  { path: "/accountStatementTabs", element: <AccountStatementTabs /> },
  { path: "/profile", element: <Profile /> },
]);

export default router;
