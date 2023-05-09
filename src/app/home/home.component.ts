import { Component, Input, OnInit } from '@angular/core';
import { CurrencyconverterPipe } from '../pipes/currencyconverter.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  empForm = new FormGroup({
    name:new FormControl('',Validators.required),
    code:new FormControl()
  })

  rupee=123.43;
  inputData='';
  @Input() reciveData:any;

  ngOnInit(): void {
  }

  // transferData(name:any){
  //   console.log("name",name)
  // }

  saveEmp(){
    console.log("save data",this.empForm.valid)
  }

}
