import { Component, OnInit } from '@angular/core';
import { datavaild } from '../validation';


@Component({
  selector: 'app-formparent',
  templateUrl: './formparent.component.html',
  styleUrls: ['./formparent.component.css']
})
export class FormparentComponent implements OnInit {
  arr:datavaild[]= [];

  obj={}as datavaild;
  index=0
  
  
  addData(){

    if(this.obj.name.length <3 )alert('enter proper name')
    else if(this.obj.email.length < 10)alert('enter proper Email')
   else if(this.obj.address.length < 10)alert('please enter address')
   else if((this.obj.gender === "select gender") )alert('please select gender')

   else{ this.arr.push({
      id:this.index,
      name:this.obj.name,
      email:this.obj.email,
      address:this.obj.address,
      gender:this.obj.gender
    })
    this.index+=1
    
  }
  }
  constructor() { }

  ngOnInit() {
  }

}