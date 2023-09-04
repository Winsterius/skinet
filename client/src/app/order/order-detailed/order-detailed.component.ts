import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order } from "../../shared/models/order";
import { OrdersService } from "../orders.service";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbService } from "xng-breadcrumb";

@Component({
  selector: 'app-orders-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit{

    order?: Order;

    constructor(private orderService: OrdersService, private activatedRoute: ActivatedRoute,
                private bcService: BreadcrumbService) {
        this.bcService.set('@orderDetails', ' ');
    }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if(id) this.getOrderById(+id);
    }

    getOrderById(id: number){
        this.orderService.getOrderById(id).subscribe({
            next: order => {
                this.order = order;
                let orderDescription = 'Order# '+ order.id + ' - ' + order.status;
                this.bcService.set('@orderDetails', orderDescription)
            }
        })
    }

}
