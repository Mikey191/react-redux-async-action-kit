import { combineReducers, createStore, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReduser";
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
