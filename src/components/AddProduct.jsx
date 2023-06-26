import { useNavigate } from "react-router-dom";
import {
  insertNewProduct,
  updateInputChange,
} from "../redux/productReducerSlice";
import { useDispatch, useSelector } from "react-redux";
const AddProduct = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // new Product states from redux
  let { newProduct } = useSelector((state) => {
    return state.products;
  });

  const inputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    dispatch(updateInputChange({ value, name }));
  };

  const saveNewProduct = (event) => {
    event.preventDefault();
    dispatch(insertNewProduct());
    alert("Product Added Successfully");
    navigate("/product-list");
  };
  return (
    <>
      <section className="row">
        <section className="col-lg-4 col-10 m-auto card p-3 mt-2">
          <p className="h3 text-center text-danger">Add Product</p>
          <form onSubmit={saveNewProduct}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="product_name"
                value={newProduct.product_name}
                onChange={inputChange}
              />
              <label>Product Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="product_price"
                onChange={inputChange}
                value={newProduct.product_price}
              />
              <label>Product Price</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                rows={10}
                placeholder="Desc"
                name="product_desc"
                onChange={inputChange}
                value={newProduct.product_desc}
              ></textarea>
              <label>Product Desc</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                name="product_category"
                onChange={inputChange}
                value={newProduct.product_category}
              >
                <option value="">Select</option>
                <option value="Men's Clothing">Men's Clothing</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Electronics">Electronics</option>
              </select>
              <label>Product Category</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="rate"
                name="product_rating"
                value={newProduct.product_rating}
                onChange={inputChange}
              />
              <label>Product Rating</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                placeholder="rate count"
                className="form-control"
                name="product_rating_count"
                onChange={inputChange}
                value={newProduct.product_rating_count}
              />
              <label>Product Rating Count</label>
            </div>
            <div className="text-center">
              <button className="btn btn-success mx-2" type="submit">
                Save
              </button>
              <button className="btn btn-danger" type="reset">
                Reset
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default AddProduct;
