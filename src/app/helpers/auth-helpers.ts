import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class AuthHelper{
  //método para verificar se o usuário está autenticado

  isAutenticated() : boolean{
    return localStorage.getItem('login_usuario') != null &&
    localStorage.getItem('access_token') !=null;
  }
}