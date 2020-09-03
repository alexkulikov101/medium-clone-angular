import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { isLoggedInSelector } from "src/app/auth/store/selectors";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "mc-feed-toggler",
  templateUrl: "./feedToggler.component.html",
})
export class FeedTogglerComponent implements OnInit {
  @Input("tagName") tagNameProps: string | null;

  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
