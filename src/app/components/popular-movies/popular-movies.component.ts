import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces/popular-movies.interface";
import { PopularMoviesService } from "src/app/services/popular-movies.service";

@Component({
  selector: "app-popular-movies",
  templateUrl: "./popular-movies.component.html",
  styleUrls: ["./popular-movies.component.css"],
})
export class PopularMoviesComponent implements OnInit {
  movieList: Movie[] = [];
  numPages = 0;
  constructor(private popularMovieService: PopularMoviesService) {}

  ngOnInit(): void {
    this.getPopularMovies(1);
  }

  getPopularMovies(page: number) {
    this.popularMovieService.getPopularMovies(page).subscribe((resp) => {
      this.movieList = resp.results;
      this.numPages = Math.ceil(resp.results.length / 10);
    });
  }
  counter() {
    return new Array(this.numPages);
  }

  getLookImg(movie: Movie) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }
}
