package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.booksLib.model.Favorisation;

public interface FavorisationRepository extends JpaRepository<Favorisation,Integer> {
    
}

