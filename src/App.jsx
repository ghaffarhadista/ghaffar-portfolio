import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/partials/NavbarComponent";
import FooterComponent from "./components/partials/FooterComponent";

import HomePage from "./pages/HomePage";
import WebPage from "./pages/WebPage";
import DesignPage from "./pages/DesignPage";

function App() {
  return (
    <div className="home">
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/web" Component={WebPage} />
        <Route path="/design" Component={DesignPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
