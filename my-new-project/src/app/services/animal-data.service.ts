import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalDataService {
  animalToUpdateId: number;

  constructor() { }

  public sendAnimalId (animalToUpdateId : number) {
  this.animalToUpdateId = animalToUpdateId;
  }

  public getAnimalId(){
  return this.animalToUpdateId;
  }
}
