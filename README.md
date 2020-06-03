Zoo Manager - Start instructions:

DATABASE (MYSQL + Hibernate) - Open mySQL and Hibernate will generate automatically the database.
After the database is created you have to go to 'myZoo/demo/src/main/resources/application.properties':
1. Change hibernate settings:
```spring.jpa.hibernate.ddl-auto=create``` to ```spring.jpa.hibernate.ddl-auto=validate```
2. To enable emailSender you have to put your GMAIL credentials in:
```
spring.mail.username=youremail@gmail.com
spring.mail.password="yourpassword"
```



BACKEND (myZoo/demo) - Java 8+ (Spring Framework) connected to MYSQL Database using Hibernate Framework
1. Install JDK and MAVEN
2. Install the needed dependencies by running this command inside the folder 'myZoo/demo/':
``` mvn clean install ```
3. Run the server by running this command inside the folder 'myZoo/demo':
```mvn spring-boot:run```

FRONTEND (myZoo/my-new-project) - Angular 8+ using JWT authentication
1. Install NPM (Node Package Manager)
2. Install the Angular CLI by running the following command:
```npm install -g @angular/cli```
3. Install the needed modules for the project by running the following command:
```npm install```
4. Running the server locally:
```npm start```
5. Open you browser on the following url:
```http://localhost:4200/```

