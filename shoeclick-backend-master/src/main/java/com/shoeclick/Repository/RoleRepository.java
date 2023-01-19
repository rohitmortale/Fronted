package com.shoeclick.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shoeclick.Model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, String>{

}
