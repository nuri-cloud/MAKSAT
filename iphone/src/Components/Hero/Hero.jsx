
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../redux/category/categorySlice';
import { fetchIphone16 } from '../../redux/iphone16/iphone16Slice';
import './Hero.scss';

function Hero() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.products);
  const { loading: iphone16Loading, error: iphone16Error } = useSelector((state) => state.iphone16);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(fetchIphone16());
  }, [dispatch]);

  const categories = [
    { name: 'iPhone', key: 'phone', icon: 'phone', path: '/iphone' },
    { name: 'TV', key: 'tv', icon: 'tv', path: '/tv' },
    { name: 'Watch', key: 'watch', icon: 'watch', path: '/watch' },
    { name: 'MacBook', key: 'laptop', icon: 'laptop', path: '/macbook' },
    { name: 'Accessories', key: 'accessory', icon: 'accessory', path: '/accessories' },
    { name: 'AirPods', key: 'headphone', icon: 'headphone', path: '/airpods' },
    { name: 'iPhone 16', key: 'iPhone16', icon: 'phone', path: '/iphone16' },
  ];

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="category-list">
          {categories.map((category) => (
            <div
              key={category.key}
              className="category-item"
              onClick={() => navigate(category.path)}
            >
              <svg className={`category-icon ${category.icon}`} viewBox="0 0 24 24">
                {category.icon === 'phone' && (
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm1 2v16h10V4H7zm5 14a1 1 0 100 2 1 1 0 000-2z" />
                )}
                {category.icon === 'tv' && (
                  <path d="M20 4H4a2 2 0 00-2 2v10a2 2 0 002 2h6l-2 4h8l-2-4h6a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16v10H4V6z" />
                )}
                {category.icon === 'watch' && (
                  <path d="M12 4a8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-6h2v4h-2v-4zm0-4h2v2h-2V8z" />
                )}
                {category.icon === 'laptop' && (
                  <path d="M20 4H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16v10H4V6zm-2 12h20v2H2v-2z" />
                )}
                {category.icon === 'accessory' && (
                  <path d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-2-8h4v4h-4v-4z" />
                )}
                {category.icon === 'headphone' && (
                  <path d="M12 4a8 8 0 00-8 8v4a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H6v-2a6 6 0 0112 0v2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-4a8 8 0 00-8-8z" />
                )}
              </svg>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        {(loading || iphone16Loading) && <div className="product-loading">Жүктөлүүдө...</div>}
        {(error || iphone16Error) && (
          <div className="product-error">Ката: {error || iphone16Error}</div>
        )}
      </div>
    </div>
  );
}

export default Hero;