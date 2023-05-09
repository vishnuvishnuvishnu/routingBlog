import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import * as d3 from "d3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-blog';
  inputName='';


  ngOnInit(){
    this.createRectangle()
  }

  createRectangle() {
    d3.select('svg')
    .append("rect")
    .attr("width","250")
    .attr("height","100")
    .attr("x","200")
    .attr("y","100")
    .attr('fill','violet')
  }

  transferAppData(name:any){
    this.inputName = name
  }
}
