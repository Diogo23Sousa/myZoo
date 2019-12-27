import { Component, OnInit, Output, Injectable } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-our-animals',
  templateUrl: './our-animals.component.html',
  styleUrls: ['./our-animals.component.css'],
  providers: [AnimalService]
})
@Injectable()
export class OurAnimalsComponent implements OnInit {
  animals: Animal [];
  nameInput: String;
  specieInput: String;
  ageInput: String;
  userInput: String;
  priceInput: String;

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
    this.getAllAnimals();
    
  }

  getAllAnimals () {
    this.animalService.findAll().subscribe(allAnimals => {
      this.animals = allAnimals;
  })
}
  getAnimalByName () {
    this.animalService.findByName(this.nameInput).subscribe(animalsByName => {
      this.animals = animalsByName;
    })
  }
  getAnimalByLetter () {
    this.specieInput = this.ageInput =  this.userInput = this.priceInput = '';
    if (this.nameInput == '') {this.getAllAnimals()}
    else {
      this.animalService.findByLetter(this.nameInput).subscribe(animalsWithLetter => {
        this.animals = animalsWithLetter;
      })
    }
  }

  getAnimalBySpecieLetter () {
    this.nameInput = this.ageInput =  this.userInput = this.priceInput = '';
    if (this.specieInput == '') {this.getAllAnimals()}
    else {
      this.animalService.findSpecieByLetter(this.specieInput).subscribe(speciesWithLetter => {
        this.animals = speciesWithLetter;
      })
    }
  }

  getAnimalByAgeNumber () {
    this.nameInput = this.specieInput = this.userInput = this.priceInput = '';
    if (this.ageInput == '') {this.getAllAnimals()}
    else {
      this.animalService.findAgeByNumber(this.ageInput).subscribe(ageWithNumber => {
        this.animals = ageWithNumber;
      })
    }
  }

  getAnimalByUserLetter () {
    this.nameInput = this.specieInput = this.ageInput = this.priceInput = '';
    if (this.userInput == '') {this.getAllAnimals()}
    else {
      this.animalService.findByUserLetter(this.userInput).subscribe(animalsOfTheUser => {
        this.animals = animalsOfTheUser;
      })
    }
  }

  organizeAnimalPrices() {
    this.nameInput = this.specieInput = this.ageInput = this.userInput = '';
    if (this.priceInput === 'ascending') {
        this.animals.sort((a,b) => a.animalPrice - b.animalPrice);
      } else if (this.priceInput === 'descending') {      
      this.animals.sort((a,b) => b.animalPrice - a.animalPrice);
  } else {this.getAllAnimals()}  
}

  deleteAnimalById (number: Number) {
    this.animalService.deleteById(number).subscribe(x => console.log(x));
    location.reload();
  }
  
  deleteAllAnimals () {
    this.animalService.deleteAll().subscribe(x => console.log(x));
    location.reload();
  }

  generateNewAnimals () {
    this.animalService.generateAnimals('any').subscribe(x => console.log(x));
    location.reload();
}

  clearAnimalFilter () {
    this.nameInput = this.specieInput = this.ageInput = this.userInput =  '';
    this.getAllAnimals();
  }
}
