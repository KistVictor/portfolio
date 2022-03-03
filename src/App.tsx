import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error404 from "./pages/404";
import Layout from "./components/Layout/Index"

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Switch>
          <Route path="/error404" exact component={Error404}/>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
