import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private api: string = 'https://localhost:44311/api/v1';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
  };

  constructor(private httpClient: HttpClient) {
  }
  public TestGet():Observable<User[]>{
    var ret =this.httpClient.get<User[]>(`${this.api}/user`,this.httpOptions);
    console.log(`testGet(): val ret=${ret}`);
    return ret;
  }
}
