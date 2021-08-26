import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addserv } from './addserv';
import { CarService } from './car-service';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  private baseURL = "http://localhost:8080/service/v";

  constructor(private httpClient: HttpClient) { }

  getServicelist(): Observable<CarService[]>{
    return this.httpClient.get<CarService[]>(`${this.baseURL}`);
  }

  addCarService(carservice:CarService): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,carservice);
  }

  getServiceById(id:number): Observable<CarService>{
    return this.httpClient.get<CarService>(`${this.baseURL}/${id}`);
  }

  updateCarService(id:number, carservice:CarService): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,carservice);
  }

  deleteService(id:number): Observable<CarService>{
    return this.httpClient.delete<CarService>(`${this.baseURL}/${id}`);
  }
}
