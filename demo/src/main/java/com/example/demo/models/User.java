package com.example.demo.models;
import javax.persistence.*;
import java.io.Serializable;

@Entity
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String password;
    private String email;
    private Long age;

    public User() {
    }

    public User(String name, String password, String email, Long age) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
    }

    public User(Long id, String name, String password, String email, Long age) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }
}
