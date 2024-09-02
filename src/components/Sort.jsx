/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Sort({ sortId, onClickSortId }) {
    const [catOpen, clickCat] = useState(false);
    const sort = ["популярности", "по цене", "по алфавиту"];
    return (
        <div
            onClick={() => (catOpen ? clickCat(false) : clickCat(true))}
            className="relative cursor-pointer"
        >
            <label className="font-bold cursor-pointer" htmlFor="">
                Сортировка по:
                <span className="text-orange-400 font-normal cursor-pointer">
                    {sort[sortId]}
                </span>
            </label>
            <div
                className={`absolute right-0 bg-gray-100 p-4 rounded-lg transition-opacity duration-300 grid grid-rows-3 gap-2 ${catOpen ? "opacity-100" : "opacity-0"
                    }`}
            >
                {sort.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => onClickSortId(index)}
                        className={
                            index === sortId
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
