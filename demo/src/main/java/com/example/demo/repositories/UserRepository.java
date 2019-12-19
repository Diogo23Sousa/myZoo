package com.example.demo.repositories;
import com.example.demo.models.Animal;
import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Getting my users by containing this char or words in name
    @Query(value = "SELECT * FROM user WHERE user.name LIKE %:letter% ", nativeQuery = true)
    Optional<List<User>> findByContainsLetter (String letter);

    // Getting my user by name
    @Query(value = "SELECT * FROM user WHERE user.name = :name", nativeQuery = true)
    Optional<List<User>> findByName (String name);

    // Getting my user by age
    @Query(value = "SELECT * FROM user WHERE user.age = :age", nativeQuery = true)
    Optional<List<User>> findByAge (Long age);

    // Getting my users by containing this char or words in email
    @Query(value = "SELECT * FROM user WHERE user.email LIKE %:letter% ", nativeQuery = true)
    Optional<List<User>> findByEmailContainsLetter (String letter);

    // Getting my user by email
    @Query(value = "SELECT * FROM user WHERE user.email = :email", nativeQuery = true)
    Optional<List<User>> findByEmail (String email);

    // Getting my users by containing this char or words in age
    @Query(value = "SELECT * FROM user WHERE user.age LIKE %:number% ", nativeQuery = true)
    Optional<List<User>> findByContainsNumber (Long number);

    // Checking if the username and password given are valid
    @Query(value = "SELECT * FROM user WHERE user.name LIKE :name AND user.password LIKE :password", nativeQuery = true)
    Optional <User> userLogin (String name, String password);

    // Getting Users by Role
    @Query(value = "SELECT * FROM user WHERE user.role = :role", nativeQuery = true)
    Optional <List <User>> findByRole (String role);
}