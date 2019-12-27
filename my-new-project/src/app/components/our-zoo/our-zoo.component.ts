import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-our-zoo',
  templateUrl: './our-zoo.component.html',
  styleUrls: ['./our-zoo.component.css']
})
export class OurZooComponent implements OnInit {
animals: Animal [];
searchTextInput : String;
priceInput : String;
searchFilter : String = "animalName"

  constructor(private animalService: AnimalService) { }

ngOnInit() {
    this.getAllAnimals();
}

getAllAnimals () {
    this.animalService.findAll().subscribe(allAnimals => {
      this.animals = allAnimals;      
  })
}

getAnimalsByAscendingPrice() {
  this.animals.sort((a,b) => a.animalPrice - b.animalPrice);
}

getAnimalsByDescendingPrice() {
  this.animals.sort((a,b) => b.animalPrice - a.animalPrice);
}

searchTextInputUsingFilter(){
  if (this.searchTextInput === "" || this.searchTextInput === undefined) {
    this.getAllAnimals();
  }
  else {
    if (this.searchFilter === "animalName") {
      this.animalService.findByLetter(this.searchTextInput).subscribe(animalsWithLetter => {
        this.animals = animalsWithLetter;
      })
    }
    if (this.searchFilter === "animalSpecie") {
      this.animalService.findSpecieByLetter(this.searchTextInput).subscribe(speciesWithLetter => {
        this.animals = speciesWithLetter;
      })
    }
    if (this.searchFilter === "animalAge") {
      this.animalService.findAgeByNumber(this.searchTextInput).subscribe(ageWithNumber => {
        this.animals = ageWithNumber;
      })
    }
    if (this.searchFilter === "animalSeller") {
      this.animalService.findByUserLetter(this.searchTextInput).subscribe(animalsOfTheUser => {
        this.animals = animalsOfTheUser;
      })
    }
  }

}
}
