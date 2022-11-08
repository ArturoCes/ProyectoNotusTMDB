import { Component, OnInit } from '@angular/core';
import { Movie, PopularMovieResponse } from 'src/app/interfaces/popular-movies.interface';
import { RatedMovie } from 'src/app/interfaces/rated-movies.interface';
import { PopularMoviesService } from 'src/app/services/popular-movies.service';

@Component({
  selector: 'app-rate-movies',
  templateUrl: './rate-movies.component.html',
  styleUrls: ['./rate-movies.component.css']
})
export class RateMoviesComponent implements OnInit {
  movieList: RatedMovie[] = [];
  numPages=0;
  constructor(private rateMoviesService: PopularMoviesService) { }

  ngOnInit(): void {
    this.getRatedMovies(1);
  }


  getRatedMovies(page:number) {
    this.rateMoviesService.getRatedMovies().subscribe((resp) => {
      this.movieList = resp.results;
      this.numPages = Math.ceil(resp.results.length / 10);
    })
  }
  getLookImg(movie: Movie) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }
  counter() {
    return new Array(this.numPages);
  }

}

