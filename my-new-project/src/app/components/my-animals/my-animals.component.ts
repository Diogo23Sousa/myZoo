import { Component, OnInit, Output } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animal';
import { RouterEvent, RouterLink, Router } from '@angular/router';
import { AnimalDataService } from 'src/app/services/animal-data.service';

@Component({
  selector: 'app-my-animals',
  templateUrl: './my-animals.component.html',
  styleUrls: ['./my-animals.component.css']
})
export class MyAnimalsComponent implements OnInit {
  animals: Animal [];

  constructor(private animalService: AnimalService, private animalDataService: AnimalDataService, private router: Router) { }

  ngOnInit() {
   this.getAllUserAnimals();
  }

  getAllUserAnimals () {
    this.animalService.findByUser(sessionStorage.getItem("username")).subscribe(userAnimals => {
      this.animals = userAnimals;
  })
}

animalToBeUpdated(animalId: number) {
    this.animalDataService.sendAnimalId(animalId);
    this.router.navigate(['/editmyanimal']);
  }
  }
