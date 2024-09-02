/* eslint-disable react/prop-types */
import { useState } from "react";
import plusOrange from "/plusOrange.svg";

export default function PizzaList({ imageUrl, name, price, types, sizes }) {
  const [sizePizza, setSizePizza] = useState(0);
  const [typePizza, setTypePizza] = useState(0);
  const typePizzas = ["Традиционное", "Тонкое"];

  function addToCart() {
    const type = typePizza || "Не указан";
    const size = sizePizza || "Не указан";
    const item = { imageUrl, name, price, type, size };
    const key = "cart";
    const storedItem = localStorage.getItem(key);
    const items = storedItem ? JSON.parse(storedItem) : [];
    items.push(item);
    localStorage.setItem(key, JSON.stringify(items));
    alert("Пицца добавлена в корзину");
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-3">
        <img src={imageUrl} alt="" />
        <h3 className="font-bold text-xl">{name}</h3>
        <div className="p-4 bg-gray-100 rounded-xl">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {types.map((type, index) => (
              <button
                key={index}
                className={
                  typePizza === index
                    ? `py-2 px-4 rounded-lg font-medium bg-gray-200`
                    : `py-2 px-4 rounded-lg font-medium bg-white`
                }
                onClick={() => setTypePizza(index)}
              >
                {typePizzas[type]}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={
                  sizePizza === index
                    ? `py-2 px-3 rounded-lg font-medium bg-gray-200`
                    : `py-2 px-3 rounded-lg font-medium bg-white`
                }
                onClick={() => setSizePizza(index)}
              >
                {size} см.
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-evenly items-center w-full">
          <span className="font-bold text-xl">от {price} тг</span>
          <div
            className="cursor-pointer border border-orange-500 rounded-full flex items-center py-2 px-4 gap-2 text-orange-500 font-bold"
            onClick={addToCart}
          >
            <img src={plusOrange} alt="" />
            <span>Добавить </span>
          </div>
        </div>
      </div>
    </>
  );
}
