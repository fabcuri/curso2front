import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastra-alunos',
  templateUrl: './cadastra-alunos.component.html',
  styleUrls: ['./cadastra-alunos.component.css'],
})
export class CadastraAlunosComponent implements OnInit {
  //atributo para mensagem se gravou com sucesso ou nao
  mensagem: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
  //montando a estrutura do formulario
  formCadastro = new FormGroup({
    //campos do formulario
    nome: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
  
  });
  //acessando o formulário/campos na página HTML
  get form(): any {
    return this.formCadastro.controls;
  }
  //função para fazer a chamada do cadastro na API
  onSubmit(): void {
    this.httpClient
      .post(environment.apiUrl+'/alunos', this.formCadastro.value, {
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
