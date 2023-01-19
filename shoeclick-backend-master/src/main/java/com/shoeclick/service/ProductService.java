package com.shoeclick.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shoeclick.Model.Product;
import com.shoeclick.Repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	public Product addNewProduct(Product product) {
		return productRepository.save(product);
	} 
}