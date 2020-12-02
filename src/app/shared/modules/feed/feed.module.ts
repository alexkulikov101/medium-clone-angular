import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeedComponent } from "src/app/shared/modules/feed/components/feed/feed.component";
import { EffectsModule } from "@ngrx/effects";
import { GetFeedEffect } from "./effects/getFeed.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";
import { FeedService } from "./services/feed.service";
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "../errorMessage/errorMessage.module";
import { LoadingModule } from "../loading/loading.module";
import { PaginationModule } from "../pagination/pagination.module";
import { TagListModule } from "../tagList/tagList.module";
import { AddToFavoritesModule } from "../addToFavotites/addToFavorites.module";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature("feed", reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
