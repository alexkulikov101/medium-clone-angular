import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { FeedService } from "../../feed/services/feed.service";
import { GetFeedResponseInterface } from "../types/getFeedResponse.interface";
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from "../store/actions/getFeed.action";

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction), // we listen it
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );
}
