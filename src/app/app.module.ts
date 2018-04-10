import { DetailsComponent } from './home/main/hotel/details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './home/filter/filter.component';
import { MainComponent } from './home/main/main.component';
import { HotelComponent } from './home/main/hotel/hotel.component';
import { DateComponent } from './home/date/date.component';
import { CoreModule } from '../core/core.module';
import { SlideComponent } from './slide/slide.component';
import { LoginComponent } from './login/login.component';
import { MainFirstpageComponent } from './firstpage/main-firstpage/main-firstpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    FilterComponent,
    MainComponent,
    HotelComponent,
    DateComponent,
    SlideComponent,
    LoginComponent,
    MainFirstpageComponent,
    PageNotFoundComponent,
    DetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
