import { useDispatch, useSelector } from "react-redux";
import { setComponent2 } from "../redux/slices/counterSlice";
export default function Component2() {
  const dispatch = useDispatch();
  const component2 = useSelector((state) => {
    console.log(`рендер Б`);

    return state.example.component2;
  });
  return (
    <>
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-500 px-2 py-1 rounded"
          onClick={() => dispatch(setComponent2())}
        >
          +1
        </button>
        <span className="bg-gray-300 px-2 py-1 rounded">{component2}</span>
      </div>
    </>
  );
}
