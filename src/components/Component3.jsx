import { AppContext } from "../pages/Example";
import { useContext } from "react";
export default function Component3() {
  const { state3, setState3 } = useContext(AppContext);

  return (
    <>
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-500 px-2 py-1 rounded "
          onClick={() => setState3(state3 + 1)}
        >
          +1
        </button>
        <span className="bg-gray-300 px-2 py-1 rounded">{state3}</span>
      </div>
    </>
  );
}
