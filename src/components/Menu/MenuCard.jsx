import Card from "../UI/Card";
const MenuCard = () => {
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

  return (
    <>
      {db.map((e) => {
        return <Card key={e.category} />;
      })}
    </>
  );
};

export default MenuCard;
