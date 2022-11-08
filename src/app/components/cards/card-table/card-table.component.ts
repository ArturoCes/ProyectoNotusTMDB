import { Component, OnInit, Input } from "@angular/core";
import { Actor } from "src/app/models/interfaces/actors.interface";
import { ActorService } from "src/app/services/actor.service";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  page:number = 1;


  actorsList: Actor[] = [];
  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.actorsList(this.page).subscribe(res =>{
      this.actorsList = res.results;

    })
  }

  actorImage (actor:Actor) {
    return `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
  }

  nextPage(){
    this.page = this.page+1;
    this.actorService.actorsList(this.page).subscribe(res =>{

      this.actorsList = res.results;
  })

}
backPage(){
  if (this.page>1)
  this.page = this.page-1;

    this.actorService.actorsList(this.page).subscribe(res =>{

      this.actorsList = res.results;
  })
  }


}







