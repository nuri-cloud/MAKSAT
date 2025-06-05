// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchIphone16 } from '../../redux/iphone16/iphone16Slice.js';
// import { useNavigate } from 'react-router-dom';
// // import './CategoryPage.scss';

// function IPhone16() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { products, loading, error } = useSelector(state => state.iPhone16);

//   useEffect(() => {
//     dispatch(fetchIphone16());
//   }, [dispatch]);

//   console.log('iPhone16 State:', { products, loading, error }); // Дебагузунчик

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <div className="category-page">
//       <div className="category-container">
//         <h2 className="category-title">iPhone 16</h2>
//         <div className="product-list">
//           {loading ? (
//             <div className="product-loading">Жүктөлүү...</div>
//           ) : error ? (
//             <div className="product-error">Ката: {error}</div>
//           ) : !products || products.length === 0 ? (
//             <div className="product-empty">iPhone 16 версиялары жок</div>
//           ) : (
//             products.map(product => (
//               <div
//                 key={product.id}
//                 className="product-item"
//                 onClick={() => handleProductClick(product.id)}
//               >
//                 <img
//                   src={product.image || 'https://via.placeholder.com/150'}
//                   alt={product.title}
//                   className="product-image"
//                 />
//                 <span className="product-title">{product.title}</span>
//                 {product.price && <span className="product-price">${product.price}</span>}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IPhone16;
// src/Pages/IPhone16/IPhone16.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIphone16 } from '../../redux/iphone16/iphone16Slice.js';
import { useNavigate } from 'react-router-dom';

function IPhone16() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Ушул жерди "state.iphone16" (кичине 'i' менен) кылып өзгөртүңүз
  const { products, loading, error } = useSelector(state => state.iphone16);

  useEffect(() => {
    dispatch(fetchIphone16());
  }, [dispatch]);

  console.log('iPhone16 State:', { products, loading, error }); // Дебагузунчик

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="category-page">
      <div className="category-container">
        <h2 className="category-title">iPhone 16</h2>
        <div className="product-list">
          {loading ? (
            <div className="product-loading">Жүктөлүү...</div>
          ) : error ? (
            <div className="product-error">Ката: {error}</div>
          ) : !products || products.length === 0 ? (
            <div className="product-empty">iPhone 16 версиялары жок</div>
          ) : (
            products.map(product => (
              <div
                key={product.id}
                className="product-item"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.img || 'https://via.placeholder.com/150'}
                  alt={product.title}
                  className="product-image"
                />
                <span className="product-title">{product.title}</span>
                {product.price && <span className="product-price">${product.price}</span>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default IPhone16;