import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "../components";
import Home from "./../Home";
import { Login, Register } from "./../pages";
const index = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default index;
