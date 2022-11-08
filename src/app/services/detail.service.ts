import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Detail, DetailResponse } from "../interfaces/details-movies.interface";
import { Movie } from "../interfaces/popular-movies.interface";

@Injectable({
  providedIn: "root",
})
export class DetailService {
  constructor(private http: HttpClient) {}
  getDetailsMovie(id: string): Observable<DetailResponse> {
    return this.http.get<DetailResponse>(
      `${environment.apiBaseUrl}/movie/${id}/videos?api_key=${environment.apiKey}`
    );
  }
  getDetail(id: string): Observable<Movie> {
    return this.http.get<Movie>(
      `${environment.apiBaseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

}
