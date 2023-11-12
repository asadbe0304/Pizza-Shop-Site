import "./index.scss";
import Logo from "./Logo";
import Btn from "./../UI/Button";
import Navbar from "./../Navbar";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { modalCart } from "../../slice/auth";
import { useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch();

  const show = () => {
    dispatch(modalCart());
  };

  const location = useLocation();
  const { pathname } = location;
  const isSignOrLogin =
    pathname.includes("/signup") || pathname.includes("/login");

  // const [sticky, setSticky] = useState("");

  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);
  //   return () => window.removeEventListener("scroll", stickNavbar);
  // }, []);
  // const stickNavbar = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     windowHeight > 152 ? setSticky("sticky") : setSticky("");
  //   }
  // };

  // login button path /login hidden / shows

  return (
    <>
      <header className={`w-full dark:bg-black `}>
        <div className="container">
          <div className="header bg-slate-200 dark:bg-black flex  items-center justify-between w-full">
            <Logo />
            <Navbar />
            <div className="order__cart flex items-center gap-3">
              <Link
                to={"/login"}
                className={`header__login--btn   ${
                  isSignOrLogin ? "hidden" : "hiden"
                }`}
              >
                <Btn text={"Login"} />
              </Link>
              <div
                onClick={show}
                className={`order__cart--link hover:scale-110 ${
                  isSignOrLogin ? "hidden" : "hidde"
                }`}
              >
                <FiShoppingBag
                  width={"60px"}
                  height={"60px"}
                  className="text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
