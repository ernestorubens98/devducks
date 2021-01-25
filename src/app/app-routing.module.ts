import { UpdateComponent } from './vincula-arquiteto/update/update.component';
import { CreateComponent } from './vincula-arquiteto/create/create.component';
import { DeleteComponent } from './vincula-arquiteto/delete/delete.component';
import { ReadComponent } from './vincula-arquiteto/read/read.component';
import { HomeComponent } from './template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "vincula-arquiteto",
    component: ReadComponent
  },
  {
    path: "vincula-arquiteto/create",
    component: CreateComponent
  },
  {
    path: "vincula-arquiteto/update/:id",
    component: UpdateComponent
  },
  {
    path: "vincula-arquiteto/delete/:id",
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
