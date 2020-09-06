import { ArticleInterface } from "src/app/shared/types/article.interface";
import { BackendErrorsInterface } from "src/app/auth/types/backendErrors.interface";

export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
