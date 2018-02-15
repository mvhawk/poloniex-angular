import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/NavBar/navbar.component'
import { ContainerComponent } from './components/Container/container.component'
import { WelcomeComponent } from './components/Welcome/welcome.component'
import { PoloniexComponent } from './components/ContentPolo/poloniex.component'
import { LocalBitcoinsComponent } from './components/ContentLocal/localbitcoins.component'
import { TableComponent } from './components/Table/table.component'


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'poloniex', component: PoloniexComponent },
  { path: 'localbitcoins', component: LocalBitcoinsComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }//,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, ContainerComponent, PoloniexComponent, LocalBitcoinsComponent, TableComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, JsonpModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent, NavBarComponent, ContainerComponent, PoloniexComponent, TableComponent, WelcomeComponent]
})
export class AppModule { }
