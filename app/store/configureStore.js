import { reducer, initialState } from "../reducers";
import React, { createContext, useReducer, useEffect } from "react";

const StoreContext = createContext({});

// PRIMARY STORE PROVIDER FOR THE APP, SENT AS A CONTEXT TO ALL PRIMARY CONTAINERS
const StoreProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  // UNCOMMENT CONSOLE TO SEE THE STATE
  useEffect(() => {
    //console.log({ newState: state })
  }, [state]);
  
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider};