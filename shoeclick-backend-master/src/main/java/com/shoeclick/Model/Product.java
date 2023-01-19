package com.shoeclick.Model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long productId;
	String productName, size;
	long actualPrice, discountedPrice, discountPercentage;
	boolean Availibility;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "product_images",
			joinColumns = {
					@JoinColumn(name = "product_id")
	},
			inverseJoinColumns = {
					@JoinColumn(name = "image_id")
	}
			)
	private Set<ProductImages> productImages;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	
	
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}

	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public Set<ProductImages> getProductImages() {
		return productImages;
	}
	public void setProductImages(Set<ProductImages> productImages) {
		this.productImages = productImages;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public long getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(long actualPrice) {
		this.actualPrice = actualPrice;
	}
	public long getDiscountedPrice() {
		return discountedPrice;
	}
	public void setDiscountedPrice(long discountedPrice) {
		this.discountedPrice = discountedPrice;
	}
	public long getDiscountPercentage() {
		return discountPercentage;
	}
	public void setDiscountPercentage(long discountPercentage) {
		this.discountPercentage = discountPercentage;
	}
	public boolean isAvailibility() {
		return Availibility;
	}
	public void setAvailibility(boolean availibility) {
		Availibility = availibility;
	}
	
	
	
	

}
