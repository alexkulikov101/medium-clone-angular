import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { getPopularTagsAction } from "../../store/actions/getPopularTags.action";
import { Observable } from "rxjs";
import {
  populartagsSelector,
  isLoadingSelector,
  errorSelector,
} from "../../store/selectors";

@Component({
  selector: "mc-popular-tags",
  templateUrl: "./popularTags.components.html",
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<string[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }

  initializeValue(): void {
    this.popularTags$ = this.store.pipe(select(populartagsSelector));

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
