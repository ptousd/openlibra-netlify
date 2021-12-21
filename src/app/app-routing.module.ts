import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'newest',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home/:id/:name',
    component: HomeComponent,
  },
  {
    path: 'book/:id',
    component: BookDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
