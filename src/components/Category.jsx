import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/counterSlice";
/* eslint-disable react/prop-types */

export default function Category() {
  const dispatch = useDispatch();
  const categoryes = useSelector((state) => {
    console.log(state.category.categoryes);
    return state.category.categoryes;
  });
  const selectedById = useSelector((state) => {
    console.log(state.category.selectedById);
    return state.category.selectedById;
  });

  return (
    <ul className="flex items-center justify-between basis-1/2 gap-3">
      {categoryes.map((value, index) => (
        <li
          onClick={() => dispatch(setCategoryId(index))}
          key={index}
          className={`${
            index === selectedById
              ? "bg-black text-white"
              : "bg-gray-100 text-black hover:bg-black hover:text-white"
          } px-7 py-3 rounded-full font-bold text-center cursor-pointer`}
        >
          {value}
        </li>
      ))}
    </ul>
  );
}
