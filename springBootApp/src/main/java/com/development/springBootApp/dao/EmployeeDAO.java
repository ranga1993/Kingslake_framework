package com.development.springBootApp.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.development.springBootApp.model.Employee;
import com.development.springBootApp.repository.EmployeeRepository;

@Service
public class EmployeeDAO {
	@Autowired
	EmployeeRepository employeeRepository;
	
	public Employee save(Employee emp) {
		return employeeRepository.save(emp);
	}
	
	public List<Employee> findAll(){
		return employeeRepository.findAll();
	}
	
	public Employee findOne(Long id) {
		return employeeRepository.findOne(id);
	}
	
	public void delete(Long id) {
		employeeRepository.delete(id);
	}
}
