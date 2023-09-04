import { Component, OnInit } from '@angular/core';
import { Order } from "../../shared/models/order";
import { OrdersService } from "../orders.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
    orders: Order[] = [];

    constructor(private orderService: OrdersService, public router: Router) {
    }

    ngOnInit(): void {
        this.getAllOrders();
    }

    getAllOrders(){
        this.orderService.getAllOrders().subscribe({
            next: orders => {
                this.orders = orders;
            }
        })
    }

}
