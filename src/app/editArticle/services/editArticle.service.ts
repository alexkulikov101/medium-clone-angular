import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { environment } from "src/environments/environment";
import { SavedArticleResponseInterface } from "src/app/shared/types/savedArticleResponse.interface";

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http
      .put<SavedArticleResponseInterface>(fullUrl, articleInput)
      .pipe(
        map((response: SavedArticleResponseInterface) => {
          return response.article;
        })
      );
  }
}
