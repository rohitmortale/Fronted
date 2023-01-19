package com.shoeclick.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "images")
public class ProductImages {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	String imageName, type;
	@Column(length = 50000000)
	byte[] picByte;
	
//	@ManyToOne(fetch = FetchType.EAGER)
//	private Quiz quiz;
	
//	@ManyToOne(fetch = FetchType.EAGER)
//	private Product product;
	
//	public Product getProduct() {
//		return product;
//	}
//
//	public void setProduct(Product product) {
//		this.product = product;
//	}

	public ProductImages() {
		
	}

	public ProductImages(String imageName, String type, byte[] picByte) {
		super();
		this.imageName = imageName;
		this.type = type;
		this.picByte = picByte;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}
	
	
	
}
