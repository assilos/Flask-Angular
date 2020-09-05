import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OffresComponent } from "./offres/offres.component";
import { PostulerFormComponent } from "./postuler-form/postuler-form.component";
import { LoginComponent } from "./login/login.component";
import { ListeCandidatComponent } from "./liste-candidat/liste-candidat.component";
import { DetailCandidatComponent } from "./detail-candidat/detail-candidat.component";
import { ModifierCanandidatComponent } from "./modifier-canandidat/modifier-canandidat.component";
import { AdminNouveauCandidatComponent } from "./admin-nouveau-candidat/admin-nouveau-candidat.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/postulerForm", pathMatch: "full" },
  { path: "postulerForm", component: PostulerFormComponent },
  { path: "adminLogin", component: LoginComponent },
  {
    path: "admin/listeCandidat",
    component: ListeCandidatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/detailCandidat/:id",
    component: DetailCandidatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/modifierCandidat/:id",
    component: ModifierCanandidatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/ajouterCandidat",
    component: AdminNouveauCandidatComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
