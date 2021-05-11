import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  person: Person;

  @Input() toggleForm: boolean;
  @Output() closeForm = new EventEmitter<boolean>();

  constructor(private database: PersonService) { }

  initPerson() {
    this.person = {
      name: "",
      age: 0,
      img: ""
    }
  }

  addNew() {
    let result = this.database.addPerson(this.person);
    if (result) {
      this.closeForm.emit(false);
      this.initPerson();
      alert("Cadastro realizado com sucesso!");
    }
    else {
      alert("Nome informado inválido");
    }
  }

  ngOnInit(): void {
    this.initPerson();
  }

}
