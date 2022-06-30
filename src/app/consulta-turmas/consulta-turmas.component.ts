import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consulta-turmas',
  templateUrl: './consulta-turmas.component.html',
  styleUrls: ['./consulta-turmas.component.css']
})
export class ConsultaTurmasComponent implements OnInit {

  turmas: any[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl+'/turmas').subscribe
    ((data)=>{
      this.turmas= data as any[];

    },
    (e)=> {
      console.log(e);
    }
    )
  }
  excluir(idTurma:number):void{
    if(window.confirm('Deseja realmente excluir a turma selecionada?')){
      this.httpClient.delete(environment.apiUrl+"/turmas/"+idTurma,
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

