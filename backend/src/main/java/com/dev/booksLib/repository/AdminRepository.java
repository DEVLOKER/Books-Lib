package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.dev.booksLib.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    // public Admin findAdminByIdUtilisateur(@Param(value = "id") int id);
}

