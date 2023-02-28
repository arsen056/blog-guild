import {RootStateType} from "app/store";

export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading
export const selectError = (state: RootStateType): string => state.app.error