import { Component, Input, OnInit } from '@angular/core';
import { datavaild } from '../validation';

@Component({
  selector: 'app-childdetail',
  templateUrl: './childdetail.component.html',
  styleUrls: ['./childdetail.component.css']
})
export class ChilddetailComponent implements OnInit {
@Input() item:datavaild[]=[]
obj={}as datavaild
i=0;
get(ob:datavaild){
  this.obj=ob
  this.i=1;
}
constructor() { }

  ngOnInit() {
  }

}