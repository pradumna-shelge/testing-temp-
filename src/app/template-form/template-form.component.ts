import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
getData(fd:NgForm){
  let d= fd.control.value
  let name = d.email;
  let pass = d.password
console.log(name+""+pass);

}
}
