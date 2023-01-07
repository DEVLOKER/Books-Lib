package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.booksLib.model.EvaluationAnnonce;

public interface EvaluationAnnonceRepository extends JpaRepository<EvaluationAnnonce,Integer> {
    
}

