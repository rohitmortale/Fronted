package com.shoeclick.Model;

import javax.persistence.Entity;
import javax.persistence.Table;

public class Search {
	
//	search request body
	String firstName;
	String mobile;
	
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	

	
}
