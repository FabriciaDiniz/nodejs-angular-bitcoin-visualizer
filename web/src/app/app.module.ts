import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CurrencyDisplayComponent } from './currency-display/currency-display.component';
import { HomeService } from './home/home.service';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { UpdateCurrencyService } from './update-currency/update-currency.service';
import { RouterService } from './services/router.service';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UpdateCurrencyComponent,
    CurrencyDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    RouterService,
    LoginService,
    HomeService,
    UpdateCurrencyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
