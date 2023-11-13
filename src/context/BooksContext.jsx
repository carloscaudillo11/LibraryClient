import { createContext, useContext, useState } from "react";
import {
    getBooksRequest
} from "../api/books";

const BookContext = createContext();


// eslint-disable-next-line react-refresh/only-export-components
export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBooks must be used within a Provider");
  return context;
};

// eslint-disable-next-line react/prop-types
const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await getBooksRequest();
    const { data } = res;
    setBooks(data.$values);
  };


  return (
    <BookContext.Provider
      value={{
        books,
        getBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;