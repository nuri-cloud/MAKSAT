import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../../redux/category/categorySlice';
import { fetchIphone16 } from '../../redux/iphone16/iphone16Slice';
import './ProductDetail.scss';

function ProductDetail() {
  const { productId } = useParams(); // URL'ден productId алуу
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading: productsLoading, error: productsError } = useSelector((state) => state.products);
  const { iphone16, loading: iphone16Loading, error: iphone16Error } = useSelector((state) => state.iphone16);

  useEffect(() => {
    // Продукцияларды жана iPhone 16 маалыматтарын жүктөө
    dispatch(getProducts());
    dispatch(fetchIphone16());
  }, [dispatch]);

  // Бардык продукциялардан (жөнөкөй жана iPhone 16) productId боюнча издөө
  const product = [...products, ...iphone16].find(
    (item) => item.id.toString() === productId
  );

  // Артка кайтуу баскычы
  const handleBackClick = () => {
    navigate(-1); // Мурунку баракка кайтуу
  };

  if (productsLoading || iphone16Loading) {
    return <div className="product-loading">Жүктөлүүдө...</div>;
  }

  if (productsError || iphone16Error) {
    return <div className="product-error">Ката: {productsError || iphone16Error}</div>;
  }

  if (!product) {
    return <div className="product-not-found">Продукт табылган жок</div>;
  }

  return (
    <div className="product-detail">
      <button className="back-button" onClick={handleBackClick}>
        Артка
      </button>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />
      <p>{product.description || 'Продукт жөнүндө маалымат жок'}</p>
      <p>Баасы: {product.price || 'Баасы белгисиз'}</p>
    </div>
  );
}

export default ProductDetail;