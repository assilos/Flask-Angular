import { CandidatServices } from "./../candidat.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  admin = {
    nom: "",
    password: "",
  };
  message = "";
  test = "";
  constructor(
    private candidatService: CandidatServices,
    private route: Router
  ) {}

  ngOnInit() {}
  login() {
    const data = {
      nom: this.admin.nom,
      password: this.admin.password,
    };

    this.candidatService.login(data).subscribe(
      (response) => {
        console.log(response);
        this.test = JSON.stringify(response);
        this.message = JSON.parse(this.test);

        console.log(this.message);
        if (this.message == "password matched") {
          this.candidatService.Authenticated();
          this.route.navigate(["admin/listeCandidat"]);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
