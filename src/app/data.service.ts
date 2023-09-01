import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private orderURL = 'http://localhost:8080/api/v1/orders';
  private membershipURL = 'http://localhost:8080/api/v1/membership';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.orderURL}/get-orders`);
  }

  postOrders(orderData: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.orderURL}/create-order`, orderData);
  }

  doneOrder(orderID: number): Observable<number>{
    return this.http.put<number>(`${this.orderURL}/update-order/${orderID}`, orderID);
  }

  deleteOrder(orderID: number): Observable<number>{
    return this.http.delete<number>(`${this.orderURL}/delete-order/${orderID}`);
  }

  editOrder(orderID: number, orderData): Observable<number>{
    return this.http.put<number>(`${this.orderURL}/edit-order/${orderID}`, orderData);
  }

  getMembership(): Observable<any[]>{
    return this.http.get<any[]>(`${this.membershipURL}/get-membership`);
  }

  postMembership(membershipData): Observable<any[]>{
    return this.http.post<any[]>(`${this.membershipURL}/create-membership`, membershipData);
  }

  editMembership(membershipID: number, membershipData: any): Observable<number>{
    return this.http.put<number>(`${this.membershipURL}/update-membership/${membershipID}`, membershipData);
  }

  deleteMembership(membershipID: number): Observable<number>{
    return this.http.delete<number>(`${this.membershipURL}/delete-membership/${membershipID}`);
  }
}
