import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotFoundComponent implements OnInit {
  isServerError: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Simulating a server error condition
    this.checkServerError();
  }

  checkServerError() {
    // Logic to check if the error is due to a server issue
    // For demonstration, let's assume it's a server error if the HTTP status code is 500
    const httpStatusCode = 500; // Example status code
    this.isServerError = httpStatusCode === 500;
  }
}
