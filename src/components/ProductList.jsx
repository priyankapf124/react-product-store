import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct, updateProductList } from "../redux/productReducerSlice";
import { useEffect } from "react";
import { fetchProductList } from "../service/ProductAPIService";

const ProductList = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { productList } = useSelector((state) => {
    return state.products;
  });

  let deleteProduct = (index) => {
    // removeProduct({id:index})
    dispatch(removeProduct({ id: index }));
    alert("Product remove successfully");
  };
  let getServerProductData = async () => {
    let data = fetchProductList();
    if (data !== null) {
      dispatch(updateProductList({ list: data }));
    }
  };

  useEffect(() => {
    getServerProductData();
  }, []);

  return (
    <>
      <section className="row">
        <section className="col-12">
          <p className="text-center h3 text-primary">Product List</p>
        </section>
        <section className="col-12 d-flex gap-2 flex-wrap">
          {productList.length === 0 ? (
            <p className="text-center text-info w-100">
              No Product Found , Click <Link to="/add-product"> Here </Link> To
              Add New
            </p>
          ) : (
            productList.map((product, index) => {
              return (
                <div className="card width-30" key={index}>
                  <img
                    src={product.image}
                    className="card-img-top p-2"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.product_name.substring(0, 20)}...
                    </h5>
                    <p className="card-text card-desc">
                      {product.product_desc}
                    </p>
                    <div className="mb-2">
                      <span>
                        <i
                          className="fa fa-star text-warning me-1"
                          aria-hidden="true"
                        ></i>
                        {product.product_rating}
                        <i
                          className="fa fa-users text-primary ms-3 me-1"
                          aria-hidden="true"
                        ></i>
                        {product.product_rating_count}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate("/edit-product/" + index)}
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteProduct(index)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </section>
    </>
  );
};

export default ProductList;
