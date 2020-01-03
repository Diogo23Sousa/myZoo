export class User {
id: number;
name: String;
password: String;
email: String;
age: number;
role: String;


constructor(id: number, name: String, password: String, email: String, age: number, role: String) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.age = age;
    this.role = role;
}
}
