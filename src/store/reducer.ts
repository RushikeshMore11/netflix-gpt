import { combineReducers } from "redux";

import exampleReducer from "./example/example.reducer";

const AppReducer = combineReducers({
  Example: exampleReducer,
});

export type RootState = ReturnType<typeof AppReducer>;

const rootReducer = (state: any, action: any) => {
  return AppReducer(state, action);
};

export default rootReducer;
