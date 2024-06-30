import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { NotfoundComponent } from './component/notfound/notfound.component';



export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, title: 'sing-in' },
    { path: 'regiter', component: RegisterComponent, title: 'sing-up' },
    {
      path: 'profil/:id',
      component: DashboardComponent,
      title: 'profil',
    },
    { path: 'contactus', component: ContactusComponent, title: 'Contact Us' },
    { path: '**', component: NotfoundComponent, title: 'Not found 404' },
  ];
  