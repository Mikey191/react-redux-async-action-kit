import "./Styles/App.css";
import "./Styles/Fonts.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReduser";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };
  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };
  return (
    <div className="App">
      <div>{cash} $</div>
      <div className="btns__cash">
        <button onClick={() => addCash(Number(prompt()))} className="btn">
          Положить деньги
        </button>
        <button onClick={() => getCash(Number(prompt()))} className="btn">
          Снять деньги
        </button>
      </div>
      <div className="btns__customers">
        <button
          onClick={() => addCustomer(prompt())}
          className="btn"
        >
          Добавить пользователя
        </button>
        <button
          onClick={() => dispatch(fetchCustomers())}
          className="btn"
        >
          Добавить пользователей
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer, index) => {
            return (
              <div
                key={index + 1}
                onClick={() => removeCustomer(customer)}
                style={{
                  fontSize: "2rem",
                  border: "1px solid black",
                  padding: "10px",
                  marginTop: 5,
                }}
              >
                {customer.name}
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Нет пользователей</h1>
      )}
    </div>
  );
}

export default App;
