import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state"
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

export let rerenderTree = () => {
    let root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} state={store.getState()}/>
        </React.StrictMode>
    );
}
rerenderTree(store);
store.subscribe(rerenderTree);


reportWebVitals();
