import axios from "axios";

export let fetchProductList = async () => {
  try {
    let url = "http://localhost:3004/products";
    let { data } = await axios.get(url);
    data = data.map((product) => ({
      ...product,
      product_rating: product.rating.product_rating,
      product_rating_count: product.rating.product_rating_count,
    }));
    return data;
  } catch (error) {
    alert("Server Error");
    return null;
  }
};
