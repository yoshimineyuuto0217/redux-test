import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/top/Top";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import DashBoard from "./pages/dashboard/DashBoard";
import Form from "./pages/from/Form";
import Jotai from "./pages/jotai/Jotai";
import ApiJotai from "./pages/jotai/ApiJotai";
import NestJotai from "./pages/jotai/NestJotai";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/jotai" element={<Jotai />} />
          <Route path="/jotai/api" element={<ApiJotai />} />
          <Route path="/jotai/nest" element={<NestJotai />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
