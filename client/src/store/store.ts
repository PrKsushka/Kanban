import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import notesReducer from "./notes/notes.reducer";
import notesWithoutAPIReducer from "./notesWithoutAPI/notes.reducer";

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({ notes: notesWithoutAPIReducer });
export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
