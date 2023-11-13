import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/Books";
import BooksContext from "./context/BooksContext";

const App = () => {
  return (
    <BooksContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksPage />} />
        </Routes>
      </BrowserRouter>
    </BooksContext>
  );
}

export default App;
