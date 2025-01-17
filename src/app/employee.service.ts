import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {
 
  private baseUrl="http://localhost:8080/api/v1/employees";
  constructor(private httpClient:HttpClient) {

   }
   getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
   }
   createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
   }
   getEmployeeByID(id:number): Observable<Employee>{
     return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
   }

   updateEmployee(id:number,employee:Employee):Observable<Employee>{
     return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`,employee);
   }
   deleteEmpById(id:number):Observable<Object>{
     return this.httpClient.delete(`${this.baseUrl}/${id}`);
   }
}
