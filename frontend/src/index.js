import React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./authorization/Auth";
import Header from "./components/Header";
import { Provider} from "react-redux";
import store from "./store";
import VideoSingle from "./components/Video/VideoSingle";
import SingleChannelPage from "./components/SingleChannel/SingleChannelPage";
import EditVideo from "./components/Video/EditVideo";
import EditChannel from "./components/SingleChannel/EditChannel";
import Registration from "./components/Registration";
import AddVideo from "./components/Video/AddVideo";
import ChangePassword from "./components/SingleChannel/ChangePassword";

const App = () => {

  if (window.localStorage.getItem("jwt")) {
    return (
      <div>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/play/:id" element={<VideoSingle />} />
              <Route path="/channel/:id" element={<SingleChannelPage />} />
              <Route path="/editVIdeo/:id" element={<EditVideo />} />
              <Route path="/addVideo" element={<AddVideo />} />
              <Route path="/EditChannel" element={<EditChannel />} />
              <Route path="/login" element={<Login />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/play/:id" element={<VideoSingle />} />
              <Route path="/channel/:id" element={<SingleChannelPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Provider store={store}><App /></Provider> );
