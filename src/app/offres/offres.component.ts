import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-offres",
  templateUrl: "./offres.component.html",
  styleUrls: ["./offres.component.scss"],
})
export class OffresComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  Postuler() {
    this.router.navigate(["/postulerForm"]);
  }
}
