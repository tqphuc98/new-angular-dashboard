import { DataTableComponent } from './data-table/data-table.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AuthGuard } from './login/auth-guard';


const routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'dashboard', component: MainNavComponent, canActivate: [AuthGuard], 
  children: [{path:'home', component: DataTableComponent},
            {path:'add', component: AddstudentsComponent}
]},
{path:'', redirectTo:'/login', pathMatch:'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
