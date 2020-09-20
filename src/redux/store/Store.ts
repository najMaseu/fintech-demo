import { createStore } from "redux";
import { themeReducer } from "../reducers/themeReducer";

export const store = createStore(themeReducer);
