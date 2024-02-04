export interface IActionReturnType {
  type: string;
  payload?: IExampleInitialState | any;
}

export interface IExampleInitialState {
  count: number;
}

export interface IActions {
  type: string;
  payload: IExampleInitialState;
}
