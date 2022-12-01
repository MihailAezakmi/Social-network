import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state"

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

export let rerenderTree = (state) => {
    let root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App addPost={addPost} updateNewPostText={updateNewPostText} state={state}/>
        </React.StrictMode>
    );
}
rerenderTree(state);
subscribe(rerenderTree);


reportWebVitals();
