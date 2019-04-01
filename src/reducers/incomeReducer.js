import { ADD_INCOME, DELETE_INCOME, FETCH_INCOME } from "../actions/types";

export default function incomeReducer(state = [], action) {
  switch (action.type) {
    case ADD_INCOME:
      return [...state, action.payload];
    case DELETE_INCOME:
      return state.filter(income => income.id !== action.payload.id);
    case FETCH_INCOME:
      return action.incomes;
    default:
      return state;
  }
}
