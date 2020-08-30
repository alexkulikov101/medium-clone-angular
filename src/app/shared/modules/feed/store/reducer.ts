import { FeedStateInterface } from "../types/feedState.interface";
import { createReducer, on, Action } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from "./actions/getFeed.action";

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, payload): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: payload.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
);

export function reducer(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
