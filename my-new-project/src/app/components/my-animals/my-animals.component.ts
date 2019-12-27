import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-my-animals',
  templateUrl: './my-animals.component.html',
  styleUrls: ['./my-animals.component.css']
})
export class MyAnimalsComponent implements OnInit {
  animals: Animal [];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
   this.getAllUserAnimals();
  }

  getAllUserAnimals () {
    this.animalService.findByUser(sessionStorage.getItem("username")).subscribe(userAnimals => {
      this.animals = userAnimals;  
  })
}
}
