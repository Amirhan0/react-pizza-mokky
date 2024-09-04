/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortId } from "../redux/slices/counterSlice";
export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.category.sort);
  const sortSelectedById = useSelector((state) => state.category.sortSelectedById);
  const [catOpen, clickCat] = useState(false);
  return (
    <div
      onClick={() => (catOpen ? clickCat(false) : clickCat(true))}
      className="relative cursor-pointer"
    >
      <label className="font-bold cursor-pointer" htmlFor="">
        Сортировка по:
        <span className="text-orange-400 font-normal cursor-pointer">
          {sort[sortSelectedById]}
        </span>
      </label>
      <div
        className={`absolute right-0 bg-gray-100 p-4 rounded-lg transition-opacity duration-300 grid grid-rows-3 gap-2 ${
          catOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {sort.map((item, index) => (
          <p
            key={index}
            onClick={() => dispatch(setSortId(index))}
            className={
              index === sortSelectedById
                ? "cursor-pointer hover:text-orange-400"
                : "cursor-pointer hover:text-orange-400"
            }
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
