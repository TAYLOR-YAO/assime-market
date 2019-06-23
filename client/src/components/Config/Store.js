
import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./CartReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const middleware = [thunk];



function saveToLocatStorage(state){
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("state", serialisedState)
    }catch(err){
        console.log(err)
    }
}

function loadFromLocatStorage(){
    try{
        const serialisedState = localStorage.getItem("state");
        if(serialisedState === null) return undefined
        return JSON.parse(serialisedState)

    }catch(err){
        console.log(err)
        return undefined
    }
}


const rootReducer = combineReducers({
    cart: CartReducer,
    auth: authReducer,
    errors: errorReducer
});

const persistedState = loadFromLocatStorage()

// const store = createStore(
//     () => [],
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );

const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   );

   store.subscribe(()=>saveToLocatStorage(store.getState()))
export default store;