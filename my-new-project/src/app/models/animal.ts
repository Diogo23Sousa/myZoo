export class Animal {
    animalName: String;
    animalSpecie: String;
    animalAge: Number;
    animalImage: String;
    animalPrice: number;
    animalCreatedBy: String;
    animalDescription: String;

    constructor(animalName: String, animalSpecie: String, animalAge: Number, animalImage: String, animalPrice: number, animalCreatedBy: String, animalDescription: String) {
        this.animalName = animalName
        this.animalSpecie = animalSpecie;
        this.animalAge = animalAge;
        this.animalImage = animalImage;
        this.animalPrice = animalPrice;
        this.animalCreatedBy = animalCreatedBy;
        this.animalDescription = animalDescription;
    }
}
