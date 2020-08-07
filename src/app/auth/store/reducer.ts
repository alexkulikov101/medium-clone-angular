import { createReducer, on, Action } from "@ngrx/store";

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from "./actions/register.action";
import { AuthStateInterface } from "../types/authState.interface";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, payload): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: payload.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, payload): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: payload.errors,
    })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
