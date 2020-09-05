import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const baseUrl = "http://127.0.0.1:5000/api";

@Injectable({
  providedIn: "root",
})
export class CandidatServices {
  isAuthenticated = false;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${baseUrl}/getAll`);
  }

  Authenticated() {
    this.isAuthenticated = true;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  triEtat(etat) {
    return this.http.get(`${baseUrl}/triEtat/${etat}`);
  }
  triNom(nom) {
    return this.http.get(`${baseUrl}/triNom/${nom}`);
  }
  triPrenom(prenom) {
    return this.http.get(`${baseUrl}/triPrenom/${prenom}`);
  }
  triStatue(statue) {
    return this.http.get(`${baseUrl}/triMail/${statue}`);
  }
  get(id) {
    console.log(id);
    console.log(`${baseUrl}/${id}`);
    return this.http.get(`${baseUrl}/get/${id}`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/new`, data);
  }
  login(data) {
    return this.http.post(`${baseUrl}/login`, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }
  updateEtat(id, data) {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
