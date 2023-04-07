import { createStore } from "redux";
import { blogReduser } from "../reducers/blogReducer";

const configureStore=()=>{
    const store = createStore(blogReduser);
    return store;
}
export default configureStore;