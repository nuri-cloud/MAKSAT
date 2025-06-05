import React from 'react'; // React импорт
import { RouterProvider } from 'react-router-dom'; // RouterProvider импорт
import { Provider } from 'react-redux'; // Redux Provider импорт
import { store } from './redux/store'; // Redux store импорт
import { myRouter } from './router'; // Роутер импорт

function App() {
  return (
    <Provider store={store}> {/* Redux store'ду компоненттерге туташтыруу */}
      <RouterProvider router={myRouter} /> {/* Роутерди рендер кылуу */}
    </Provider>
  );
}

export default App; // Экспорт
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );
//  export default App; // Экспорт