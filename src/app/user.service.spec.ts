import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ユーザネームが返ってくるかてすと', () => {
    const user = {
      name: 'Satou',
      age: 18
    };
    expect(service.getName(user)).toBe('Satou');
  });

  it('ユーザの年齢が返ってくるかテスト', () => {
    const user = {
      name: 'Satou',
      age: 18
    };
    expect(service.getAge(user)).toBe(18);
  });
});
