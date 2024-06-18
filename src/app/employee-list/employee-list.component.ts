import { Component, Inject, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emps! :Employee[];
  
  constructor(private employeeService:EmployeeService,private router:Router){ 

  }
  ngOnInit(): void {
    this.getEmplsData();
  
}
private getEmplsData(){
  this.employeeService.getAllEmployee().subscribe(data=>{
    this.emps=data;
  });
 }
 updateEmployee(id:number){
  this.router.navigate(['/update-employee',id])

 }
 deleteEmployee(id:number){
this.employeeService.deleteEmpById(id).subscribe(data=>{
  console.log(data);
  this.getEmplsData();
},
error=>console.log(error));
 }
 employeeDetails(id:number){
  this.router.navigate(['/employee-details',id])
 }
}