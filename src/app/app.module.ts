import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { environment } from "src/environments/environment";
import { TopBarModule } from "./shared/modules/topBar/topBar.module";
import { PersistanceService } from "./shared/services/persistance.service";
import { AuthInterceptor } from "./shared/services/authintercepter.service";
import { GlobalFeedModule } from "./globalFeed/globalFeed.module";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { YourFeedModule } from "./yourFeed/yourFeed.module";
import { TagFeedModule } from "./tagFeed/tagFeed.module";
import { ArticleModule } from "./article/article.module";
import { CreateArticleModule } from "./createArticle/createArticle.module";
import { EditArticleModule } from "./editArticle/editArticle.module";
import { SettingsModule } from "./settings/settings.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TopBarModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
    SettingsModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
