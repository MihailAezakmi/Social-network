import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"
import {rerenderTree} from "./redux/rerender";

rerenderTree(state)

reportWebVitals();
