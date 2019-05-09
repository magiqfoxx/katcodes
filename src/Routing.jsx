import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page404 from "./Page404";
import App from "./App";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
