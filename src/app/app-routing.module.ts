import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./core/pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {
    path: '',
    loadChildren: () => import('../app/routing/aitarget-routing.module').then(m => m.AiTargetRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
