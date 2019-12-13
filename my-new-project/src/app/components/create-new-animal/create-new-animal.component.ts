import { Component, OnInit, Input, Injectable, OnDestroy } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-create-new-animal-component',
  templateUrl: './create-new-animal.component.html',
  styleUrls: ['./create-new-animal.component.css'],
  providers: [AnimalService]
})
@Injectable()
export class CreateNewAnimalComponent implements OnInit {

animalName: String;
animalSpecie: String;
animalAge: number;
missingParameters : String = 'none';
missingNumberParameters: String = 'none';
animalCreatedSucess: String = 'none';

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
  }

  ngModelValidation () {
    if (this.animalName == '') {this.animalName = null};
    if (this.animalSpecie == '') {this.animalSpecie = null};
    if (isNaN(this.animalAge)) {this.animalAge = null};
    if (this.animalName == null || this.animalSpecie == null || this.animalAge == null) {
      this.missingParameters = ''; 
      this.animalCreatedSucess = 'none';}
    if (this.animalAge != null && isNaN(this.animalAge)) {this.missingNumberParameters = '';
    this.animalCreatedSucess = 'none';}
  }


  createNewAnimal(){
    this.ngModelValidation();
    if (this.animalName != null && this.animalSpecie != null && this.animalAge != null && !isNaN(this.animalAge)){
      var animal = new Animal(this.animalName, this.animalSpecie, this.animalAge);
      this.animalService.newAnimal(animal).subscribe(x => console.log(x));
      this.missingNumberParameters = 'none';
      this.missingParameters = 'none';
      this.animalCreatedSucess = '';
    }
  }
  }
