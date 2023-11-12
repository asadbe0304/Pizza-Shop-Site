import "./index.scss";
import Left from "./LeftSection";
import Right from "./../../library/index";
import Menu from "./../Menu";
import Modal from "./Modal";
import Cart from "./../../pages/Cart";
const index = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="hero">
            <Modal />
            <div className="hero__inner flex items-center justify-between">
              <Left />
              <Right />
            </div>
            <Menu />
            <Cart />
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
