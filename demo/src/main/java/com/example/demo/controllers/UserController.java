package com.example.demo.controllers;

import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    public UserRepository userRepository;

    @GetMapping("/hello")
    public String printTest () {
        return "THE METHOD WAS CALLED!";
    }

    @GetMapping("/user/getall")
    public List<User> findAll () {
        return userRepository.findAll();
    }

    @GetMapping("/user/get/{id}")
    public User findById(@PathVariable ("id") Long id){
        return userRepository.findById(id).get();
    }

    @GetMapping("/user/getbyname/{name}")
    public Optional<List<User>> findByName(@PathVariable ("name") String name){
        return userRepository.findByName(name);
    }

    @GetMapping("/user/getbyletter/{letter}")
    public Optional<List<User>> findByLetter(@PathVariable ("letter") String letter){
        return userRepository.findByContainsLetter(letter);
    }

    @GetMapping("/user/getbyage/{age}")
    public Optional<List<User>> findByName(@PathVariable ("age") Long age){
        return userRepository.findByAge(age);
    }

    @GetMapping("/user/getbynumber/{number}")
    public Optional<List<User>> findByNumber(@PathVariable ("number") Long number){
        return userRepository.findByContainsNumber(number);
    }

    @GetMapping("/user/getbyemail/{email}")
    public Optional<List<User>> findByEmail(@PathVariable ("email") String email){
        return userRepository.findByEmail(email);
    }

    @GetMapping("/user/getemailbyletter/{letter}")
    public Optional<List<User>> findByEmailLetter(@PathVariable ("letter") String letter){
        return userRepository.findByEmailContainsLetter(letter);
    }

    @PostMapping("user/generate")
    public void generateUsers() {
        userRepository.save(new User("Diogo", "test", "diogo@email.com", (long)26, "ADMIN"));
        userRepository.save(new User("Eduardo","test", "eduardo@email.com", (long)27, "USER"));
        userRepository.save(new User("Rafaela", "test","rafaela@email.com", (long)21, "USER"));
        userRepository.save(new User("Luisa", "test", "luisa@email.com", (long)50, "USER"));
        userRepository.save(new User("Luis","test", "luis@email.com", (long)55, "USER"));
    }

    @PostMapping("/user/create")
    public void createUser(@RequestBody User newUser) {
        userRepository.save(newUser);
    }

    @DeleteMapping("/user/deleteall")
    public void deleteAll () {
        userRepository.deleteAll();
    }

    @DeleteMapping("/user/delete/{id}")
    public void deleteById (@PathVariable Long id) {
        userRepository.deleteById(id);
    }

}
