import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MasterPageComponent} from '../core/pages/master-page/master-page.component';
import {MasterPageModule} from '../core/pages/master-page/master-page.module';

export const routes: Routes = [

  {
    path: '', component: MasterPageComponent,
    children: [
      {
        path: 'book-detail/:id',
        loadChildren: () => import('../core/components/book-detail/book-detail.module').then(m => m.BookDetailModule)
      },
      {path: 'new', loadChildren: () => import('../core/components/new-book/new-book.module').then(m => m.NewBookModule)}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MasterPageModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class AiTargetRoutingModule {
}
