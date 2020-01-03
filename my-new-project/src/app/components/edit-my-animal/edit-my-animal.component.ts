import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animal';
import { Subscription } from 'rxjs';
import { parse } from 'querystring';
import { AnimalDataService } from 'src/app/services/animal-data.service';

@Component({
  selector: 'app-edit-my-animal',
  templateUrl: './edit-my-animal.component.html',
  styleUrls: ['./edit-my-animal.component.css']
})

@Injectable()
export class EditMyAnimalComponent implements OnInit {
animalName: String;
animalSpecie: String;
animalAge: number;
animalImage: String;
animalPrice: number;
animalDescription: String;
missingParameters : String = 'none';
missingNumberParameters: String = 'none';
animalCreatedSucess: String = 'none';

  constructor(private animalService: AnimalService, private animalDataService: AnimalDataService) {
  }

  ngOnInit() {
    this.animalService.findById(this.animalDataService.getAnimalId()).subscribe(getAnimalById => {
      this.animalName = getAnimalById.animalName;
      this.animalSpecie = getAnimalById.animalSpecie;
      this.animalAge = getAnimalById.animalAge;
      this.animalDescription = getAnimalById.animalDescription;
      this.animalPrice = getAnimalById.animalPrice;
      this.animalImage = getAnimalById.animalImage;
    })
  }
  

  // This is a method that validates all the inputs needed for createNewAnimal()
  ngModelValidation () {
    // If any parameter is empty it's considered null.
    if (this.animalName == '') {this.animalName = null};
    if (this.animalSpecie == '') {this.animalSpecie = null};
    // If any parameter is null thens we tell in the UI that 'ONE OR MORE PARAMETERS IS MISSING' (this.missingParameters => show())
    if (this.animalName == null || this.animalSpecie == null || this.animalAge == null) {
      this.missingParameters = '';
      this.missingNumberParameters = this.animalCreatedSucess = 'none';
    }
    // If the user doesn't provide a Number for the animalAge Parameter (this.missingNumberParameters => show())
    if (isNaN((this.animalAge))) {
     this.animalAge = null;
       this.missingNumberParameters = '';
       this.animalCreatedSucess = 'none';
     }
     // If the user doesn't provide a Number for the animalPrice Parameter (this.missingNumberParameters => show())
     if (isNaN(this.animalPrice)) {
      this.animalPrice = null;
      this.missingNumberParameters = '';
      this.animalCreatedSucess = 'none';
    }
    // If the user doesn't provide animalDescription or animalImage the system provides both by default
    if (this.animalDescription == null || this.animalDescription == '') {
      this.animalDescription = "No Description is available for this animal.";
    }
    if (this.animalImage == null || this.animalImage == '') {
      this.animalImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKHDuxy1qrI0duPY4vRpy5aJZniYuq7SHGthof-SzT38CVexCcw&s";
    }
  }

  updateMyAnimal() {
    this.ngModelValidation();
    // If the User provides the correct parameters then a New Animal is created.
    if (this.animalName != null && this.animalSpecie != null && !isNaN(this.animalPrice) && this.animalAge !== null && this.animalPrice !== null){
      this.animalService.newAnimal(new Animal(this.animalDataService.getAnimalId(), this.animalName, this.animalSpecie, this.animalAge, this.animalImage, this.animalPrice, sessionStorage.getItem('username'), this.animalDescription))
      .subscribe(x => console.log(x));
      this.missingNumberParameters = this.missingParameters = 'none';
      this.animalCreatedSucess = '';
      window.scrollTo(0, 0);

    }
  }
  }

