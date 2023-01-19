package com.shoeclick.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shoeclick.Model.Role;
import com.shoeclick.Repository.RoleRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class RoleController {
	
	@Autowired
	RoleRepository roleRepository;
	
	@PostMapping("/role")
	public Role createRole(@RequestBody Role role) {
		return roleRepository.save(role);
	}
	
	
}
