package com.dev.booksLib.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.booksLib.model.Utilisateur;
import com.dev.booksLib.repository.UtilisateurRepository;

import java.util.List;

@Service
public class UtilisateurService {
    @Autowired
    private UtilisateurRepository repository;

    public List<Utilisateur> getUtilisateurs() {
        return repository.findAll();
    }

    public Utilisateur findUtilisateur(Utilisateur u) {
        List<Utilisateur> utilisateurs = repository.findAll();
        for(int i=0; i<utilisateurs.size(); i++){
            Utilisateur utilisateur = utilisateurs.get(i);
            if(utilisateur.getEmail().equals(u.getEmail()) && utilisateur.getMotDePasse().equals(u.getMotDePasse()) ){
                return utilisateur;
            }
        }
        return null;
    }
    
    
}
