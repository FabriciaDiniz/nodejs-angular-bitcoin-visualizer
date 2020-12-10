import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateCurrencyFormComponent } from './update-currency-form/update-currency-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'atualizar', component: UpdateCurrencyFormComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
