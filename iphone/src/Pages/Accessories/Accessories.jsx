import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/category/categorySlice';
import { useNavigate } from 'react-router-dom';
import IPhone from '../iPhone/iPhone';
// import './CategoryPage.scss';

function Accessories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const accessories = products.filter(product => product.category === 'accessory');

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page">
      <div className="category-container">
        <h2 className="category-title">Accessories</h2>
        <div className="product-list">
          {loading ? (
            <div className="product-loading">Loading...</div>
          ) : error ? (
            <div className="product-error">Error: {error}</div>
          ) : accessories.length === 0 ? (
            <div className="product-empty">No accessories available</div>
          ) : (
            accessories.map(product => (
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
      <Nurzada name="nurzada"/>
      <Welcome name="Нурзада" />
    </div>
  );
}

export default Accessories;
