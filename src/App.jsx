import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/Routes";
import { createContext, useState } from "react";
export const SearchContext = createContext();
export const CartContext = createContext();

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [resultSum, getResultSum] = useState(0);
  return (
    <div className="bg-orange-300 p-10">
      <div className="bg-white px-10 py-10 rounded-lg">
        <BrowserRouter>
          <SearchContext.Provider value={{ searchInput, setSearchInput }}>
            <CartContext.Provider value={{ resultSum, getResultSum }}>
              <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
              <AppRouter searchInput={searchInput} />
            </CartContext.Provider>
          </SearchContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
