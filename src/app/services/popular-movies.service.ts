import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { rateDto } from "../interfaces/dto/rateDto";
import { PopularMovieResponse } from "../interfaces/popular-movies.interface";
import { RatedMoviesResponse } from "../interfaces/rated-movies.interface";


const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}
@Injectable({
  providedIn: "root",
})
export class PopularMoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number): Observable<PopularMovieResponse> {
    return this.http.get<PopularMovieResponse>(
      `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`
    );
  }
  rateMovie(id: string, rateDto: rateDto) {
    return this.http.post(
      `${environment.apiBaseUrl}/movie/${id}/rating?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, rateDto)
  }
  getRatedMovies(): Observable<RatedMoviesResponse> {
    return this.http.get<RatedMoviesResponse>(`${environment.apiBaseUrl}/account/${localStorage.getItem('account_id')}/rated/movies?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`)

  }
}
