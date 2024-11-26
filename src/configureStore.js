import { applyMiddleware, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import loggerMiddleware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import rootReducer from "./rootReducer";


export default function configureStore(preloadedState) {
    
    let middleware;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        // dev code
        middleware = [loggerMiddleware, thunk]
      } else {
        // production code
        middleware = [thunk]
    }

    const middlewares = middleware
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = compose(...enhancers)


    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}