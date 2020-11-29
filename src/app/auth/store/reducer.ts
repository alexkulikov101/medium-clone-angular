import { createReducer, on, Action } from "@ngrx/store";

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from "./actions/register.action";
import { AuthStateInterface } from "../types/authState.interface";
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from "./actions/login.actions";
import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from "./actions/getCurrentUser.action";
import { updateCurrentUserSuccessAction } from "./actions/updateCurrentUSer.action";
import { logoutAction } from "./actions/sync.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, payload): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: payload.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, payload): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: payload.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, payload): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: payload.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      currentUser: action.currentUser,
    })
  ),
  on(
    logoutAction,
    (): AuthStateInterface => ({
      ...initialState,
      isLoggedIn: false,
    })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
