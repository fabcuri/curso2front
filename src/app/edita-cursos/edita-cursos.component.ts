import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edita-cursos',
  templateUrl: './edita-cursos.component.html',
  styleUrls: ['./edita-cursos.component.css'],
})
export class EditaCursosComponent implements OnInit {
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //capturar o id enviado pela URL
    const idCurso = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //consultar o produto na API através do ID
    this.httpClient
      .get(environment.apiUrl + '/cursos/' + idCurso)
      .subscribe(
        (data: any) => {
          //preenchendo os campos do formulario com os dados do produto
          this.formEdicao.patchValue(data);
        },
        (e) => {
          console.log(e);
        }
      );
  }
  //montando a estrutura do formulario
  formEdicao = new FormGroup({
    //campos do formulario ..serao os mesmos campos que temos na consulta, iremos acrescentar o id

    idCurso: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    sigla: new FormControl('', [Validators.required]),

  });
  get form(): any {
    return this.formEdicao.controls;
  }

  onSubmit(): void {
    this.httpClient.put(environment.apiUrl + '/cursos', this.formEdicao.value,{responseType:'text'}).subscribe(data => {
      this.mensagem = data;

    },
    e =>{
      this.mensagem = " Ocorreu um erro ao tentar editar o curso";
      console.log(e);
    }
    );
  }
}

