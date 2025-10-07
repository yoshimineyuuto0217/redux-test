import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/top/Top";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import DashBoard from "./pages/dashboard/DashBoard";
import Jotai from "./pages/jotai/Jotai";
import NestJotai from "./pages/jotai/NestJotai";
import ApiJotai from "./pages/jotai/ApiJotai";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/jotai" element={<Jotai />} />
          <Route path="/jotai/nest" element={<NestJotai />} />
          <Route path="/jotai/apijotai" element={<ApiJotai />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
