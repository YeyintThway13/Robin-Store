import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import DetailPage from "./pages/detailpage/DetailPage";
import Homepage from "./pages/homepage/HomePage";
import ProductsPage from "./pages/productsPage/ProductsPage";

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
