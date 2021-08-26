import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addserv } from '../addserv';
import { CarService } from '../car-service';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

  carserv: CarService = new CarService();
  constructor(private car:CarServiceService,private router:Router) { }

  ngOnInit(): void {

  }

  saveService(){
    return this.car.addCarService(this.carserv).subscribe(data =>{
      console.log(data)
      this.navTo();
    },
      error => console.log(error));
  }
  navTo(){
    this.router.navigate(["/carservice"])
  }
  onSubmit(){
    console.log(this.carserv);
    this.saveService();
  }
}
