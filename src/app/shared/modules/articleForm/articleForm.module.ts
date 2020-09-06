import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticleFormComponents } from "./componenets/articleForm/articleForm.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BackendErrorMessagesModule } from "../backendErrorMessages/backendErrorMessages.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [ArticleFormComponents],
  exports: [ArticleFormComponents],
})
export class ArticleFormModule {}
