import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateSessionDto } from 'src/app/models/dto/create-session.dto';
import { UserDetailsResponse } from 'src/app/models/interfaces/user-details.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  approved = false;
  userInfo: UserDetailsResponse = {} as UserDetailsResponse;
  sessionId: string = '';
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((qParams) => {
      const ap = qParams['approved'];
      const rToken = qParams['request_token'];
      this.approved = ap == 'true' ? true : false;

      if (this.approved) {
        let session = new CreateSessionDto();
        session.request_token = rToken;
        this.authService.createSession(session).subscribe((resp) => {
          localStorage.setItem('session_id', resp.session_id);

          this.router.navigate(['/profile']);
        });
      } else {
        this.router.navigate(['/admin']);
      }
    });



  }

}
