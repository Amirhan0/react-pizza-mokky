/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../App";
import { CartContext } from "../App";
import cart from "/cart.svg";

export default function Header() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  function goToCart(link) {
    navigate(link);
  }

  function onClickX() {
    setSearchInput("");
    inputRef.current.focus();
  }

  const { searchInput, setSearchInput } = useContext(SearchContext);
  const { resultSum, getResultSum } = useContext(CartContext);
  useEffect(() => {
    const storedresult = localStorage.getItem("resultSum");
    if (storedresult) {
      getResultSum(parseFloat(storedresult));
    }
  }, [getResultSum]);

  useEffect(() => {
    localStorage.setItem("resultSum", resultSum);
  }, [resultSum]);
  return (
    <div className="header flex items-center justify-between">
      <div
        onClick={() => goToCart("/")}
        className="flex items-center gap-4 cursor-pointer"
      >
        <img src="/logo.svg" alt="" />
        <div>
          <h1 className="text-2xl font-bold">React Pizza</h1>
          <p className="text-gray-500">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className="flex items-center border rounded-xl py-1 px-3">
        <input
          className="border-none outline-none"
          type="text"
          ref={inputRef}
          placeholder="Поиск"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchInput && (
          <span onClick={onClickX} className="cursor-pointer">
            X
          </span>
        )}
      </div>
      <div
        onClick={() => goToCart("/cart")}
        className="bg-orange-500 flex gap-3 items-center justify-center py-2 px-6 rounded-full text-white cursor-pointer"
      >
        <span className="font-bold">{resultSum} тг</span>
        <hr className="w-0.5 h-6 bg-orange-300 border-none rounded-xl" />
        <div>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
}
