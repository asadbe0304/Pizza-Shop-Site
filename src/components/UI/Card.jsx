import BTN from "./Button";
import Img from "./../../../public/images/piz.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../slice/cartSlice";

const Card = ({ price }) => {
  const addItems = () => {
    useDispatch(addItem());
  };
  console.log(addItem());
  return (
    <div className="card dark:bg-slate-900 transition-all delay-100 hover:scale-105 hover:shadow-xl hover:cursor-pointer bg-slate-400 flex flex-col items-start">
      <div className="card__head ">
        <img src={Img} className="card_img" alt="images" />
      </div>
      <div className="card__body flex flex-col items-center w-full">
        <h3 className="dark:text-white text-white text-center">Italian</h3>
        <p className="dark:text-white text-white my-4 card__text text-center">
          Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
        </p>
      </div>
      <div className="card__footer flex items-center flex-col w-full">
        <div className="flex items-center justify-between w-full ">
          <strong className="text-white">
            {price} <sup>$</sup>
          </strong>
          <div className="flex items-center justify-between gap-1">
            <button className="minus rounded-full flex items-center justify-center bg-orange-500 text-white px-2 py-0 border">
              -
            </button>
            <p className="text-white"> 1</p>
            <button
              onClick={addItems}
              className="plus rounded-full flex items-center justify-center bg-orange-500 text-white px-2 py-0 border"
            >
              +
            </button>
          </div>
        </div>
        <div className="my-3 mt-8">
          <BTN text={"Order Now"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
