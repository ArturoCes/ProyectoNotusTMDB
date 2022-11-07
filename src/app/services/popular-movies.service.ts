import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { rateDto } from "../interfaces/dto/rateDto";
import { PopularMovieResponse } from "../interfaces/popular-movies.interface";

@Injectable({
  providedIn: "root",
})
export class PopularMoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies(page: number): Observable<PopularMovieResponse> {
    return this.http.get<PopularMovieResponse>(
      `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`
    );
  }
 // getRateMovie():Observable{
//    return this.http.post<rateDto>
  //}
}
