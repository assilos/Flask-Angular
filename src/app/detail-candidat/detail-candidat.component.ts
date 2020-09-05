import { CandidatServices } from "./../candidat.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detail-candidat",
  templateUrl: "./detail-candidat.component.html",
  styleUrls: ["./detail-candidat.component.scss"],
})
export class DetailCandidatComponent implements OnInit {
  currentCandidat: any;
  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCandidat(this.route.snapshot.paramMap.get("id"));
  }

  lien = "../../../../instance/uploads" + this.currentCandidat.CV;

  getCandidat(id) {
    console.log(id);
    this.candidatService.get(id).subscribe(
      (data) => {
        this.currentCandidat = data;
        console.log(this.currentCandidat);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  confirm() {
    this.currentCandidat.etat = "Confirmer";

    this.candidatService
      .updateEtat(this.currentCandidat.id, this.currentCandidat)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    this.router.navigate(["/admin/detailCandidat", this.currentCandidat.id]);
  }

  Encours() {
    this.currentCandidat.etat = "Encours";

    this.candidatService
      .updateEtat(this.currentCandidat.id, this.currentCandidat)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    this.router.navigate(["/admin/detailCandidat", this.currentCandidat.id]);
  }

  Rejeter() {
    this.currentCandidat.etat = "Rejeter";

    this.candidatService
      .updateEtat(this.currentCandidat.id, this.currentCandidat)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    this.router.navigate(["/admin/detailCandidat", this.currentCandidat.id]);
  }
}
