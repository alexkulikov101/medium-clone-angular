import { ArticleStateInterface } from "../types/articleState.interface";
import { createReducer, on, Action } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from "./actions/getArticle.action";

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, payload): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: payload.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

export function reducer(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
