
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/category/categorySlice';
import { fetchIphone16 } from '../../redux/iphone16/iphone16Slice.js';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux стейтинен продукцияларды алуу
  const { products, loading, error } = useSelector(state => state.products);

  // ОҢДОО: Redux стейтинен iPhone 16 маалыматын туура алуу (кичине 'i' менен)
  // `state.iphone16` деп туура чакырылып жатат
  const { products: iphone16Products, loading: iphone16Loading, error: iphone16Error } = useSelector(state => state.iphone16);

  // Локалдык стейттер
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Компонент жүктөлгөндө продукцияларды жана iPhone 16 маалыматын алуу
  useEffect(() => {
    dispatch(getProducts());
    dispatch(fetchIphone16());
  }, [dispatch]);

  // Продукцияларды категориялар боюнча классификациялоо
  // Маанилүү: products же iphone16Products undefined болбошу үчүн || [] колдонулат
  const categories = {
    phone: (products || []).filter(product => product.category === 'phone'),
    tv: (products || []).filter(product => product.category === 'tv'),
    watch: (products || []).filter(product => product.category === 'watch'),
    laptop: (products || []).filter(product => product.category === 'laptop'),
    accessory: (products || []).filter(product => product.category === 'accessory'),
    headphone: (products || []).filter(product => product.category === 'headphone'),
    iphone16: iphone16Products || [], // ОҢДОО: iphone16Products'ту колдонуу
  };

  // Меню пункттары
  const menuItems = [
    { name: 'iPhone', key: 'phone', path: '/iphone' },
    { name: 'TV', key: 'tv', path: '/tv' },
    { name: 'Watch', key: 'watch', path: '/watch' },
    { name: 'MacBook', key: 'laptop', path: '/macbook' },
    { name: 'Accessories', key: 'accessory', path: '/accessories' },
    { name: 'AirPods', key: 'headphone', path: '/airpods' },
    { name: 'iPhone 16', key: 'iphone16', path: '/iphone16' }, // key: 'iphone16' (кичине i)
  ];

  // Популярдуу издөөлөр
  const popularSearches = [
    'iPhone 16 Pro',
    'Apple Watch Ultra',
    'MacBook Pro',
    'AirPods Pro',
    'Apple TV 4K',
  ];

  // Продукцияны чыкылдатууну иштетүү
  const handleProductClick = (productId) => {
    setIsMenuOpen(null); // Менюну жабуу
    navigate(`/product/${productId}`); // Продукт детал баракчасына өтүү
  };

  // Издөө баскычын чыкылдатууну иштетүү
  const handleSearchClick = () => {
    if (searchQuery.trim()) { // Эгер издөө суроосу бош эмес болсо
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`); // Издөө натыйжалары барагына өтүү
      setIsSearchOpen(false); // Издөө тилкесин жабуу
      setSearchQuery(''); // Издөө суроосун тазалоо
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          {/* Apple логотибинин SVG коду */}
          <svg className="apple-logo" viewBox="0 0 24 24">
            <path d="M12.152 6.896c-.948 0-2.415-1.088-3.96-1.088-1.536 0-3.036 1.152-3.912 2.904-.876 1.74-.468 4.356.936 5.796 1.188 1.212 2.592 2.556 4.344 2.532 1.74-.024 2.424-1.632 4.512-1.632 2.076 0 2.784 1.632 4.512 1.608 1.764-.024 2.88-1.344 3.984-2.556 1.404-1.536 1.932-3.012 1.968-3.096-.216-.012-2.112-.852-2.136-3.192-.024-1.968 1.608-3.672 3.384-3.912-1.032-1.488-2.616-2.316-4.224-2.316-1.632 0-2.976 1.104-3.984 1.104zm2.472-3.792c.744-.924 1.272-2.208 1.128-3.504-.984.048-2.208.672-2.928 1.548-.648.792-1.224 2.064-1.08 3.312.984.048 2.136-.432 2.88-1.356z" />
          </svg>
        </div>
        <div className="menu-list">
          {menuItems.map(item => (
            <div
              key={item.key}
              className="menu-item"
              onMouseEnter={() => setIsMenuOpen(item.key)}
              onMouseLeave={() => setIsMenuOpen(null)}
            >
              {item.name}
              {isMenuOpen === item.key && (
                <div className="dropdown">
                  {/* iPhone 16 үчүн атайын иштетүү (өзүнчө Redux стейти болгондуктан) */}
                  {item.key === 'iphone16' ? (
                    iphone16Loading ? (
                      <div className="dropdown-loading">Loading...</div>
                    ) : iphone16Error ? (
                      <div className="dropdown-error">Error: {iphone16Error}</div>
                    ) : categories[item.key].length === 0 ? (
                      <div className="dropdown-empty">No {item.name} available</div>
                    ) : (
                      <div className="dropdown-content">
                        {categories[item.key].map(product => (
                          <div
                            key={product.id}
                            className="dropdown-item"
                            onClick={() => handleProductClick(product.id)}
                          >
                            {product.title}
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    /* Башка категориялар үчүн жалпы иштетүү */
                    loading ? (
                      <div className="dropdown-loading">Loading...</div>
                    ) : error ? (
                      <div className="dropdown-error">Error: {error}</div>
                    ) : categories[item.key].length === 0 ? (
                      <div className="dropdown-empty">No {item.name} available</div>
                    ) : (
                      <div className="dropdown-content">
                        {categories[item.key].map(product => (
                          <div
                            key={product.id}
                            className="dropdown-item"
                            onClick={() => handleProductClick(product.id)}
                          >
                            {product.title}
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          {/* Издөө бөлүмү */}
          <div
            className="search-item"
            onMouseEnter={() => setIsSearchOpen(true)}
            onMouseLeave={() => setIsSearchOpen(false)}
          >
            Search
            {isSearchOpen && (
              <div className="search-dropdown">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
                  autoFocus
                />
                {searchQuery === '' && (
                  <div className="popular-searches">
                    <h3>Часто искали</h3>
                    {popularSearches.map((search, index) => (
                      <div
                        key={index}
                        className="popular-search-item"
                        onClick={() => {
                          setSearchQuery(search);
                          handleSearchClick();
                        }}
                      >
                        {search}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;