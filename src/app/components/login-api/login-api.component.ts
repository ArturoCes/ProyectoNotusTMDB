import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateSessionDto } from 'src/app/models/dto/create-session.dto';
import { DeleteSessionDto } from 'src/app/models/dto/delete-session.dto';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-login-api',
  templateUrl: './login-api.component.html',
  styleUrls: ['./login-api.component.css']
})
export class LoginAPIComponent implements OnInit {
  reqToken = '';
  approved: boolean = false;


  constructor(private authService: AuthService,    private route: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    if (localStorage.getItem('session_id') != null) {
      this.approved = true;
    }
    this.profileService.getProfileInfo().subscribe((resp)=>{
      localStorage.setItem('account_id', resp.id.toString());
    })
  }

  requestToken() {
    this.authService.createRequestToken().subscribe((resp) => {
      this.reqToken = resp.request_token;
      console.log(this.reqToken);
      window.location.href = `https://www.themoviedb.org/authenticate/${this.reqToken}?redirect_to=http://localhost:4200/approved`;
    });
  }

  logout() {
    let deleteSessionDto = new DeleteSessionDto();
    if (localStorage.getItem('session_id') != null) {
      deleteSessionDto.session_id = localStorage.getItem('session_id')!;
      this.authService.deleteSession(deleteSessionDto).subscribe((resp) => {
        if (resp.success) {
          localStorage.removeItem('session_id');
          this.approved = false;
          location.reload;
        }
      });
    }
  }
}
