package com.shoeclick.Controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.shoeclick.Model.Category;
import com.shoeclick.Model.Product;
import com.shoeclick.Model.ProductImages;
import com.shoeclick.Repository.ProductRepository;
import com.shoeclick.service.ProductService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	ProductService productService;

	@Autowired
	ProductRepository productRepository;

	@PostMapping(value = { "/product" }, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
	public Product addProduct(@RequestPart("product") Product product, @RequestPart("imageFile") MultipartFile[] file) {

		try {
			Set<ProductImages> images = uploadImage(file);
			product.setProductImages(images);
			return productRepository.save(product);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public Set<ProductImages> uploadImage(MultipartFile[] multipartFiles) throws IOException {
		Set<ProductImages> productImages = new HashSet<>();

		for (MultipartFile file : multipartFiles) {
			ProductImages productImage = new ProductImages(file.getOriginalFilename(), file.getContentType(),
					file.getBytes());
			productImages.add(productImage);
		}
		return productImages;
	}

	@PutMapping(value = { "/product" }, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
	public Product updateProducts(@RequestPart("product") Product product,
			@RequestPart("imageFile") MultipartFile[] file) {

		try {
			Set<ProductImages> images = uploadImage(file);
			product.setProductImages(images);
			return productRepository.save(product);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

//	@PutMapping("/product")
//	public Product updateProductS(@RequestBody Product product) {
//		return productRepository.save(product);
//	}

	@DeleteMapping("/product/{id}")
	public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long pId) {

		productRepository.deleteById(pId);

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	
//	findByCategory(category)
	
	@GetMapping("/productByCategory/{cid}")
	public List<Product> getquizzesOfCategory(@PathVariable("cid") Long cid){
		Category category = new Category();
		category.setCid(cid);
		return this.productRepository.findByCategory(category);
	}
	

	@GetMapping("/product")
	public List<Product> getProducts() {
		return productRepository.findAll();
	}
	
	@GetMapping("/allProduct")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@GetMapping("/product/{id}")
	public Product getSingleProduct(@PathVariable(value = "id") Long pId) {
		return productRepository.findById(pId).get();

	}

}
