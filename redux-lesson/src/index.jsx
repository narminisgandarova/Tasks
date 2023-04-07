import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from './Counter';
import { addblog, deleteblog, editblog } from './actions/blogAction';
import configureStore from './store/configureStore';
import App from './routes/App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/bootstrap.css'
import { Provider } from 'react-redux';
const store = configureStore();

// const deleteblog=()=>({
//     type:'DELETE_BLOG',
   
// })


store.subscribe(()=>{
    console.log(store.getState());
})

const blog1 = store.dispatch(addblog({title:"hello", desc:"mello" , photo:"cello"}))
const blog2 = store.dispatch(addblog({title:"hello1", desc:"mello1" , photo:"cello1"}))
store.dispatch(editblog(blog1.blog.id,{title:"updated", desc:"updated" , photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg"}))
store.dispatch(deleteblog({id:blog2.blog.id}))
store.dispatch(addblog({title:"hello1", desc:"mello1" , photo:"https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}))
store.dispatch(addblog({title:"hello1", desc:"mello1" , photo:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"}))
store.dispatch(addblog({title:"hello1", desc:"mello1" , photo:"https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"}))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Counter/> */}
  <Provider store={store}>
  <App/>
  </Provider>
   
  </React.StrictMode>
);
