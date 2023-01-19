package com.shoeclick.Controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shoeclick.Model.Role;
import com.shoeclick.Model.User;
import com.shoeclick.Repository.RoleRepository;
import com.shoeclick.Repository.UserRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
//	getting all users
	@GetMapping("/user")
	public List<User> getEmp(){
		return userRepository.findAll();
	}

//	adding user to the database
	@PostMapping("/user")
	public User createEmployee(@RequestBody User user) {
		
		Role role = roleRepository.findById("User").get();
		
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		user.setRole(roles);
		
		
		return userRepository.save(user);
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/adminView")
	public String forAdmin() {
		return "This URL is only for accessible to admin";
	}
	
//	@PreAuthorize("hasRole('Admin')")
	@GetMapping("/userView")
	public String forUser() {
		return "This URL is only for accessible to user";
	}
	

//	@PostConstruct
	public void initRolesAndUser() {
		Role adminRole = new Role();
		adminRole.setRoleName("Admin");
		adminRole.setRoleDescription("Admin Role "); 

		Role userRole = new Role();
		userRole.setRoleName("User");
		userRole.setRoleDescription("Default role for newly created user"); 

		User adminUser = new User();
		adminUser.setUsername("admin");
		adminUser.setEmail("admin@gmail.com");
		adminUser.setMobile("1234567890");
		adminUser.setPassword("admin");
		Set<Role> adminRoles = new HashSet<>();
		adminRoles.add(adminRole);
		adminUser.setRole(adminRoles);
		userRepository.save(adminUser);
		
		User user = new User();
		user.setUsername("user");
		user.setEmail("user@gmail.com");
		user.setMobile("1234567890");
		user.setPassword("user");
		Set<Role> userRoles = new HashSet<>();
		userRoles.add(userRole);
		user.setRole(userRoles);
		userRepository.save(user);
		
	}
	
}
