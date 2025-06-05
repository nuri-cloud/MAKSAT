// src/Pages/iPhone/iPhone.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../redux/category/categorySlice.js';


function IPhone(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // iPhone категориясын туура аталышка жараша чыпкалоо
  const iphoneProducts = (products || []).filter((product) => product.category === 'phone'); // <-- Бул жерди өзгөртүңүз

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };


  console.log(products);
  
  return (
    <div className="category-page">
      <h2>iPhone{props.name}</h2>
      <div className="product-list">
        {loading ? (
          <div className="product-loading">Жүктөлүүдө...</div>
        ) : error ? (
          <div className="product-error">Ката: {error}</div>
        ) : iphoneProducts.length === 0 ? (
          <div className="product-empty">iPhone продукциялары жок</div>
        ) : (
          iphoneProducts.map((product) => (
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

export default IPhone;
