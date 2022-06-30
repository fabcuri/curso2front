import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultaAlunosComponent } from '../consulta-alunos/consulta-alunos.component';
import { ConsultaProfessoresCursoService } from './services/consultaprofessorescurso.service';


@Component({
  selector: 'app-consulta-professorescurso',
  templateUrl: './consulta-professorescurso.component.html',
  styleUrls: ['./consulta-professorescurso.component.css']
})
export class ConsultaProfessorescursoComponent implements OnInit {
  professores: any[]=[];
  idCurso!:number;
  nome!:number;
  constructor(private consultaprofessoresservice:ConsultaProfessoresCursoService) { }

  ngOnInit(): void {
  }
  buscarProfessores(){
    this.consultaprofessoresservice.consultaProfessores(this.idCurso).subscribe(($resposta:any)=>{
      this.professores=$resposta.nomesProfessores
      this.nome=$resposta.nome
      console.log(this.professores)
    })
  }

}
