import { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../App";
export default function Cart() {
  const navigate = useNavigate();
  const [getPizza, setGetPizza] = useState([]);
  const { resultSum, getResultSum } = useContext(CartContext);
  const typePizzas = ["Традиционное", "Тонкое"];
  const sizePizzas = [26, 30, 40];
  useEffect(() => {
    const pizzasCart = localStorage.getItem("cart");
    const pizza = pizzasCart ? JSON.parse(pizzasCart) : [];
    setGetPizza(pizza);
    const totalAmount = pizza.reduce((sum, item) => sum + item.price, 0);
    getResultSum(totalAmount);
  }, []);

  function deleteAllItems() {
    localStorage.clear();
    setGetPizza([]);
    getResultSum(0);
    alert("Корзина очищена");
  }

  function deleteItemById(index) {
    const pizzasCart = localStorage.getItem("cart");
    const pizza = pizzasCart ? JSON.parse(pizzasCart) : [];

    pizza.splice(index, 1);
    const totalAmount = pizza.reduce((sum, item) => sum + item.price, 0);
    localStorage.setItem("cart", JSON.stringify(pizza));

    setGetPizza(pizza);
    getResultSum(totalAmount);
  }

  function router(value) {
    navigate(value);
  }
  return (
    <>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="grid grid-rows gap-3 w-8/12">
          <div className="flex items-center justify-between border-b p-3">
            <div className="flex items-center gap-2">
              <img src="/logo_drawer.png" alt="" />
              <h1 className="text-3xl font-bold">Корзина</h1>
            </div>
            <div className="flex items-center gap-2">
              <img src="/logo2_drawer.svg" alt="" />
              <p
                className="text-gray-300 cursor-pointer"
                onClick={deleteAllItems}
              >
                Очистить корзину
              </p>
            </div>
          </div>

          {getPizza.map((item, index) => (
            <>
              <div className="flex items-center justify-between border-b p-3">
                <div className="flex items-center gap-3">
                  <img src={item.imageUrl} className="h-40" alt="" />
                  <div className="grid grid-cols">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-400">
                      {typePizzas[index]}, {sizePizzas[index]}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/Minus.png" alt="" />
                  <span className="font-bold text-xl">1</span>
                  <img src="/Plus.png" alt="" />
                </div>
                <p className="font-bold text-xl">{item.price} тг</p>
                <img
                  src="/exit.png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => deleteItemById(index)}
                />
              </div>
            </>
          ))}
          <div className="flex items-center justify-between">
            <p>
              Всего пицц:{" "}
              <span className="font-bold">{getPizza.length} шт.</span>
            </p>
            <p>
              Сумма заказа:{" "}
              <span className="font-bold text-orange-500">
                {resultSum} тенге.
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className=" px-5 py-3 rounded-full border flex items-center gap-2 cursor-pointer">
              <img src="/arrow_left.svg" alt="" />
              <p
                className="font-bold text-gray-300"
                onClick={() => router("/")}
              >
                Вернуться назад
              </p>
            </div>
            <div className="bg-orange-500 px-5 py-3 rounded-full cursor-pointer">
              <p className="text-white font-bold">Оплатить сейчас</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
