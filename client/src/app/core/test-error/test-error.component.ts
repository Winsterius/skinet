import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-test-error',
    templateUrl: './test-error.component.html',
    styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
    baseUrt = environment.apiUrl;
    validationErrors: string[] = [];

    constructor(private http: HttpClient) {
    }

    get404Error() {
        this.http.get(this.baseUrt + 'products/-1').subscribe({
            next: response => console.log(response),
            error: error => console.log(error)
        });
    }

    get500Error() {
        this.http.get(this.baseUrt + 'buggy/server-error').subscribe({
            next: response => console.log(response),
            error: error => console.log(error)
        });
    }

    get400Error() {
        this.http.get(this.baseUrt + 'buggy/bad-request').subscribe({
            next: response => console.log(response),
            error: error => console.log(error)
        });
    }

    get400ValidationError() {
        this.http.get(this.baseUrt + 'products/fff').subscribe({
            next: response => console.log(response),
            error: error => {
                console.log(error)
                this.validationErrors = error.errors;
            }
        });
    }
}
