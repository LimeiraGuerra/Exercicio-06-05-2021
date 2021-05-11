import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectedPerson: Person;
  personList: Person[];
  showAddForm: boolean = true;

  constructor(private database: PersonService) { }

  showPerson(person: Person):void {
    this.showAddForm = false;
    this.selectedPerson = person;
  }

  getList(): void {
    this.personList = this.database.getAllPersons();
  }

  toggleForm(toggle: boolean): void {
    this.selectedPerson = null;
    this.showAddForm = toggle;
    this.getList();

  }

  ngOnInit(): void {
    this.getList();
  }
}
