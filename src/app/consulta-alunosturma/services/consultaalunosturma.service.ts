import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class ConsultaAlunosturmaService{
    constructor(private http:HttpClient){

    }
    consultaAlunos(idTurma: number){
        return this.http.get(`${environment.apiUrl}/turmas/${idTurma}`)
    }
}