import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store-redux"
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {Provider} from "./redux/StoreContext";

export let rerenderTree = () => {
    let root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}
rerenderTree();
store.subscribe(() => {
    rerenderTree()
});


reportWebVitals();
