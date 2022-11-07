import { Component, OnInit } from '@angular/core';
import { FavMoviesResponse, Result } from 'src/app/models/interfaces/fav-movies.interface';
import { FavMoviesService } from 'src/app/services/fav-movies.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {

  account_id:number;
  favMoviesList:any[] = [];
  constructor(private favMoviesServices: FavMoviesService, private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getProfileInfo().subscribe(res => {
      this.account_id = res.id;
      console.log(this.account_id)
    })

    this.favMoviesServices.getFavMovies(this.account_id).subscribe((res)=>{
      this.favMoviesList = res.results;
    })
  }

  getMovieImg(movie: Result ) {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }
}
