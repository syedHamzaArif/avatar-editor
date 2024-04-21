import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Emoji from "./pages/emoji";
import Monogram from "./pages/monogram";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Emoji />} />
          <Route path="/monogram" element={<Monogram />} />
          <Route
            path="/photos"
            element={
              <div className="bg-gray-900 text-white flex-1 min-h-screen"></div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
