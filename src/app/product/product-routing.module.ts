import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: ListComponent},
    {path: 'products/create', component: CreateComponent, canActivate: [AuthGuard]},
    {path: 'products/:id', component: DetailComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
