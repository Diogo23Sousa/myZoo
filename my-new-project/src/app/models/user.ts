export class User {
name: String;
password: String;
email: String;
age: Number;
role: String;


constructor(name: String, password: String, email: String, age: Number, role: String) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.age = age;
    this.role = role;
}
}
