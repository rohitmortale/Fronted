package com.shoeclick.authentication;

public class JwtResponse {
	
//	JWT response body
	
	String token;

	public JwtResponse(String token) {
		this.token = token;
	}

	public JwtResponse() {

	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	

}
