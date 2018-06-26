import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;
  

  constructor(private http: Http) { }

  createUser(user: User) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ))
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))
  }

  findUserByUsername(username: string) { 
  const url = this.baseUrl + '/api/user?username=' + username;

  return this.http.get(url).pipe(map(
    (response: Response) => {
      return response.json();
    }
  )) 
  }

  findUserByCredentials(username: string, password: string) { 
    const url = this.baseUrl + '/api/user?username='+username + '&password=' + password;
    return this.http.get(url).pipe(map(
        (response: Response) => {
          return response.json();
        }
      ))
  }

  updateUser(userId: string, user: User) { 

    const url = this.baseUrl + '/api/user/' + userId;

    return this.http.put(url, user).pipe(map(
       (response: Response) => {
         return response.json();
       }
    ))
  }

  deleteUser(userId: string) { 
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url).pipe(map(
       (response: Response) => {
         return response.json();
       }
    ))
  }
}
