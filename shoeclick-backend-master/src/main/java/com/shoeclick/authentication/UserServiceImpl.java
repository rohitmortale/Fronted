package com.shoeclick.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.shoeclick.Model.User;
import com.shoeclick.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
//	implemented method for getting user by username
	public User getbyUsername(String username) {
		return this.userRepository.findByUsername(username);
	}

//	implemented method for deleting user by id
	public HttpStatus deleteById(Long id) {
		this.userRepository.deleteById(id);
		return HttpStatus.OK;
	}

}
