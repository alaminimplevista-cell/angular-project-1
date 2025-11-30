import { AboutComponent } from './component/about/about.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'about/:id',component: AboutComponent}
    // {path:'home',loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
    // {path:'about/:id',loadComponent:()=>import('./component/about/about.component').then(m=>m.AboutComponent)}
];

