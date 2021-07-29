import React from "react";
import { withRouter } from "react-router-dom";
import Header from '../components/Header';
import Home from './Home';

// MAIN APP CONTAINER, RECIEVES EXTPROPS FROM STORE PROVIDER AND ROUTER
const AppContainer = (extProps) => {
  const {location:{pathname}} = extProps;
  
  // PICK COMPONENT BASED ON ROUTES
  return (
    <div>
      <Header />
      {pathname !== '/docs' ? <Home /> : <div/>}
    </div>

  );
};

export default withRouter(AppContainer);
