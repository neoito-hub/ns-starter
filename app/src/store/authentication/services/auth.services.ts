import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  confirmationResult;
  constructor() {}
  signin() {
    return { user: 'sss' };
  }
}
