import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AccountService } from "../account/account.service";
import { Address } from "../shared/models/user";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

    constructor(private fb: FormBuilder, private accountService: AccountService) {
    }

    checkoutForm = this.fb.group({
        addressForm: this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            street: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipcode: ['', Validators.required],
        }),
        deliveryForm: this.fb.group({
            deliveryMethod: ['', Validators.required],
        }),
        paymentFrom: this.fb.group({
            nameOnCard: ['', Validators.required],
        })
    })

    ngOnInit(): void {
        this.getAddressFormFromValues()
    }


    getAddressFormFromValues(){
        this.accountService.getUserAddress().subscribe({
            next: address => {
                address && this.checkoutForm?.patchValue( {
                    addressForm: address
                } )
            }
        })
    }
}
