import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Postgre from "../pages/Postgre/Postgre";
import Test from "../pages/Test/Test";

export default function NoAuthRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postgre" element={<Postgre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
