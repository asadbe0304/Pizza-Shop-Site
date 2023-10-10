import { useEffect } from "react";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../slice/productSlice";
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

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);
  return (
    <>
      {products
        ? products.map((e) => {
            return <Card key={e.id} price={e.price}/>;
          })
        : "loading ..."}
    </>
  );
};

export default MenuCard;
