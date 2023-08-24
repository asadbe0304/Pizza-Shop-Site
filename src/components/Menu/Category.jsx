import Btn from "./../UI/Button";

const Category = () => {
  const db = [
    {
      category: "All",
    },
    {
      category: "Combo",
    },
    {
      category: "Burger",
    },
    {
      category: "Spinner",
    },
    {
      category: "Chicken",
    },
    {
      category: "Pizza",
    },
    {
      category: "Drinks",
    },
    {
      category: "Deserts",
    },
    {
      category: "Salads",
    },
  ];
  const style = "bg-transparent ";
  return (
    <>
      <div className="flex items-center snap-mandatory gap-3 overflow-x-auto overflow-y-hidden">
        {db.map((e) => {
          return <Btn text={e.category} style={style} key={e.category} />;
        })}
      </div>
    </>
  );
};

export default Category;
