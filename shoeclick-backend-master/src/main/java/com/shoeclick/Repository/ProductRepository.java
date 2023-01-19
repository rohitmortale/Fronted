package com.shoeclick.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shoeclick.Model.Category;
import com.shoeclick.Model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	
	public List<Product> findByCategory(Category category);

}
