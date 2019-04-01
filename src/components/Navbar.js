import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Portal from "./Portal";
import Info from "./Info";

class Navbar extends Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <div className="navigation">
        <ul className="list_right">
          <li>
            <h2 onClick={this.handleShowMessageClick}>Details</h2>{" "}
          </li>
          <li>
            <Link to="/">Expenses</Link>
          </li>
          <li>
            <Link to="/incomes">Incomes</Link>
          </li>
          {this.state.showModal ? (
            <Portal onClose={this.handleCloseModal}>
              <Info />
            </Portal>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default withRouter(Navbar);
