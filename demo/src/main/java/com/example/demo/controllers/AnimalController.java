package com.example.demo.controllers;

import com.example.demo.models.Animal;
import com.example.demo.repositories.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnimalController {

    @Autowired
    private AnimalRepository animalRepository;

    @GetMapping("/servertest")
    public String home(){
    return "MY TOMCAT SERVER IS RUNNING";
    }

    @GetMapping("/animal/getall")
    public List<Animal> findAll () {
        return animalRepository.findAll();
    }

    @GetMapping("/animal/get/{id}")
    public Optional<Animal> findById(@PathVariable ("id") Long id){
        return animalRepository.findById(id);
    }

    @GetMapping("/animal/getbyname/{name}")
    public Optional<List<Animal>> findByName(@PathVariable ("name") String name){
        return animalRepository.findByName(name);
    }

    @GetMapping("/animal/getbyletter/{letter}")
    public Optional<List<Animal>> findByLetter(@PathVariable ("letter") String letter){
        return animalRepository.findByContainsLetter(letter);
    }

    @GetMapping("/animal/getbyage/{age}")
    public Optional<List<Animal>> findByAge(@PathVariable ("age") Long age){
        return animalRepository.findByAge(age);
    }

    @GetMapping("/animal/getbynumber/{number}")
    public Optional<List<Animal>> findByNumber(@PathVariable ("number") Long number){
        return animalRepository.findByContainsNumber(number);
    }

    @GetMapping("/animal/getbyspecie/{specie}")
    public Optional<List<Animal>> findBySpecie(@PathVariable ("specie") String specie){
        return animalRepository.findBySpecie(specie);
    }

    @GetMapping("/animal/getspeciebyletter/{letter}")
    public Optional<List<Animal>> findBySpecieLetter(@PathVariable ("letter") String letter){
        return animalRepository.findBySpecieContainsLetter(letter);
    }

    @PostMapping("/animal/generate")
    public void generateAnimals() {
        animalRepository.save(new Animal("Fera", "Cat", (long) 23));
        animalRepository.save(new Animal("Feroz", "Cão", (long) 25));
        animalRepository.save(new Animal("Furioso", "Tigre", (long) 66));
        animalRepository.save(new Animal("Furiosa", "Tigre", (long) 43));
        animalRepository.save(new Animal("Velocidade", "Chita", (long) 23));
        animalRepository.save(new Animal("Max", "Cão", (long) 23));
    }

    @PostMapping("/animal/create")
    public Animal createAnimal(@RequestBody Animal newAnimal) {
        return animalRepository.save(newAnimal);
    }

    @DeleteMapping("/animal/deleteall")
    public void deleteAll () {
        animalRepository.deleteAll();
    }

    @DeleteMapping("/animal/delete/{id}")
    public void deleteById (@PathVariable ("id") Long id) {
        animalRepository.deleteById(id);
    }
}
