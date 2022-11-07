import { Component, OnInit } from "@angular/core";
import { Detail } from "src/app/interfaces/details-movies.interface";
import { DetailService } from "src/app/services/detail.service";

@Component({
  selector: "app-details-movies",
  templateUrl: "./details-movies.component.html",
  styleUrls: ["./details-movies.component.css"],
})
export class DetailsMoviesComponent implements OnInit {
  detailList: Detail[] = [];
  detail: Detail;
  constructor(private detailService: DetailService) {}

  ngOnInit(): void {}

  getDetails(detail: Detail) {
    this.detailService.getDetailsMovie(detail.id).subscribe((resp) => {
      this.detailList = resp.results;
    });
  }
}
