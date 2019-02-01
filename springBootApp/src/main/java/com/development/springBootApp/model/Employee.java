package com.development.springBootApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

//Initializing the table name
@Entity
@Table(name="Employees")
@EntityListeners(AuditingEntityListener.class)

public class Employee {
	//Defining Id as primary key
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	//Defining Column names & make them not blank
	@NotBlank
	@Column(name="name")
	private String name;
	
	//Defining Column names & make them not blank
	@NotBlank
	@Column(name="nic")
	private String nic;

	//Get Method for Id
	public Long getId() {
		return id;
	}

	//Set Method for Id
	public void setId(Long id) {
		this.id = id;
	}

	//Get Method for Name
	public String getName() {
		return name;
	}

	//Set Method for Name
	public void setName(String name) {
		this.name = name;
	}

	//Get Method for NIC
	public String getNic() {
		return nic;
	}

	//Set Method for NIC
	public void setNic(String nic) {
		this.nic = nic;
	}
}
