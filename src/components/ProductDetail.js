import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
import {
  fetchSelectedProduct,
  removeSelectedProduct,
  selectedProductSuccess,
} from "../redux/actions/productActions";

//we can use props or useParam as well
const ProductDetail = () => {
  const productObj = useSelector((state) => state.selectedProduct);
  //const { image, title, price, category, description } = productObj;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    dispatch(fetchSelectedProduct());
    await axios
      .get("https://fakestoreapi.com/products/" + productId)
      .then((res) => {
        dispatch(selectedProductSuccess(res.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {productObj.loading ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  alt=""
                  src={productObj.product.image}
                />
              </div>
              <div className="column rp">
                <h1>{productObj.product.title}</h1>
                <h2>
                  <a className="ui teal tag label" href>
                    ${productObj.product.price}
                  </a>
                </h2>
                <h3 className="ui brown block header">
                  {productObj.product.category}
                </h3>
                <p>{productObj.product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
