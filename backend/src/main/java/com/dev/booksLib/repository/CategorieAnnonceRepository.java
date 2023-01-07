package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.booksLib.model.CategorieAnnonce;

public interface CategorieAnnonceRepository extends JpaRepository<CategorieAnnonce,Integer> {
    
}

