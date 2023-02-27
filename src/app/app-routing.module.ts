import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'introduccion',
    loadChildren: () =>
      import('./page/introduccion/introduccion.module').then(
        (m) => m.IntroduccionPageModule
      ),
  },
  {
    path: 'penitencial',
    loadChildren: () =>
      import('./page/penitencial/penitencial.module').then(
        (m) => m.PenitencialPageModule
      ),
  },
  {
    path: 'interleccional',
    loadChildren: () =>
      import('./page/interleccional/interleccional.module').then(
        (m) => m.InterleccionalPageModule
      ),
  },
  {
    path: 'ofrendas',
    loadChildren: () =>
      import('./page/ofrendas/ofrendas.module').then(
        (m) => m.OfrendasPageModule
      ),
  },

  {
    path: 'final',
    loadChildren: () =>
      import('./page/final/final.module').then((m) => m.FinalPageModule),
  },

  {
    path: 'santo',
    loadChildren: () =>
      import('./page/santo/santo.module').then((m) => m.SantoPageModule),
  },
  {
    path: 'cordero-dios',
    loadChildren: () =>
      import('./page/cordero-dios/cordero-dios.module').then(
        (m) => m.CorderoDiosPageModule
      ),
  },
  {
    path: 'cantodecomunion',
    loadChildren: () =>
      import('./page/cantodecomunion/cantodecomunion.module').then(
        (m) => m.CantodecomunionPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
