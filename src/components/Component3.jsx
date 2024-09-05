import { useDispatch, useSelector } from "react-redux";
import { setComponent3 } from "../redux/slices/counterSlice";
export default function Component3() {
  const dispatch = useDispatch();
  const component3 = useSelector((state) => {
    console.log(`рендер C`);

    return state.example.component3;
  });
  return (
    <>
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-500 px-2 py-1 rounded "
          onClick={() => dispatch(setComponent3())}
        >
          +1
        </button>
        <span className="bg-gray-300 px-2 py-1 rounded">{component3}</span>
      </div>
    </>
  );
}
