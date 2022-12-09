import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store-redux"
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

export let rerenderTree = () => {
    let root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} state={store.getState()}/>
        </React.StrictMode>
    );
}
rerenderTree(store);
store.subscribe(() =>{
    rerenderTree(store.getState())
});



reportWebVitals();
