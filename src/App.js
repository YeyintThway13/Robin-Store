import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import DetailPage from "./pages/detailpage/DetailPage";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/product/:id" exact component={DetailPage} />
        <Route path="/cart" exact component={Cart} />
        <Route>404 page</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
