import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private empService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.employee);
    this.saveEmp()
  }
  saveEmp() {
      this.empService.createEmployee(this.employee).subscribe(emp=>{
      console.log(emp);  
      this.goToListEmployee();    
    },
     error=>console.log(error));
     
  }
  goToListEmployee(){
    this.router.navigate(['/employees']);
  }

}
