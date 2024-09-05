import { useContext } from "react";
import { AppContext } from "../pages/Example";
export default function Component1() {
  const { state1, setState1 } = useContext(AppContext);
  return (
    <>
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-500 px-2 py-1 rounded "
          onClick={() => setState1(state1 + 1)}
        >
          +1
        </button>
        <span className="bg-gray-300 px-2 py-1 rounded">{state1}</span>
      </div>
    </>
  );
}
