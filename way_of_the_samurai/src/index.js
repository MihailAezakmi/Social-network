import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let postData = [
    {id: "1", post: "Hi. its my first projects", like: "20"},
    {id: "2", post: "Hi, Good game", like: "15"},
    {id: "3", post: "хи-хи", like: "1"},
    {id: "4", post: "просто да", like: "100"}
]
let DialogsUserData = [
    {id: "1", name: 'Andrey'},
    {id: "2", name: 'Roman'},
    {id: "3", name: 'Misha'},
    {id: "4", name: 'Ivan'},
    {id: "5", name: 'Sveta'},

]
let MessageUserData = [
    {id: "1", message: 'Hello'},
    {id: "2", message: 'GG WP'},
    {id: "3", message: 'Work please'},
    {id: "4", message: 'Like'},
    {id: "5", message: 'Yo'},

]

root.render(

  <React.StrictMode>
    <App posts={postData} dialogsUser={DialogsUserData} messageUser={MessageUserData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
