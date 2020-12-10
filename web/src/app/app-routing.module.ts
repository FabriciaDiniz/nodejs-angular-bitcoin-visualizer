import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'atualizar', component: UpdateCurrencyComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
