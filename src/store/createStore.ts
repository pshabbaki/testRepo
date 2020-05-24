import {
    applyMiddleware,
    compose,
    createStore
} from "redux";
import thunk from "redux-thunk";

// import rootReducer from "../reducers";

export default function createReduxStore() {
    const anyWindow = window as any;

    // const reduxDevTools =
    //     anyWindow.__REDUX_DEVTOOLS_EXTENSION__
    //         ? anyWindow.__REDUX_DEVTOOLS_EXTENSION__()
    //         : (cmpse: any) => cmpse;

    //     return createStore(
    //         rootReducer,
    //         {},
    //         compose(
    //             applyMiddleware(thunk),
    //             reduxDevTools,
    //         )
    //     )
}