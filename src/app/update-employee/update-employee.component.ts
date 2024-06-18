import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private empService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  employee: Employee = new Employee;
  id!: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.empService.getEmployeeByID(this.id).subscribe(data => {
      this.employee = data;
    },
      error => console.log(error));
  }
  onSubmit() {
    this.empService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToListEmployee();
    },
      error => console.log(error));


  }
  goToListEmployee() {
    this.router.navigate(['/employees']);
  }



}

