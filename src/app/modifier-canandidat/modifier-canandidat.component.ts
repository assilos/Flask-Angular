import { ActivatedRoute, Router } from "@angular/router";
import { CandidatServices } from "./../candidat.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modifier-canandidat",
  templateUrl: "./modifier-canandidat.component.html",
  styleUrls: ["./modifier-canandidat.component.scss"],
})
export class ModifierCanandidatComponent implements OnInit {
  candidat: any;
  constructor(
    private candidatService: CandidatServices,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCandidat(this.route.snapshot.paramMap.get("id"));
  }
  modifierCandidat() {}
  getCandidat(id) {
    console.log(id);
    this.candidatService.get(id).subscribe(
      (data) => {
        this.candidat = data;
        console.log(this.candidat);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateCandidat() {
    this.candidatService.update(this.candidat.id, this.candidat).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(["/admin/detailCandidat", this.candidat.id]);
  }
}
