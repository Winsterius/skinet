import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  exports: [
    ShopComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        PaginationModule,
        SharedModule
    ]
})
export class ShopModule { }
