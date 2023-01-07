package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.booksLib.model.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur,Integer> {
    
}

