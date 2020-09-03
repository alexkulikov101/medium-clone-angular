import { PopularTagsStateInterface } from "../types/popularTagsState.interface";
import { createReducer, on, Action } from "@ngrx/store";
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailureAction,
} from "./actions/getPopularTags.action";

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, payload): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: payload.popularTags.slice(10),
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducer(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
