import "./index.scss";
import { MdClose } from "react-icons/md";
import { GiTrashCan } from "react-icons/gi";
import BTN from "./../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { modalCartClose } from "../../slice/auth";
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
        <div className="icon-close absolute bg-red-600 hover:bg-red-400 hover:scale-95 text-white rounded-full p-1 border top-5 right-5">
          <MdClose onClick={hide} className="w-8 h-8 cursor-pointer" />
        </div>
        <div className="cart p-6 flex flex-col gap-3 items-center justify-between bg-black  h-full pt-10 xl:w-5/12 lg:w-8/12 md:w-8/12 sm:w-9/12 w-full rounded-xl border">
          <h3 className="text-white">Orders</h3>
          <ul className="cart-list w-full flex-col gap-4 p-1 bg-zinc-400 rounded-xl justify-between flex items-start ">
            <li className="flex items-center justify-between p-3 bg-slate-500 border rounded-md w-full">
              <img src="" className="w-10 h-10" alt="img" />
              <div className="flex flex-col items-start gap-3">
                <h3 className="text-white">Burger</h3>
                <strong className="text-white flex items-center justify-between gap-1">
                  20 000 uzs
                </strong>
              </div>
              <div className="flex items-end gap-3 justify-between flex-col">
                <GiTrashCan className="w-8 h-8 cursor-pointer" />
                <div className="flex items-center gap-3 justify-between">
                  <button type="button" className="btn px-1">
                    -
                  </button>
                  <p className="font-medium">1</p>
                  <button type="button" className="btn px-1 ">
                    +
                  </button>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 bg-slate-500 border rounded-md w-full">
              <img src="" className="w-10 h-10" alt="img" />
              <div className="flex flex-col items-start gap-3">
                <h3 className="text-white">Burger</h3>
                <strong className="text-white flex items-center justify-between gap-1">
                  20 000 uzs
                </strong>
              </div>
              <div className="flex items-end gap-3 justify-between flex-col">
                <GiTrashCan className="w-8 h-8 cursor-pointer" />
                <div className="flex items-center gap-3 justify-between">
                  <button type="button" className="btn px-1">
                    -
                  </button>
                  <p className="font-medium">1</p>
                  <button type="button" className="btn px-1 ">
                    +
                  </button>
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 bg-slate-500 border rounded-md w-full">
              <img src="" className="w-10 h-10" alt="img" />
              <div className="flex flex-col items-start gap-3">
                <h3 className="text-white">Burger</h3>
                <strong className="text-white flex items-center justify-between gap-1">
                  20 000 uzs
                </strong>
              </div>
              <div className="flex items-end gap-3 justify-between flex-col">
                <GiTrashCan className="w-8 h-8 cursor-pointer" />
                <div className="flex items-center gap-3 justify-between">
                  <button type="button" className="btn px-1">
                    -
                  </button>
                  <p className="font-medium">1</p>
                  <button type="button" className="btn px-1 ">
                    +
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className="card__footer w-full flex flex-col items-center justify-between">
            <div className="text-white flex w-full my-4 items-center justify-between">
              Total amount : <strong>34 000 uzs</strong>
            </div>
            <div className="border-t-2 w-full pt-2 flex items-center justify-center">
              <BTN text={"Shopping Submit"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
