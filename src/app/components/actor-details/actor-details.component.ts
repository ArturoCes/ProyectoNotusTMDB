import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor, ActorsResponse } from 'src/app/models/interfaces/actors.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  constructor(public actorService: ActorService, private route: ActivatedRoute, public router: Router) { }
  actorId=0;
  actor:Actor = {} as Actor;
  actorList:Actor[] = [];

  ngOnInit(): void {
    this.actorId = Number(this.route.snapshot.paramMap.get('id'));

    this.actorService.actorsList(1).subscribe(res =>{
      this.actorList = res.results;
      for (let i of this.actorList) {
        if(i.id == this.actorId)
        this.actor = i;
      }
    })
  };

}
