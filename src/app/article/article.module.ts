import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EffectsModule } from "@ngrx/effects";
import { GetArticleEffect } from "./effects/getArticle.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";
import { ArticleService as SharedArticleService } from "../shared/services/article.service";
import { ArticleService } from "./services/article.service";
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "../shared/modules/errorMessage/errorMessage.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { ArticleComponent } from "./components/article/article.component";
import { TagListModule } from "../shared/modules/tagList/tagList.module";
import { DeleteArticleEffect } from "./effects/deleteArticle.effect";

const routes = [
  {
    path: "articles/:slug",
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature("article", reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
