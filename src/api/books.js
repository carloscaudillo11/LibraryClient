import axios from "./axios";

export const getBooksRequest =  () =>  axios.get("/api/books");
