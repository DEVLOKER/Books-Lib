package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.dev.booksLib.model.Membre;

public interface MembreRepository extends JpaRepository<Membre,Integer> {
    // public Membre findMembreByIdUtilisateur(@Param(value = "id") int id);
}

