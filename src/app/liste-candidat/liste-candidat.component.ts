import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CandidatServices } from "../candidat.service";
@Component({
  selector: "app-liste-candidat",
  templateUrl: "./liste-candidat.component.html",
  styleUrls: ["./liste-candidat.component.scss"],
})
export class ListeCandidatComponent implements OnInit {
  candidats: any;
  choix = "";
  etat = "";
  statut = "";
  nom = "";
  prenom = "";
  constructor(
    private candidatServices: CandidatServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.retrievCandidats();
  }

  retrievCandidats() {
    this.candidatServices.getAll().subscribe(
      (data) => {
        this.candidats = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  Detail(id) {
    this.router.navigate(["/admin/detailCandidat", id]);
  }
  modifier(id) {
    this.router.navigate(["/admin/modifierCandidat", id]);
  }
  nouvelleCandidature() {
    this.router.navigate(["/admin/ajouterCandidat"]);
  }
  recherche() {
    if (this.choix == "etat") {
      this.candidatServices.triEtat(this.etat).subscribe(
        (data) => {
          this.candidats = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    if (this.choix == "nom") {
      this.candidatServices.triNom(this.nom).subscribe(
        (data) => {
          this.candidats = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    if (this.choix == "prenom") {
      this.candidatServices.triPrenom(this.prenom).subscribe(
        (data) => {
          this.candidats = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    if (this.choix == "statut") {
      this.candidatServices.triStatue(this.statut).subscribe(
        (data) => {
          this.candidats = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
