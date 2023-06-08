import Login from "./component/Login";
import LoginSuccess from "./component/LoginSuccess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/success" element={<LoginSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
