import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./components/register/register.component";
import { reducer } from "./store/reducer";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";
import { BackendErrorMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { PersistanceService } from "../shared/services/persistance.service";
import { LoginEffect } from "./store/effects/login.effect";
import { LoginComponent } from "./components/login/login.component";
import { GetCurrentUserEffect } from "./store/effects/getCurrentUser.effect";
import { UpdateCurrentUserEffect } from "./store/effects/updateCurrentUser.effect";
import { LogoutEffect } from "./store/effects/logout.effect";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature("auth", reducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
