import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OffresComponent } from "./offres/offres.component";
import { PostulerFormComponent } from "./postuler-form/postuler-form.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { ListeCandidatComponent } from "./liste-candidat/liste-candidat.component";
import { DetailCandidatComponent } from "./detail-candidat/detail-candidat.component";
import { ModifierCanandidatComponent } from "./modifier-canandidat/modifier-canandidat.component";
import { AdminNouveauCandidatComponent } from "./admin-nouveau-candidat/admin-nouveau-candidat.component";
import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    PostulerFormComponent,
    LoginComponent,
    ListeCandidatComponent,
    DetailCandidatComponent,
    ModifierCanandidatComponent,
    AdminNouveauCandidatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
