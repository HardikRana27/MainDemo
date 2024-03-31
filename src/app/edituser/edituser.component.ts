import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  userdata: any; // Define userdata property to hold user data
  msg: string = ''; // Initialize message property

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
    this.userdata = {
      Fname: '', // Initialize user data properties
      lname: '',
      userage: null,
      gender: '',
      userphone: '',
      uemail: '',
      userpass: '',
      pack: '',
      level: '',
      isbath: false,
      isdietplan: false,
      istrain: false,
    };
  }

  editUser(form: NgForm): void {
    // Logic to handle user edit submission
    // This method should be implemented according to your application's requirements
  }
}
