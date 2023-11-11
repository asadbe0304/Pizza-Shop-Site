import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <h1 className="text-4xl  logo">Pizza</h1>
      </Link>
    </>
  );
};

export default Logo;
