import { ThemeOptions } from "../reducers/themeReducer";

export enum ThemeActionType {
  CHANGE,
}

export interface ThemeAction {
  type: ThemeActionType;
  payload: ThemeOptions;
}

export const changeTheme = (payload: ThemeOptions): ThemeAction => ({
  type: ThemeActionType.CHANGE,
  payload,
});
