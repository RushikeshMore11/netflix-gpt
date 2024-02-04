import { INCREMENT_COUNT } from "./example.actionTypes";
import { IActionReturnType } from "./example.interface";

export const incrementCount = (): IActionReturnType => ({
  type: INCREMENT_COUNT,
});
