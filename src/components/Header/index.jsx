import "./index.scss";
import Logo from "./Logo";
import Btn from "./../UI/Button";
import Navbar from "./../Navbar";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const index = () => {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 152 ? setSticky("sticky") : setSticky("");
    }
  };

  

  return (
    <>
      <header className={`w-full ${sticky}`}>
        <div className="container">
          <div className="header flex  items-center justify-between w-full">
            <Logo />
            <Navbar />
            <div className="order__cart flex items-center gap-3">
              <Link to={"/login"}>
              <Btn text={"Login"} />
              </Link>
              <Link className="order__cart--link hover:scale-110">
                <FiShoppingBag
                  width={"60px"}
                  height={"60px"}
                  className="text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
