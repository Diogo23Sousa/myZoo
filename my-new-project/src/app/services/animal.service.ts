import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
private animals : Animal [];
private animalUrl: string;
 
  constructor(private httpClient: HttpClient) {
    this.animalUrl =  'http://localhost:8080/animal';
  }
 
  public findAll() {
    return this.httpClient.get<Animal[]>(this.animalUrl.concat('/getall'));
  }

  public newAnimal (animal: Animal) {
    return this.httpClient.post<Animal>(this.animalUrl.concat('/create'), JSON.stringify(animal));
  } 

  public generateAnimals(body: String) {
    return this.httpClient.post(this.animalUrl.concat('/generate') , body);
  }

  public findByName(name: String) {
    return this.httpClient.get<Animal[]>(this.animalUrl.concat('/getbyname/' + name)); 
  }

  public findBySpecie(name: String) {
    return this.httpClient.get<Animal[]>(this.animalUrl.concat('/getbyspecie/' + name)); 
  }

  public findByAge(age: String) {
    return this.httpClient.get<Animal[]>(this.animalUrl.concat('/getbyage/' + age)); 
  }

  public findByLetter (letter: String) {
    return this.httpClient.get<Animal[]>(this.animalUrl.concat('/getbyletter/' + letter));
  }

  public findSpecieByLetter (letter: String) {
    return this.httpClient.get<Animal[]>(this.animalUrl.concat('/getspeciebyletter/' + letter));
  }

  public findAgeByNumber (number: String) {
    return this.httpClient.get<Animal[]>(this.animalUrl.concat('/getbynumber/' + number));
  }

  public deleteById (number: Number) {
  return this.httpClient.delete(this.animalUrl.concat('/delete/' + number));  
  }

  public deleteAll () {
    return this.httpClient.delete(this.animalUrl.concat('/deleteall'));
  }

  
}
