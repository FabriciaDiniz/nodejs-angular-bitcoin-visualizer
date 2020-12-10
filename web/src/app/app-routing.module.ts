import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateCurrencyComponent } from './components/update-currency/update-currency.component';

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
