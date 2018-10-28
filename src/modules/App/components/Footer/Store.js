import {createStore} from "redux";
import rootReducer from "./Reducers";

const Store = createStore(rootReducer, );

Store.subscribe(()=>{
  console.log("..................Store changed!..................");
});

export default Store;
