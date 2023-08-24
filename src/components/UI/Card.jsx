import Img from "./../../../public/images/piz.png";
const Card = () => {
  return (
    <div className="card flex flex-col items-center">
      <div className="card__head">
        <img src={Img} alt="images" />
      </div>
      <div className="card__body flex flex-col items-center">
        <h3 className="text-white">Italian</h3>
        <p className="text-white">
          Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
        </p>
      </div>
      <div className="card__footer">
        <div className="flex items-center justify-between ">
          <strong className="text-white">8,35$</strong>
          <button className="minus rounded-full text-white px-2 border">-</button>
          <p className="text-white"> 1</p>
          <button className="plus rounded-full text-white px-2 border">+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
