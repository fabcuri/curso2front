import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consulta-alunos',
  templateUrl: './consulta-alunos.component.html',
  styleUrls: ['./consulta-alunos.component.css']
})
export class ConsultaAlunosComponent implements OnInit {

  alunos: any[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl+'/alunos').subscribe
    ((data)=>{
      this.alunos= data as any[];

    },
    (e)=> {
      console.log(e);
    }
    )
  }
  excluir(idAluno:number):void{
    if(window.confirm('Deseja realmente excluir o aluno selecionado?')){
      this.httpClient.delete(environment.apiUrl+"/alunos/"+idAluno,
     { responseType : 'text'})
     .subscribe(
        (data)=>{
          alert(data);
          this.ngOnInit();
        },
        (e)=>{
          console.log(e);
        }
     )
    }
  }

}
