import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CurrencyDisplayComponent } from './components/currency-display/currency-display.component';
import { HomeService } from './components/home/home.service';
import { UpdateCurrencyComponent } from './components/update-currency/update-currency.component';
import { UpdateCurrencyService } from './components/update-currency/update-currency.service';
import { RouterService } from './services/router.service';
import { LoginService } from './components/login/login.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UpdateCurrencyComponent,
    CurrencyDisplayComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    RouterService,
    LoginService,
    HomeService,
    UpdateCurrencyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
