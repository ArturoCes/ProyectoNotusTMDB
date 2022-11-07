import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateSessionDto } from 'src/app/models/dto/create-session.dto';
import { UserDetailsResponse } from 'src/app/models/interfaces/user-details.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  approved = false;
  userInfo: UserDetailsResponse = {} as UserDetailsResponse;
  urlImg='';
  sessionId: string = '';
  constructor(
    private profileService: ProfileService) { }

  ngOnInit(): void {

      if (localStorage.getItem('session_id')!=null){
        this.profileService.getProfileInfo().subscribe(res => {
          this.userInfo = res;
        })
      }




  }

  getProfileImg():string{
     return `https://www.themoviedb.org/t/p/w150_and_h150_face${this.userInfo.avatar.tmdb.avatar_path}`
    // return `https://www.themoviedb.org/t/p/w32_and_h32_face/rgdfgutojw81dEs93XS11GEOWxK.png`
  }

}
