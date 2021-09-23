import { Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import {ProductDetails } from "../components/ProductDetails";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
              </Route>
              <Route path="/products/:id">
                  <ProductDetails />
              </Route>
        <Route>
          <h1>404 PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
};
