import React, { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosStore = (props) => {
  const state = {};

  return <TodosContext.Provider value={state}>{props.children}</TodosContext.Provider>;
};

export default TodosStore;
