package com.development.springBootApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class EmployeeApplication {
	
	//Main method
	public static void main(String[] args) {
		SpringApplication.run(EmployeeApplication.class, args);
	}
}
