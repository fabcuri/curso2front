import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastra-cursos',
  templateUrl: './cadastra-cursos.component.html',
  styleUrls: ['./cadastra-cursos.component.css'],
})
export class CadastraCursosComponent implements OnInit {
  //atributo para mensagem se gravou com sucesso ou nao
  mensagem: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
  //montando a estrutura do formulario
  formCadastro = new FormGroup({
    //campos do formulario
    nome: new FormControl('', [Validators.required]),
    sigla: new FormControl('', [Validators.required]),
  
  });
  //acessando o formulário/campos na página HTML
  get form(): any {
    return this.formCadastro.controls;
  }
  //função para fazer a chamada do cadastro na API
  onSubmit(): void {
    this.httpClient
      .post(environment.apiUrl+'/cursos', this.formCadastro.value, {
        responseType: 'text',
      })
      .subscribe(
        (data) => {
          this.mensagem = data;
          this.formCadastro.reset();
        },
        (e) => {
          this.mensagem = 'Erro ao cadastrar';
          console.log(e);
        }
      );
  }
}
