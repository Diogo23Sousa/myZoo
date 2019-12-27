package com.example.demo.repositories;

import com.example.demo.models.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    // Getting my animals by containing this char or words in name
    @Query(value = "SELECT * FROM animal WHERE animal.animal_name LIKE %:letter% ", nativeQuery = true)
    Optional<List<Animal>> findByContainsLetter (String letter);

    // Getting my animals by name
    @Query(value = "SELECT * FROM animal WHERE animal.animal_name = :name", nativeQuery = true)
    Optional<List<Animal>> findByName (String name);

    // Getting my animals by specie
    @Query(value = "SELECT * FROM animal WHERE animal.animal_specie = :specie", nativeQuery = true)
    Optional<List<Animal>> findBySpecie (String specie);

    // Getting my animals by containing this char or words in specie
    @Query(value = "SELECT * FROM animal WHERE animal.animal_specie LIKE %:letter% ", nativeQuery = true)
    Optional<List<Animal>> findBySpecieContainsLetter (String letter);

    // Getting my animals by age
    @Query(value = "SELECT * FROM animal WHERE animal.animal_age = :age", nativeQuery = true)
    Optional<List<Animal>> findByAge (Long age);

    // Getting my animals by containing this char or words in age
    @Query(value = "SELECT * FROM animal WHERE animal.animal_age LIKE %:number% ", nativeQuery = true)
    Optional<List<Animal>> findByContainsNumber (Long number);

    // Getting all animals created by the given user
    @Query(value = "SELECT * FROM animal WHERE animal.animal_created_by LIKE :username", nativeQuery = true)
    Optional<List<Animal>> findAllByUser (String username);

    // Getting my animals by containing this char or words in specie
    @Query(value = "SELECT * FROM animal WHERE animal.animal_created_by LIKE %:usernameletter% ", nativeQuery = true)
    Optional<List<Animal>> findByUserContainsLetter (String usernameletter);
}