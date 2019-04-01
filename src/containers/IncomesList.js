import React from "react";
import { connect } from "react-redux";
import Income from "../components/Income";
import { deleteIncome } from "../actions";
import CreateIncome from "./CreateIncome";

function IncomeList({ incomes, onDelete }) {
  if (!incomes.length) {
    return <div>No posts</div>;
  }

  return (
    <div className="App">
      <div className="split expenses_lising">
        {incomes.map(income => {
          return <Income income={income} onDelete={onDelete} key={income.id} />;
        })}
      </div>
      <div className="split App_Form">
        <CreateIncome />
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    incomes: state.incomes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteIncome(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomeList);
