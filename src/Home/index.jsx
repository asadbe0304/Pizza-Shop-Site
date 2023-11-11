import { Main, About } from "./../components";
import Loader from "./../components/UI/Loader";
const index = () => {
  return (
    <>
    <div className="dark:bg-black bg-white  ">
      <Main />
      <Loader />
      <About />
    </div>
    </>
  );
};

export default index;
