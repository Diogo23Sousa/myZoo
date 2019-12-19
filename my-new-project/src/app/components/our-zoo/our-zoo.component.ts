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

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAllAnimals();
  }

  getAllAnimals () {
    this.animalService.findAll().subscribe(allAnimals => {
      this.animals = allAnimals;      
  })
}
}
