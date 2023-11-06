import "./index.scss";
import { MdClose } from "react-icons/md";
import BTN from "./../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { modalCartClose } from "../../slice/auth";
import CardProduct from "./CardProduct";

const index = () => {
  const dispatch = useDispatch();
  const hide = () => {
    dispatch(modalCartClose());
  };
  const { cart } = useSelector((state) => state.auth);
  return (
    <>
      <div
        className={`h-screen screen-cart justify-center items-start relative ${
          cart ? "flex animating" : "hidden"
        }`}
      >
        <div className="icon-close  cart-close hover:scale-95 text-white rounded-full p-1  top-5 right-5">
          <MdClose onClick={hide} className="w-8 h-8  cursor-pointer" />
        </div>
        <div className="cart p-6 flex flex-col gap-3 items-center justify-between bg-black  h-full pt-10 xl:w-5/12 lg:w-8/12 md:w-8/12 sm:w-9/12 w-full rounded-xl ">
          <h3 className="text-white">Orders</h3>
          <CardProduct />
          <div className="card__footer w-full flex flex-col items-center justify-between">
            <div className="text-white flex w-full my-4 items-center justify-between">
              Total amount : <strong>34 000 uzs</strong>
            </div>
            <div className="-t-2 w-full pt-2 flex items-center justify-center">
              <BTN text={"Shopping Submit"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
