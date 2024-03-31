import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  doLogout() {
    throw new Error('Method not implemented.');
  }
  packname!: string;
  userSer: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieving the package name from the route parameters
    this.route.params.subscribe((params) => {
      this.packname = params['packname'];
    });
  }
}
