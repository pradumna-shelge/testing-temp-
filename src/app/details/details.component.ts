import { Component, Input } from '@angular/core';
import { datavaild } from '../validation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
@Input() ob:datavaild={}as datavaild
}
