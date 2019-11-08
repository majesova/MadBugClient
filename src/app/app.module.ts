import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component' 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';

import {HttpClientModule} from '@angular/common/http';
import { BuglistComponent } from './bugs/buglist/buglist.component';
import { AddbugComponent } from './bugs/addbug/addbug.component';
import { BugService } from './services/bug.service';
import { FromnowPipe } from './shared/fromnow.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    BuglistComponent,
    AddbugComponent,
    FromnowPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
