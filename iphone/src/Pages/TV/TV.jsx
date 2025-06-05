import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../redux/category/categorySlice.js';

function TV() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // TV категориясын гана чыпкалоо (мисалы, 'television' деп алыңыз)
  const tvProducts = products.filter((product) => product.category === 'tv');

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page">
      <h2>TV</h2>
      <div className="product-list">
        {loading ? (
          <div className="product-loading">Жүктөлүүдө...</div>
        ) : error ? (
          <div className="product-error">Ката: {error}</div>
        ) : tvProducts.length === 0 ? (
          <div className="product-empty">TV продукциялары жок</div>
        ) : (
          tvProducts.map((product) => (
            <div
              key={product.id}
              className="product-item"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.img} // Сүрөт жолу эми 'img' талаасынан алынат
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

export default TV;
