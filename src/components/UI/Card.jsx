import Img from "./../../../public/images/piz.png";
const Card = () => {
  return (
    <div className="card flex flex-col items-start">
      <div className="card__head ">
        <img src={Img} className="animate-[spin_3s_linear_infinite] card_img" alt="images" />
      </div>
      <div className="card__body flex flex-col items-center w-full">
        <h3 className="text-white text-center">Italian</h3>
        <p className="text-white my-4 text-center">
          Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
        </p>
      </div>
      <div className="card__footer w-full">
        <div className="flex items-center justify-between w-full ">
          <strong className="text-white">8,35$</strong>
          <div className="flex items-center justify-between gap-1">
            <button className="minus rounded-full flex items-center justify-center bg-orange-500 text-white px-2 py-0 border">
              -
            </button>
            <p className="text-white"> 1</p>
            <button className="plus rounded-full flex items-center justify-center bg-orange-500 text-white px-2 py-0 border">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
