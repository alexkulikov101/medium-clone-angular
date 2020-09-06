import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "src/app/auth/types/backendErrors.interface";
import { Store, select } from "@ngrx/store";
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from "../../store/selectors";
import { createArticleAction } from "../../store/actions/createArticle.action";

@Component({
  selector: "mc-create-article",
  templateUrl: "./createArticle.component.html",
})
export class CreateArticleComponents implements OnInit {
  initialValues: ArticleInputInterface = {
    title: "",
    description: "",
    body: "",
    tagList: [],
  };

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
