import { combineReducers } from "redux";
import posts from "./postReducer";
import incomes from "./incomeReducer";

export default combineReducers({
  posts: posts,
  incomes: incomes
});
