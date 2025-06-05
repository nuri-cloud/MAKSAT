import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/category/categorySlice.js";

function AirPods() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // AirPods категориясын гана чыпкалоо
  const airPodsProducts = products.filter(
    (product) => product.category === "headphone"
  );

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page">
      <h2>AirPods</h2>
      <div className="product-list">
        {loading ? (
          <div className="product-loading">Жүктөлүүдө...</div>
        ) : error ? (
          <div className="product-error">Ката: {error}</div>
        ) : airPodsProducts.length === 0 ? (
          <div className="product-empty">AirPods продукциялары жок</div>
        ) : (
          airPodsProducts.map((product) => (
            <div
              key={product.id}
              className="product-item"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.img}
                alt={product.title}
                className="product-image"
              />
              <span className="product-title">{product.title}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AirPods;
