import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }
  login(data:{name :String, password : String}){
    return this.http.post("http://localhost:8080/login",data)
  }
}
