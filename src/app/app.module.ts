import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { MainContentComponent } from './landingpage/main-content/main-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './landingpage/home/home.component';
import { AboutComponent } from './landingpage/about/about.component';
import { ServicesComponent } from './landingpage/services/services.component';
import { ContactComponent } from './landingpage/contact/contact.component';
import { TakeorderComponent } from './crud/takeorder/takeorder.component';
import { LandingcontainerComponent } from './landingpage/landingcontainer/landingcontainer.component';
import { DashboardcontainerComponent } from './crud/dashboardcontainer/dashboardcontainer.component';
import { DashboardSidebarComponent } from './crud/dashboard-sidebar/dashboard-sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MembershipComponent } from './crud/membership/membership.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TakeorderComponent,
    LandingcontainerComponent,
    DashboardcontainerComponent,
    DashboardSidebarComponent,
    MembershipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
