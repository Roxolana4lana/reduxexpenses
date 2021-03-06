import React from "react";
import { connect } from "react-redux";

function Info({ incomes, posts }) {
  let initialValue = 0;
  const sumIncomes = incomes.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.amount;
  }, initialValue);
  let initial = 0;
  const sumExpenses = posts.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.amount;
  }, initial);
  const countSavings = sumIncomes - sumExpenses;

  return (
    <div>
      <h1>Total summery of expenses and incomes:</h1>
      <p>The total amount of all incomes: {sumIncomes}</p>
      <p>The total amount of all expenses: {sumExpenses}</p>
      <p>You may save : {countSavings}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    incomes: state.incomes,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Info);
