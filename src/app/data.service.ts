import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private apiUrl = 'http://localhost:8080/api/v1/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-orders`);
  }

  postOrders(orderData): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/create-order`, orderData);
  }

  doneOrder(orderID: number): Observable<number>{
    return this.http.put<number>(`${this.apiUrl}/update-order/${orderID}`, orderID);
  }

  deleteOrder(orderID: number): Observable<number>{
    return this.http.delete<number>(`${this.apiUrl}/delete-order/${orderID}`);
  }

  editOrder(orderID: number, orderData): Observable<number>{
    return this.http.put<number>(`${this.apiUrl}/edit-order/${orderID}`, orderData);
  }
}
