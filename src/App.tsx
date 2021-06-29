import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout/Index"

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
