import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initalState = {
  transactions: [{ id: 1, text: "Payment", amount: 500 }],
};

//Create context
export const GlobalContext = createContext(initalState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DEL_TRNSC",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRNSC",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
