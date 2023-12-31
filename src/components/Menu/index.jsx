import Category from "./Category";
import MenuCard from "./MenuCard";
import "./index.scss";

const index = () => {
  return (
    <>
      <div className="menu">
        <div className="menu_category">
          <h3 className="dark:text-white text-black text-center mb-6 menu-title flex items-center justify-center ">
            Menu
          </h3>
          <Category />
        </div>
        <div className="menu_product flex items-center justify-between flex-wrap gap-2 pt-5">
          <MenuCard />
        </div>
      </div>
    </>
  );
};

export default index;
