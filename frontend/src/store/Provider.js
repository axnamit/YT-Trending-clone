import React, { useState } from "react";
import Context from "./index";

const Provider = ({ children }) => {
  const [state, dispatchState] = useState(null);

  return (
    <Context.Provider value={{ state, dispatchState }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
