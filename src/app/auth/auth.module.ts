import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./components/register/register.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer";
import { AuthService } from "./services/auth.service";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature("auth", reducer),
  ],
  providers: [AuthService],
})
export class AuthModule {}
