package com.development.springBootApp.repository;

import com.development.springBootApp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Employee Repository(Interface)
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
