import { GiTrashCan } from "react-icons/gi";
import Img from "./../../assets/piz.png"

const CardProduct = () => {
  return (
    <>
      <ul className="cart-list w-full flex-col gap-4 p-1 bg-black rounded-xl justify-between flex items-start ">
        <li className="flex items-center cart-close justify-between p-3 bg-slate-500  rounded-md w-full">
          <img src={Img} className="w-10 h-10" alt="img" />
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white">Burger</h3>
            <strong className="text-white flex items-center justify-between gap-1">
              20 000 uzs
            </strong>
          </div>
          <div className="flex items-end gap-3 justify-between flex-col">
            <GiTrashCan className="w-8 h-8 cursor-pointer text-white" />
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
        <li className="flex items-center justify-between cart-close p-3 bg-slate-500  rounded-md w-full">
          <img src={Img} className="w-10 h-10" alt="img" />
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
        <li className="flex items-center justify-between cart-close p-3 bg-slate-500  rounded-md w-full">
          <img src={Img} className="w-10 h-10" alt="img" />
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
      
    </>
  );
};

export default CardProduct;
