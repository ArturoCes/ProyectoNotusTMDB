import { Component, OnInit } from '@angular/core';
import { FavMoviesResponse } from 'src/app/models/interfaces/fav-movies.interface';
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
    })

    this.favMoviesServices.getFavMovies(this.account_id).subscribe((res)=>{
      this.favMoviesList = res.results;
    })
  }

}
