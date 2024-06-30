import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, title: 'sing-in' },
    { path: 'regiter', component: RegisterComponent, title: 'sing-up' },
    {
      path: 'profil/:id',
      component: DashboardComponent,
      title: 'profil',
    }
  ];
  