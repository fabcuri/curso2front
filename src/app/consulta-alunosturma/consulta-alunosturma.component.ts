import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultaAlunosComponent } from '../consulta-alunos/consulta-alunos.component';
import { ConsultaAlunosturmaService } from './services/consultaalunosturma.service';

@Component({
  selector: 'app-consulta-alunosturma',
  templateUrl: './consulta-alunosturma.component.html',
  styleUrls: ['./consulta-alunosturma.component.css']
})
export class ConsultaAlunosturmaComponent implements OnInit {
  alunos: any[]=[];
  idTurma!:number;
  semestre!:number;

  constructor(private consultaalunosservice:ConsultaAlunosturmaService) { }

  ngOnInit(): void {
  }
  buscarAlunos(){
    this.consultaalunosservice.consultaAlunos(this.idTurma).subscribe(($resposta:any)=>{
      this.alunos=$resposta.nomesAlunos
      this.semestre=$resposta.semestre
      console.log(this.alunos)
    });
  }
    }
  


