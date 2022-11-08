import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavMoviesResponse } from '../models/interfaces/fav-movies.interface';

@Injectable({
  providedIn: 'root'
})
export class FavMoviesService {

  constructor(private http: HttpClient) { }

    getFavMovies(account_id:number):Observable<FavMoviesResponse> {
      return this.http.get<FavMoviesResponse>(
        `${environment.apiBaseUrl}/account/${account_id}/favorite/movies?api_key=${environment.API_KEY}&session_id=${localStorage.getItem('session_id')}&language=en-US&sort_by=created_at.asc&page=1`
      )
    }
}
