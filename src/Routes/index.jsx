import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "../components";
import Home from "./../Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
const index = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default index;
