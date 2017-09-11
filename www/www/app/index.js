
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store';


import App from './pages/app'

let root = document.getElementById('root');
render(<App />,root);



    // <Provider store={configureStore()}>
    //     <App />
    // </Provider>