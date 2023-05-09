import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../services/master-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private service:MasterServiceService) { }

  postData:any;

  ngOnInit(): void {
  }

  getIt(){

   this.service.getPost().subscribe((result:any)=>{
    console.log("result",result)
   });
   
  }

}
