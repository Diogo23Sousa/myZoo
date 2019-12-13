package com.example.demo.models;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.io.Serializable;


@Entity
public class Animal implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String animalName;
    private String animalSpecie;
    private Long animalAge;

    public Animal() {
    }

    public Animal(String animalName, String animalSpecie, Long animalAge) {
        this.animalName = animalName;
        this.animalSpecie = animalSpecie;
        this.animalAge = animalAge;
    }

    public Animal(Long id, String animalName, String animalSpecie, Long animalAge) {
        this.id = id;
        this.animalName = animalName;
        this.animalSpecie = animalSpecie;
        this.animalAge = animalAge;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAnimalName() {
        return animalName;
    }

    public void setAnimalName(String animalName) {
        this.animalName = animalName;
    }

    public String getAnimalSpecie() {
        return animalSpecie;
    }

    public void setAnimalSpecie(String animalSpecie) {
        this.animalSpecie = animalSpecie;
    }

    public Long getAnimalAge() {
        return animalAge;
    }

    public void setAnimalAge(Long animalAge) {
        this.animalAge = animalAge;
    }
}
