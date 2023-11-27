import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Main,
  ProductDetails,
  Cart,
  NotFoundPage,
  Header,
  Footer,
  Products,
  Favorites,
} from "./components/index";

const App = () => {
  return (
    <Router>
      <Header />

      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/products"
            element={<Products showCategories={false} />}
          />
          <Route
            path="/productdetails/:productID"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/notfoundpage" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
