import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthHelper } from '../helpers/auth-helpers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
  exibirPagina: boolean = false;



  constructor(
    private httpClient: HttpClient,
    private authHelper: AuthHelper
    ) { }

  //montando a estrutura do formulario

  formLogin = new FormGroup({
    login: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),

  });


  //acessando o formulario/campos na pagina HTML

  get form(): any {

    return this.formLogin.controls;

  }


  ngOnInit(): void {
    if (this.authHelper.isAutenticated()) {
      // redirecionamento....
      window.location.href = "/consultar-pacientes";
    } else {
      this.exibirPagina = true;
    }
  }



  onSubmit(): void {
    //this.mensagem_sucesso = '';
    this.mensagem_erro = '';


    this.httpClient.post(environment.apiUrl + "/login",
      this.formLogin.value,
      { responseType: 'text' }).
      subscribe(

        data => {
          this.mensagem_sucesso = 'Autenticação realizada com sucesso';


          window.location.href = "/consultar-paciente";
        },
        e => {
          this.mensagem_erro = e.error();
          ;
          console.log(e.error);

        }
      );

  }


}