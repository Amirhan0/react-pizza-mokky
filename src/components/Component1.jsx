import { useDispatch, useSelector } from "react-redux";
import { setComponent1 } from "../redux/slices/counterSlice";

export default function Component1() {
  const dispatch = useDispatch();
  const component1 = useSelector((state) => {
    console.log(`рендер А`);
    return state.example.component1;
  });
  return (
    <>
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-500 px-2 py-1 rounded"
          onClick={() => dispatch(setComponent1())}
        >
          +1
        </button>
        <span className="bg-gray-300 px-2 py-1 rounded">{component1}</span>
      </div>
    </>
  );
}
