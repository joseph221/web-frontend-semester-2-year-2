import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car-service';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  carServices:CarService[]

  constructor(private carServService : CarServiceService,
    private router:Router ) { 
    
  }
  private getCarServ(){
    this.carServService.getServicelist().subscribe( k => {this.carServices = k});
  }

  ngOnInit(): void {
   this.getCarServ();
  }
  
  updateservice(id:number){
    this.router.navigate(['updateserv',id]);
  }

  deleteservice(id:number){
    this.carServService.deleteService(id).subscribe(data =>{
      console.log(data)
      this.getCarServ();
    })
  }
  
}
