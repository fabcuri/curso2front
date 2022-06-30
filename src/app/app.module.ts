import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';
import { CadastraAlunosComponent } from './cadastra-alunos/cadastra-alunos.component';
import { EditaAlunosComponent } from './edita-alunos/edita-alunos.component';
import { CadastraCursosComponent } from './cadastra-cursos/cadastra-cursos.component';
import { EditaCursosComponent } from './edita-cursos/edita-cursos.component';
import { ConsultaCursosComponent } from './consulta-cursos/consulta-cursos.component';
import { CadastraProfessoresComponent } from './cadastra-professores/cadastra-professores.component';
import { ConsultaProfessoresComponent } from './consulta-professores/consulta-professores.component';
import { EditaProfessoresComponent } from './edita-professores/edita-professores.component';
import { ConsultaTurmasComponent } from './consulta-turmas/consulta-turmas.component';
import { CadastraTurmasComponent } from './cadastra-turmas/cadastra-turmas.component';
import { EditaTurmasComponent } from './edita-turmas/edita-turmas.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaAlunosturmaComponent } from './consulta-alunosturma/consulta-alunosturma.component';
import { ConsultaProfessorescursoComponent } from './consulta-professorescurso/consulta-professorescurso.component';


const routes: Routes = [
  { path: 'cadastra-alunos', component: CadastraAlunosComponent },
  { path: 'consulta-alunos', component: ConsultaAlunosComponent },
  { path: 'edita-alunos/:id', component: EditaAlunosComponent },
  { path: 'cadastra-cursos', component: CadastraCursosComponent },
  { path: 'consulta-cursos', component: ConsultaCursosComponent },
  { path: 'edita-cursos/:id', component: EditaCursosComponent },
  { path: 'cadastra-professores', component: CadastraProfessoresComponent },
  { path: 'consulta-professores', component: ConsultaProfessoresComponent },
  { path: 'edita-professores/:id', component: EditaProfessoresComponent },
  { path: 'cadastra-turmas', component: CadastraTurmasComponent },
  { path: 'consulta-turmas', component: ConsultaTurmasComponent },
  { path: 'edita-turmas/:id', component: EditaTurmasComponent },
  { path: 'consulta-alunosturma', component: ConsultaAlunosturmaComponent },
  { path: 'consulta-professorescurso', component: ConsultaProfessorescursoComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'account', component: AccountComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ConsultaAlunosComponent,
    CadastraAlunosComponent,
    EditaAlunosComponent,
    CadastraCursosComponent,
    EditaCursosComponent,
    ConsultaCursosComponent,
    CadastraProfessoresComponent,
    ConsultaProfessoresComponent,
    EditaProfessoresComponent,
    ConsultaTurmasComponent,
    CadastraTurmasComponent,
    EditaTurmasComponent,
    AccountComponent,
    LoginComponent,
    ConsultaAlunosturmaComponent,
    ConsultaProfessorescursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
