import { Route, Routes } from "react-router-dom";
import Home from "./../Home"
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
};

export default index;
