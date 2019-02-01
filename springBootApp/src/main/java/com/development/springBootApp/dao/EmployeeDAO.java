package com.development.springBootApp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.development.springBootApp.model.Employee;
import com.development.springBootApp.repository.EmployeeRepository;

//Defining Service
@Service
public class EmployeeDAO {
	@Autowired
	EmployeeRepository employeeRepository;
	
	//Employee Save method
	public Employee save(Employee emp) {
		return employeeRepository.save(emp);
	}
	
	//Method to get all employees
	public List<Employee> findAll(){
		return employeeRepository.findAll();
	}
	
	//Method to find specific employee
	public Employee findOne(Long id) {
		return employeeRepository.findOne(id);
	}
	
	//Employee Delete method
	public void delete(Long id) {
		employeeRepository.delete(id);
	}
}
