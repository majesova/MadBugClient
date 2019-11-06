import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';
import { BuglistComponent } from './bugs/buglist/buglist.component';
import { AddbugComponent } from './bugs/addbug/addbug.component';


const routes: Routes = [
  {path:'', component:DashboardComponent, canActivate:[AuthGuard], 
    children:[
    {path:'', component:WelcomeComponent, canActivate:[AuthGuard]},
    {path:'buglist', component:BuglistComponent, canActivate:[AuthGuard]},
    {path:'addbug', component:AddbugComponent, canActivate:[AuthGuard]}
  ]},
    
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
