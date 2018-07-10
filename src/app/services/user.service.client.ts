import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { map } from "rxjs/operators";
import {Http, Response, RequestOptions} from '@angular/http';
import { environment } from '../../environments/environment'
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService) { }

  register(username: String, password: String) {
    // this communication will be secured
    this.options.withCredentials = true;
    const user = {
     username : username,
     password : password
    };
    return this.http.post(this.baseUrl + '/api/register', user, this.options).pipe(map(
      (res: Response) => {
        const data = res.json();
        return data;
      }  
    ));
  }

  login(username: String, password: String) {
    this.options.withCredentials = true; 
    const user = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', user, this.options).pipe(map(
     (res: Response) => {
       return res.json();
     }
   ));
  }


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
