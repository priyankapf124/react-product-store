import { Link, useNavigate, useParams } from "react-router-dom";
import {
  insertNewProduct,
  makeUpdateProduct,
  setEditProduct,
  updateEditInputChange,
  updateeditInputChange,
} from "../redux/productReducerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const EditProduct = (props) => {
  let { id } = useParams(); //{  id:0}
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // new Product states from redux
  let { editProduct } = useSelector((state) => {
    return state.products;
  });

  const editInputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    dispatch(updateEditInputChange({ value, name }));
  };

  useEffect(() => {
    dispatch(setEditProduct({ id }));
  }, []); // only once i.e onload

  const updateProduct = (event) => {
    event.preventDefault();
    dispatch(makeUpdateProduct({ id }));
    alert("Product Added Successfully");
    navigate("/product-list");
  };
  return (
    <>
      <section className="row">
        <section className="col-lg-4 col-10 m-auto card p-3 mt-2">
          <p className="h3 text-center text-primary">Edit Product</p>
          <form onSubmit={updateProduct}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="product_name"
                value={editProduct.product_name}
                onChange={editInputChange}
              />
              <label>Product Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="product_price"
                onChange={editInputChange}
                value={editProduct.product_price}
              />
              <label>Product Price</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                rows={10}
                placeholder="Desc"
                name="product_desc"
                onChange={editInputChange}
                value={editProduct.product_desc}
              ></textarea>
              <label>Product Desc</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                name="product_category"
                onChange={editInputChange}
                value={editProduct.product_category}
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
                value={editProduct.product_rating}
                onChange={editInputChange}
              />
              <label>Product Rating</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                placeholder="rate count"
                className="form-control"
                name="product_rating_count"
                onChange={editInputChange}
                value={editProduct.product_rating_count}
              />
              <label>Product Rating Count</label>
            </div>
            <div className="text-center">
              <button className="btn btn-success mx-2" type="submit">
                Update
              </button>
              <Link className="btn btn-danger" to="/product-list">
                Cancel
              </Link>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default EditProduct;
