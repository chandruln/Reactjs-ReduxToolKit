import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import ShoppingApp from './RTKShoppingCart/ShoppingApp';

import {Provider} from "react-redux";

// import store from "./LoginRedux/Redux/store";
// import store from './CourseApp/Redux/store';
// import { store } from './Counter/Store';
// import { store } from './Posts/store';
// import { fetchUsers } from './Posts/PostsApiMethod/userApiSlice';

// store.dispatch(fetchUsers());

import { store } from './RTKShoppingCart/store';
import { productsFetch } from './RTKShoppingCart/productSlice';

store.dispatch(productsFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <ShoppingApp/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
