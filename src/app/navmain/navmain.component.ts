import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navmain',
  templateUrl: './navmain.component.html',
  styleUrls: ['./navmain.component.css'],
})
@Injectable()
export class NavmainComponent implements OnInit {
  name!: string;

  constructor(
    public userSer: UsersService,
    public activeRoute: ActivatedRoute,
    public myRouter: Router
  ) {}

  ngOnInit(): void {}
  doLogout() {
    localStorage.clear();
    this.myRouter.navigateByUrl('/');
  }

  isLoggedIn(): boolean {
    // Assuming you have some way to check if there's a user session or token available
    // Here, we're using localStorage to check if a user token exists
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists, otherwise false
  }
}
