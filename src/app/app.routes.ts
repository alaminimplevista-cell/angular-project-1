

import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    {path:'',redirectTo:'admin',pathMatch:'full'},
    // {path:'about/:id',component: AboutComponent}
    {path:'home',loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
    {path:'about/:id',loadComponent:()=>import('./about/about.component').then(m=>m.AboutComponent)},
    {path:'admin',loadComponent:()=>import('./admin/admin.component').then(m=>m.AdminComponent)},
];

