package com.shoeclick.authentication;

import org.springframework.http.HttpStatus;

import com.shoeclick.Model.User;

public interface UserService {
	
	
//	get user by user name 
	public User getbyUsername(String username);
	
//	delete user by id
	public HttpStatus deleteById(Long id);
	
	
}
