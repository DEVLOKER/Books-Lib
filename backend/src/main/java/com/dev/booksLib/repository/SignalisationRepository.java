package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.booksLib.model.Signalisation;

public interface SignalisationRepository extends JpaRepository<Signalisation,Integer> {
    
}

