package com.shoeclick.Controller;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shoeclick.Model.Category;
import com.shoeclick.Repository.CategoryRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	CategoryRepository categoryRepository;

	@GetMapping("/category")
	public Set<Category> getAllCategory() {
		return new LinkedHashSet<>(categoryRepository.findAll());
	}

	@GetMapping("/category/{id}")
	public Category getSingleCategory(@PathVariable("id") Long categoryId) {
		return categoryRepository.findById(categoryId).get();
	}

	@PostMapping("/category")
	public Category addCategoty(@RequestBody Category category) {
		return categoryRepository.save(category);
	}

	@PutMapping("/category")
	public Category updateCategory(@RequestBody Category category) {
		return categoryRepository.save(category);
	}

	@DeleteMapping("/category/{id}")
	public Map<String, Boolean> deleteCategory(@PathVariable("id") Long categoryId) {
		categoryRepository.deleteById(categoryId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
