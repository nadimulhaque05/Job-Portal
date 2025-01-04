import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import DashBoard from "./pages/DashBoard";
import AddJob from "./pages/AddJob";
import ViewApplications from "./pages/ViewApplications";
import Managejobs from "./pages/managejobs";
import 'quill/dist/quill.snow.css';

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<Managejobs />} />
          <Route
            path="view-applications"
            element={<ViewApplications />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
