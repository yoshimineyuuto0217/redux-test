import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/top/Top";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
