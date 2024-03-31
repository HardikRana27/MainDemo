import { TestBed } from '@angular/core/testing';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let executeGuard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const adminGuard = TestBed.inject(AdminGuard);
    executeGuard = (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) => adminGuard.canActivate(route, state);
  });

  it('should be created', () => {
    const mockRoute = {} as ActivatedRouteSnapshot; // Create a mock ActivatedRouteSnapshot
    const mockState = {} as RouterStateSnapshot; // Create a mock RouterStateSnapshot
    expect(executeGuard(mockRoute, mockState)).toBeTruthy();
  });
});
