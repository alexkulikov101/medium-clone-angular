import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularTagsService } from "./services/popularTags.service";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";
import { EffectsModule } from "@ngrx/effects";
import { GetPopularTagsEffect } from "./store/effects/getPopularTags.effect";
import { PopularTagsComponent } from "./components/popularTags/popularTags.components";
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "../errorMessage/errorMessage.module";
import { LoadingModule } from "../loading/loading.module";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("popularTags", reducer), // register of reducer
    EffectsModule.forFeature([GetPopularTagsEffect]), // register of effects
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
