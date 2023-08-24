import "./index.scss";
import Logo from "./Logo";
import Btn from "./../UI/Button";
import Navbar from "./../Navbar";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header flex  items-center justify-between w-full">
            <Logo />
            <Navbar />
            <div className="order__cart flex items-center gap-3">
              <Btn text={"Login"} />
              <Link className="order__cart--link">
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
