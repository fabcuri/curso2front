import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consulta-professores',
  templateUrl: './consulta-professores.component.html',
  styleUrls: ['./consulta-professores.component.css']
})
export class ConsultaProfessoresComponent implements OnInit {

  professores: any[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl+'/professores').subscribe
    ((data)=>{
      this.professores= data as any[];

    },
    (e)=> {
      console.log(e);
    }
    )
  }
  excluir(idProfessor:number):void{
    if(window.confirm('Deseja realmente excluir o professor selecionado?')){
      this.httpClient.delete(environment.apiUrl+"/professores/"+idProfessor,
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


