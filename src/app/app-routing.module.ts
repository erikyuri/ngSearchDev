import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home-routing.module').then(module => module.HomeRoutingModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./profile/profile-routing.module').then(module => module.ProfileRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
