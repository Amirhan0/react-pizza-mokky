/* eslint-disable react/prop-types */
import Category from "../components/Category";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Sceleton from "../components/Sceleton";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/counterSlice";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scelet = Array(8).fill(0);

  const { searchInput } = useContext(SearchContext);
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.category.selectedById);

  const sortId = useSelector((state) => state.category.sortSelectedById);

  function onClickCategoryId(id) {
    dispatch(setCategoryId(id));
  }

  function onClickSortId(id) {
    sortId(id);
  }

  useEffect(() => {
    axios
      .get(
        `https://c12550f372786959.mokky.dev/items?category=${
          categoryId === 0 ? "*" : categoryId
        }`
      )
      .then((res) => {
        let pizzas = res.data;

        if (sortId === 0) {
          pizzas.sort((a, b) => b.rating - a.rating);
        } else if (sortId === 1) {
          pizzas.sort((a, b) => a.price - b.price);
        } else if (sortId === 2) {
          pizzas.sort((a, b) => a.name.localeCompare(b.name));
        }

        setData(pizzas);
        setIsLoading(false);
      });
  }, [categoryId, sortId]);

  return (
    <>
      <div className="flex items-center justify-between mt-10">
        <Category onClickCategoryId={onClickCategoryId} />
        <Sort onClickSortId={onClickSortId} />
      </div>

      <div className="mt-10">
        <div className="mb-10">
          <h2 className="font-bold text-3xl">Все пиццы</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {isLoading
            ? scelet.map((value, index) => <Sceleton key={index} />)
            : data
                .filter((pizza) =>
                  pizza.name.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((pizza) => <PizzaList key={pizza.id} {...pizza} />)}
        </div>
      </div>
    </>
  );
}
