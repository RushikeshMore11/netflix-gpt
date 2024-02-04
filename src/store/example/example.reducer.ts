import { INCREMENT_COUNT } from "./example.actionTypes";
import { IExampleInitialState, IActions } from "./example.interface";

export const exampleReducerInitialState: IExampleInitialState = {
  count: 0,
};

const exampleReducer = (
  state = exampleReducerInitialState,
  actions: IActions
) => {
  const { type, payload } = actions;

  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default exampleReducer;
