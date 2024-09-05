import { useState, createContext } from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";

export const AppContext = createContext();
export default function Example() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  return (
    <>
      <AppContext.Provider
        value={{ state1, setState1, state2, setState2, state3, setState3 }}
      >
        <div className="flex flex-col gap-10">
          <Component1 />
          <Component2 />
          <Component3 />
        </div>
      </AppContext.Provider>
    </>
  );
}
