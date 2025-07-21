import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './products/products';
import { Contact } from './contact/contact';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch: 'full'
  },
  {
    path:'products',
    component: Products
  },
  {
    path:'contact',
    component: Contact
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
