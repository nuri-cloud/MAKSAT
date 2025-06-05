import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/category/categorySlice';
import { useNavigate } from 'react-router-dom';
// import './CategoryPage.scss';

function Watch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const watches = products.filter(product => product.category === 'watch');

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page">
      <div className="category-container">
        <h2 className="category-title">Watches</h2>
        <div className="product-list">
          {loading ? (
            <div className="product-loading">Loading...</div>
          ) : error ? (
            <div className="product-error">Error: {error}</div>
          ) : watches.length === 0 ? (
            <div className="product-empty">No watches available</div>
          ) : (
            watches.map(product => (
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
    </div>
  );
}

export default Watch;
