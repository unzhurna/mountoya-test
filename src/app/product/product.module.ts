import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
    DataTablesModule,
  ],
  exports: []

})
export class ProductModule { }
