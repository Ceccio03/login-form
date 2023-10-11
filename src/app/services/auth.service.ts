import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  savePassword(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  checkUser(userName: string, password: string): boolean {
    if (localStorage.getItem('user')) {
      const userString = localStorage.getItem('user');
      const user = JSON.parse(userString!);
      const isUsernameValid = userName === user.userName;
      const isPasswordValid = password === user.password;
      const isLoginValid = isUsernameValid && isPasswordValid;

      if (isLoginValid) {
        return {valid: true, message: 'viva!!!'};
      } else {
        return {valid: false, message: isUsernameValid ? 'Hai sbagliato la psw' : 'Hai sbagliato l\'username'};
      }
    } else {
      return {valid: false, message: 'non ti sei registrato'};
    }
  }

  saveLogin() {
    localStorage.setItem('isLogged', JSON.stringify(true));
  }

  checkLogin() {
    if (localStorage.getItem('isLogged')) {
      const isLogged = localStorage.getItem('isLogged');

      if (isLogged === 'true') {
        
      } else {
        
      }
    } else {
      
    }
  }
}