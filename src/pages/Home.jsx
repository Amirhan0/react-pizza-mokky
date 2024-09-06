import Category from "../components/Category";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Sceleton from "../components/Sceleton";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/counterSlice";
import ReactPaginate from "react-paginate";
import { useDebounce } from "use-debounce";
export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage] = useState(8);
  const scelet = Array(8).fill(0);
  const [sortId, setSort] = useState(0);

  const { searchInput } = useContext(SearchContext);
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.category.selectedById);
  const [debounceInput] = useDebounce(searchInput, 1000);
  function onClickCategoryId(id) {
    dispatch(setCategoryId(id));
  }

  function onClickSortId(id) {
    setSort(id);
  }

  function handlePageClick(event) {
    setCurrentPage(event.selected);
  }

  useEffect(() => {
    setIsLoading(true);
    const searchQuery = `*${searchInput}*`;
    axios
      .get(
        `https://c12550f372786959.mokky.dev/items?category=${
          categoryId === 0 ? "*" : categoryId
        }&name=${searchQuery}`
      )
      .then((res) => {
        console.log("API Response:", res.data);
        let pizzas = res.data;

        if (sortId === 0) {
          pizzas.sort((a, b) => b.rating - a.rating);
        } else if (sortId === 1) {
          pizzas.sort((a, b) => a.price - b.price);
        } else if (sortId === 2) {
          pizzas.sort((a, b) => a.name.localeCompare(b.name));
        }

        const totalItems = pizzas.length;
        setPageCount(Math.ceil(totalItems / itemsPerPage));

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setData(pizzas.slice(startIndex, endIndex));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  }, [categoryId, sortId, currentPage, itemsPerPage, debounceInput]);

  return (
    <>
      <div className="flex items-center justify-between mt-10">
        <Category onClickCategoryId={onClickCategoryId} />
        <Sort sortId={sortId} onClickSortId={onClickSortId} />
      </div>

      <div className="mt-10">
        <div className="mb-10">
          <h2 className="font-bold text-3xl">Все пиццы</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {isLoading
            ? scelet.map((value, index) => <Sceleton key={index} />)
            : data.map((pizza) => <PizzaList key={pizza.id} {...pizza} />)}
        </div>

        <ReactPaginate
          previousLabel={"← Назад"}
          nextLabel={"Вперед →"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center mt-5"}
          pageClassName={"mx-1"}
          pageLinkClassName={
            "px-4 py-2 border rounded cursor-pointer hover:bg-gray-200"
          }
          previousClassName={"mx-1"}
          previousLinkClassName={
            "px-4 py-2 border rounded cursor-pointer hover:bg-gray-200"
          }
          nextClassName={"mx-1"}
          nextLinkClassName={
            "px-4 py-2 border rounded cursor-pointer hover:bg-gray-200"
          }
          breakClassName={"mx-1"}
          breakLinkClassName={
            "px-4 py-2 border rounded cursor-pointer hover:bg-gray-200"
          }
          activeClassName={"bg-blue-500 text-white"}
        />
      </div>
    </>
  );
}
