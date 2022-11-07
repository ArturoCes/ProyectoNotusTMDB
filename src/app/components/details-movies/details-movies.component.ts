import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Detail } from "src/app/interfaces/details-movies.interface";
import { Movie, PopularMovieResponse } from "src/app/interfaces/popular-movies.interface";
import { DetailService } from "src/app/services/detail.service";

@Component({
  selector: "app-details-movies",
  templateUrl: "./details-movies.component.html",
  styleUrls: ["./details-movies.component.css"],
})
export class DetailsMoviesComponent implements OnInit {
  detailList: Detail[] = [];
  movie:Movie;
  detail: Detail;
  id: string;

  constructor(private detailService: DetailService, private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.id = (this.router.url.split('/')[2]).split('?')[0];
    this.getDetails();
    this.detailService.getDetail(this.id).subscribe((resp)=>{
      this.movie = resp;
    });
  }

  getDetails() {

    this.detailService.getDetailsMovie(this.id).subscribe((resp) => {
      this.detailList = resp.results;

    });
  }

  getUrlVideo(v: Detail) {
    let url = `https://www.youtube.com/embed/${v.key}`

   return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  getFilmPoster(p:string) {
    return `https://image.tmdb.org/t/p/w500${p}`
  }
}
