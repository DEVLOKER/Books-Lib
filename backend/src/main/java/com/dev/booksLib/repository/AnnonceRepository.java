package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.booksLib.model.Annonce;

public interface AnnonceRepository extends JpaRepository<Annonce,Integer> {
    
}

