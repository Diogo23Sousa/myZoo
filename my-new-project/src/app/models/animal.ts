export class Animal {
    id: number;
    animalName: String;
    animalSpecie: String;
    animalAge: number;
    animalImage: String;
    animalPrice: number;
    animalCreatedBy: String;
    animalDescription: String;

    constructor(id: number, animalName: String, animalSpecie: String, animalAge: number, animalImage: String, animalPrice: number, animalCreatedBy: String, animalDescription: String) {
        this.id = id;
        this.animalName = animalName;
        this.animalSpecie = animalSpecie;
        this.animalAge = animalAge;
        this.animalImage = animalImage;
        this.animalPrice = animalPrice;
        this.animalCreatedBy = animalCreatedBy;
        this.animalDescription = animalDescription;
    }
}
