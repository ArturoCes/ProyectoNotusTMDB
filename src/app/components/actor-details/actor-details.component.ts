import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorDetailsResponse } from 'src/app/interfaces/actor-details.interface';
import { Actor, ActorsResponse } from 'src/app/models/interfaces/actors.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  constructor(public actorService: ActorService, private route: ActivatedRoute, public router: Router) { }
  actorId='';
  actor:Actor = {} as Actor;
  actorDetails:ActorDetailsResponse = {} as ActorDetailsResponse;
  actorList:Actor[] = [];

  ngOnInit(): void {
    this.actorId = this.route.snapshot.paramMap.get('id');
    this.actorService.actorDetails(this.actorId).subscribe(res =>{
      this.actorDetails = res;}
      )

  };

  actorImage () {
    return `https://image.tmdb.org/t/p/w500/${this.actorDetails.profile_path}`
  }

}
