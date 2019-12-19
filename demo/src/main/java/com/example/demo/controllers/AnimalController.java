package com.example.demo.controllers;

import com.example.demo.models.Animal;
import com.example.demo.repositories.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.io.File;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnimalController {

    @Autowired
    private AnimalRepository animalRepository;

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
        animalRepository.save(new Animal("Fera", "Cat", (long) 23, "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals, of the family Felidae. Domestic cats are often called house cats when kept as indoor pets. Cats have been domesticated (tamed) for nearly 10,000 years. They are one of the most popular pets in the world."));
        animalRepository.save(new Animal("Feroz", "Dog", (long) 1, "https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "Dogs (Canis lupus familiaris) are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. ... They are a popular pet because they are usually playful, friendly, loyal and listen to humans."));
        animalRepository.save(new Animal("Furioso", "Tiger", (long) 44, "https://images.pexels.com/photos/46251/sumatran-tiger-tiger-big-cat-stripes-46251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "The tiger (Panthera tigris) is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on orangish-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar."));
        animalRepository.save(new Animal("Furiosa", "Leopard", (long) 22, "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "Leopards are large cats, with light-colored fur, and black spots and rosettes across their entire body. The rosettes look somewhat like hollowed-out spots, and are smaller than those of the jaguar. Males of the species are larger than the females, and can stand up to 28 in."));
        animalRepository.save(new Animal("Velocidade", "Cheetah", (long) 9, "https://images.pexels.com/photos/88234/pexels-photo-88234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "These cats are lean and lanky, allowing them to reach incredible speeds. They have tan-colored fur with solid black, round spots. They have very long legs, a long narrow tail for balance, and a deep chest that contains large lungs."));
        animalRepository.save(new Animal("Max", "Elephant", (long) 48, "https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "Elephant, (family Elephantidae), largest living land animal, characterized by its long trunk (elongated upper lip and nose), columnar legs, and huge head with temporal glands and wide, flat ears."));
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
