import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car-service';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-updateserv',
  templateUrl: './updateserv.component.html',
  styleUrls: ['./updateserv.component.css']
})
export class UpdateservComponent implements OnInit {
  id:number;
  carserv: CarService = new CarService();
  constructor(private carServService : CarServiceService, private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carServService.getServiceById(this.id).subscribe(data =>{
      this.carserv = data;
    },
      error => console.log(error));
  }

  onSubmit(){
    this.carServService.updateCarService(this.id,this.carserv).subscribe(data =>{
      this.navTo();
    },error => console.log(error));
  }

  navTo(){
    this.router.navigate(["/carservice"])
  }
}
