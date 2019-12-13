package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EnableJpaRepositories(basePackages="com.example.demo.repositories")
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
//		try{
//			Class.forName("com.mysql.cj.jdbc.Driver");
//			Connection con=DriverManager.getConnection(
//					"jdbc:mysql://localhost:3306/animals_schema?useTimezone=true&serverTimezone=UTC","root","rootroot");
//			Statement stmt=con.createStatement();
//			ResultSet rs=stmt.executeQuery("select * from animal");
//			while(rs.next())
//				System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));
//			con.close();
//		}
//		catch(Exception e){ System.out.println(e);
//		}
	}

}


