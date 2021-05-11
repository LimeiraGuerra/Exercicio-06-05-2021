import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../Person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
