import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import PageNotFound from "./components/PageNotFound";
import EditProduct from "./components/EditProduct";

const App = () => {
  return (
    <>
      <Header />
      <section className="container-fluid">
        <section className="row">
          <section className="col-12">
            <Routes>
              <Route path="/" element={<Navigate to="/product-list" />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
