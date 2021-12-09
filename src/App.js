import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Cart from "./pages/cart/Cart.js";
import DetailPage from "./pages/detailpage/DetailPage.js";
import Homepage from "./pages/homepage/HomePage.js";
import ProductsPage from "./pages/productsPage/ProductsPage.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/product/:id" exact component={DetailPage} />
        <Route path="/cart" exact component={Cart} />
        <Route>404 page</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
