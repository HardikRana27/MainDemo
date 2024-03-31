import { Component, OnInit } from '@angular/core';
import { PackService } from '../pack.service'; // Import the service if needed

@Component({
  selector: 'app-mempackages',
  templateUrl: './mempackages.component.html',
  styleUrls: ['./mempackages.component.css'],
})
export class MempackagesComponent implements OnInit {
  useriid: any; // Property to store the user ID
  pac: any; // Property to store package-related data

  constructor(private packService: PackService) {
    // Assign the injected service to a property
    this.pac = packService;

    // Initialize user ID from local storage
    this.useriid = localStorage.getItem('loggeduser');
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Define any other methods or logic required by the component
}
