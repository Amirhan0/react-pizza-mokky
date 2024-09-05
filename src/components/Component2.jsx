import { AppContext } from "../pages/Example";
import { useContext } from "react";
export default function Component2() {
  const { state2, setState2 } = useContext(AppContext);

  return (
    <>
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-500 px-2 py-1 rounded"
          onClick={() => setState2(state2 + 1)}
        >
          +1
        </button>
        <span className="bg-gray-300 px-2 py-1 rounded">{state2}</span>
      </div>
    </>
  );
}
