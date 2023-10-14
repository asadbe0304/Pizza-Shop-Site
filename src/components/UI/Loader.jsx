import { useDispatch, useSelector } from "react-redux";

const Loader = () => {
  const { isLoading } = useSelector((state) => state.auth);
  console.log(isLoading);
  return (
    <>
      <div className={`${isLoading ? "hidden" : "flex"} wrap__box `}>
        <div className="box">
          <div className="pizza-slice slice-1">
            <div className="">
              <div className="crust"></div>
              <div className="cheese">
                <div className="peperoni p-1"></div>
                <div className="peperoni p-2"></div>
                <div className="peperoni p-3"></div>
                <div className="olive o-1"></div>
                <div className="olive o-3"></div>
                <div className="olive o-4"></div>
                <div className="olive o-6"></div>
                <div className="olive o-7"></div>
              </div>
            </div>
          </div>
          <div className="pizza-slice slice-2">
            <div className="crust"></div>
            <div className="cheese">
              <div className="peperoni p-1"></div>
              <div className="peperoni p-2"></div>
              <div className="peperoni p-3"></div>
              <div className="olive o-1"></div>
              <div className="olive o-2"></div>
              <div className="olive o-3"></div>
              <div className="olive o-6"></div>
              <div className="olive o-7"></div>
            </div>
          </div>
          <div className="pizza-slice slice-3">
            <div className="crust"></div>
            <div className="cheese">
              <div className="peperoni p-1"></div>
              <div className="peperoni p-2"></div>
              <div className="peperoni p-3"></div>
              <div className="olive o-3"></div>
              <div className="olive o-4"></div>
              <div className="olive o-5"></div>
              <div className="olive o-6"></div>
            </div>
          </div>
          <div className="pizza-slice slice-4">
            <div className="crust"></div>
            <div className="cheese">
              <div className="peperoni p-1"></div>
              <div className="peperoni p-2"></div>
              <div className="peperoni p-3"></div>
              <div className="olive o-1"></div>
              <div className="olive o-2"></div>
              <div className="olive o-3"></div>
              <div className="olive o-4"></div>
            </div>
          </div>
          <div className="pizza-slice slice-5">
            <div className="crust"></div>
            <div className="cheese">
              <div className="peperoni p-1"></div>
              <div className="peperoni p-2"></div>
              <div className="peperoni p-3"></div>
              <div className="olive o-1"></div>
              <div className="olive o-2"></div>
              <div className="olive o-6"></div>
              <div className="olive o-7"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
