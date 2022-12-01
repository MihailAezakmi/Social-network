import ReactDOM from "react-dom/client";
import React from "react";
import App from "../App";
import {addPost} from "./state";

export let rerenderTree = (state) => {
    let root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App addPost={addPost} state={state}/>
        </React.StrictMode>
    );
}
