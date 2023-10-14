import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "../components";
import Home from "./../Home";
import Loader from "./../components/UI/Loader";
import { Login, Register, Locations } from "./../pages";
const index = () => {
  return (
    <>
      <Header />
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </>
  );
};

export default index;
