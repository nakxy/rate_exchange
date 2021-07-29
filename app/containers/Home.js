import React,{useContext} from "react";
import { useActions } from "../actions";
import Home from '../components/Home';
import { StoreContext } from "../store/configureStore";

//HOME CONTAINER, USES CONTEXT FROM STORE TO GET STATE AND DISPATCH INFO
const HomeContainer = () => {
  const [state, dispatch] = useContext(StoreContext);
  const actions = useActions(dispatch);

  const props = {
    state,
    dispatch,
    ...actions
  }
  return <Home {...props}/>;
};

export default HomeContainer;
