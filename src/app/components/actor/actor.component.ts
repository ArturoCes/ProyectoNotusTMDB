import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/interfaces/actors.interface';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @Input() actor: Actor = {} as Actor;
  constructor() { }

  ngOnInit(): void {
  }

  actorImage () {
    return `https://image.tmdb.org/t/p/w500/${this.actor.profile_path}`
  }
}
