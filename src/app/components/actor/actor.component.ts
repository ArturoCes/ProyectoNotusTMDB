import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/interfaces/actors.interface';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  @Input() actor: Actor = {} as Actor;
  constructor() { }

  ngOnInit(): void {
  }

  actorImage () {
    return `https://image.tmdb.org/t/p/w500/${this.actor.profile_path}`
  }
}
