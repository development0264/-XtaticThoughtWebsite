import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduceReducers from "reduce-reducers";
import { siteStateReducer } from "./components/SiteState/state/reducer";

function exampleReducer(state = { test: "test" }, { type, payload }) {
  return state;
}

export const initializeStore = () => {
  const rootReducerOriginal = combineReducers({
    example: exampleReducer,
    siteState: siteStateReducer
  });

  const rootReducer = reduceReducers(rootReducerOriginal, state => state);

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
          traceLimit: 25
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const middleware = [thunk];

  if (process.env.NODE_ENV !== "production") {
    const { createLogger } = require("redux-logger");
    middleware.push(createLogger({ collapsed: true }));
  }

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  );

  return createStore(rootReducer, enhancer);
};

const store = initializeStore();

export default store;
