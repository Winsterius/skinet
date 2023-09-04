import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order, OrderItem } from "../shared/models/order";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) {
    }


    getAllOrders(){
        return this.http.get<Order[]>(this.baseUrl + 'orders');
    }

    getOrderById(id: number){
        return this.http.get<Order>(this.baseUrl + 'orders/' + id)
    }
}
