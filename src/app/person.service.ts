import { Injectable } from '@angular/core';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personList: Person[];

  constructor() { 
    this.personList = [];
  }

  getAllPersons(): Person[]{
    return this.personList;
  }

  addPerson(person: Person): boolean{
    person.name = person.name.trim();
    if(person.name === "" || this.personList.find(p => p.name === person.name)){
      return false
    }
    person.img = person.img.trim();
    if (person.img === "") {
      person.img = "https://thispersondoesnotexist.com/image?dummy="+Math.random();
    }
    this.personList.push(person);
    return true;
  }
}
