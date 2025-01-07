import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Test from "../pages/Test/Test";
import Login from "../pages/Auth/Login/Login";

export default function NoAuthRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
