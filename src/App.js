import { React } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Page from "./Page";
import Login from "./login";
import form from "./Form";
import "./forrm.css";
import "./web.css";
import dataFetch from "./dataFetch";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dataFetch" component={dataFetch} />
        <Route exact path="/" component={Page} />
        <Route path="/login" component={Login} />
        <Route exact path="/form" component={form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
