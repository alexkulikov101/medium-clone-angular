import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { Observable } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { SavedArticleResponseInterface } from "src/app/shared/types/savedArticleResponse.interface";

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + "/articles";

    return this.http
      .post<SavedArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SavedArticleResponseInterface) => response.article));
  }
}
