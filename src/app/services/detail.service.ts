import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Detail, DetailResponse } from "../interfaces/details-movies.interface";

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
}
