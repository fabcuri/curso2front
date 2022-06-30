import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class ConsultaProfessoresCursoService{
    constructor(private http:HttpClient){

    }
    consultaProfessores(idCurso: number){
        return this.http.get(`${environment.apiUrl}/cursos/${idCurso}`)
    }
}