import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateArticleComponents } from "./componenets/createArticle/createArticle.component";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/articleForm/articleForm.module";
import { CreateArticleService } from "./services/createArticle.service";
import { EffectsModule } from "@ngrx/effects";
import { CreateArticleEffect } from "./store/effects/createArticle.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";

const routes = [
  {
    path: "articles/new",
    component: CreateArticleComponents,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature("createArticle", reducer),
  ],
  declarations: [CreateArticleComponents],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
