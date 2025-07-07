import Blank from "./pages/Blank";
import Calendar from "./pages/Calendar";
import Home from "./pages/Dashboard/Home";
import AppLayout from "./layout/AppLayout";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import BarChart from "./pages/Charts/BarChart";
import UserProfiles from "./pages/UserProfiles";
import UserHome from "./pages/UserHome/UserHome";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import NotFound from "./pages/OtherPage/NotFound";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import SubjectsPage from "./pages/Subjects/SubjectsPage";
import { ScrollToTop } from "./components/common/ScrollToTop";
import UserFacultiesPage from "./pages/UserFaculties/UserFaculties";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SubjectDetailsPage from "./pages/SubjectDetails/SubjectDetailsPage";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route index path="/" element={<UserHome />} />
          <Route index path="/subjects" element={<SubjectsPage />} />
          <Route index path="/faculties" element={<UserFacultiesPage />} />
          <Route index path="/subjects/:subject_code" element={<SubjectDetailsPage />} />

          <Route element={<AppLayout />}>
            <Route index path="/admin" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
