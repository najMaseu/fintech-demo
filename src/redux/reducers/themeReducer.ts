import { ThemeAction, ThemeActionType } from "../actions/actions";

export enum ThemeOptions {
  LIGHT,
  DARK,
}

export interface ThemeState {
  theme: ThemeOptions;
}

export const initialState: ThemeState = {
  theme: ThemeOptions.DARK,
};

export const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case ThemeActionType.CHANGE:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
