import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getName(user: object) {
    return user['name'];
  }

  getAge(user: object) {
    return user['age'];
  }
}
