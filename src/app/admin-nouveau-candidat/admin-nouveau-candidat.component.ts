import { Component, OnInit } from "@angular/core";
import { CandidatServices } from "./../candidat.service";

@Component({
  selector: "app-admin-nouveau-candidat",
  templateUrl: "./admin-nouveau-candidat.component.html",
  styleUrls: ["./admin-nouveau-candidat.component.scss"],
})
export class AdminNouveauCandidatComponent implements OnInit {
  constructor(private candidatService: CandidatServices) {}
  candidat = {
    nom: "",
    prenom: "",
    email: "",
    dateNaissance: "",
    numTel: "",
    disponibilite: null,
    experience: null,
    cv: null,
    message: "",
  };

  ngOnInit() {}
  selectFile(event) {
    if (event.target.files.length > 0) {
      const file = (event.target as HTMLInputElement).files[0];
      this.candidat.cv = file;
    }
  }

  saveCandidat() {
    const data = {
      nom: this.candidat.nom,
      prenom: this.candidat.prenom,
      email: this.candidat.email,
      dateNaissance: this.candidat.dateNaissance,
      numTel: this.candidat.numTel,
      disponibilite: this.candidat.disponibilite,
      experience: this.candidat.experience,
      cv: this.candidat.cv,
      message: this.candidat.message,
    };
    const formData = new FormData();
    formData.append("nom", this.candidat.nom);
    formData.append("prenom", this.candidat.prenom);
    formData.append("email", this.candidat.email);
    formData.append("dateNaissance", this.candidat.dateNaissance);
    formData.append("numTel", this.candidat.numTel);
    formData.append("disponibilite", this.candidat.disponibilite);
    formData.append("experience", this.candidat.experience);
    formData.append("cv", this.candidat.cv);
    formData.append("message", this.candidat.message);
    console.log("test");

    this.candidatService.create(formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
