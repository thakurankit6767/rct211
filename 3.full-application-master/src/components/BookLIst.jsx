import React from "react";
import BookCard from "./BookCard";
import { useEffect } from "react";
import { getBooks } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation, Link } from "react-router-dom";

import { inc_count, inc_count_fail, inc_count_req } from "../Redux/action";
const BookLIst = () => {
  const data = useSelector((state) => state.reducer.books);
  console.log("books", data);
  const [searchParams] = useSearchParams();

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length || location.search) {
      const sortBy = searchParams.get("sortBy");

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getBooksParams));

      //if deselect all filter
    } else if (location.search === "") {
      dispatch(getBooks());
    }
  }, [location.search]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        height: "97vh",
        overflow: "scroll",
      }}
    >
      {data?.map((item) => (
        <Link key={item.id} to={`/singlebookbook/${item.id}`}>
          <BookCard item={item} />
        </Link>
      ))}

      {/* <div>
        In Cart:
        <div data-cy="shoe-count">{item.cart_quantity}</div>
        <button
          data-cy="increment-shoe-count-button"
          onClick={() => handlecount(1)}
        >
          +
        </button>
        <button
          data-cy="decrement-shoe-count-button"
          onClick={() => handlecount(-1)}
        >
          -
        </button>
      </div> */}
    </div>
  );
};

export default BookLIst;
