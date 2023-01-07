package com.dev.booksLib.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.booksLib.model.Annonce;
import com.dev.booksLib.model.CategorieAnnonce;
import com.dev.booksLib.model.Etat;
import com.dev.booksLib.model.Membre;
import com.dev.booksLib.repository.AnnonceRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnnonceService {
    @Autowired
    private AnnonceRepository repository;

    public Annonce saveAnnonce(Annonce annonce) {
        return repository.save(annonce);
    }

    public List<Annonce> findByEtat(Etat etat) {
        return repository.findAll().stream()
                        .filter(annonce -> annonce.getEtat().equals(etat) && annonce.getMembre().getEtat().equals(etat))
                        .collect(Collectors.toList());
    }

    public List<Annonce> findByCategorie(CategorieAnnonce categorie) {
        return repository.findAll().stream()
                        .filter(annonce -> annonce.getEtat().equals(Etat.ACTIVE) && annonce.getCategorie().getId()==categorie.getId())
                        .collect(Collectors.toList());
    }

    public List<Annonce> findByMembre(Membre membre) {
        return repository.findAll().stream()
                        .filter(annonce -> annonce.getEtat().equals(Etat.ACTIVE) && annonce.getMembre().getId()==membre.getId())
                        .collect(Collectors.toList());
    }

    public List<Annonce> findByTitreOrPrix(String word) {
        return repository.findAll().stream()
                        .filter(annonce -> {
                            double prix = 0;
                            try {
                                prix = Double.parseDouble(word);
                            } catch (Exception e) {}
                            return annonce.getEtat().equals(Etat.ACTIVE) && 
                            ( annonce.getTitre().toLowerCase().contains(word.toLowerCase()) || annonce.getPrix() <= prix );
                        } )
                        .collect(Collectors.toList());
    }

    public Annonce findById(int id) {
        return repository.findById(id).get();
    }


    public Annonce deactivateAnnonce(int id) {
        Annonce existingAnnonce = repository.findById(id).get();
        existingAnnonce.setEtat(Etat.DISACTIVE);
        return repository.save(existingAnnonce);
        // try {
        //     repository.deleteById(id);
        //     return "{ \"id\": "+id+"}";
        // } catch (Exception e) {
        //     return "{ \"id\": "+e.getMessage()+"}";
        // }
    }

    public Annonce activateAnnonce(int id) {
        Annonce existingAnnonce = repository.findById(id).get();
        existingAnnonce.setEtat(Etat.ACTIVE);
        return repository.save(existingAnnonce);
    }

    public Annonce updateAnnonce(int id, Annonce annonce) {
        Annonce existingAnnonce = repository.findById(id).get();
        existingAnnonce.setTitre(annonce.getTitre());
        existingAnnonce.setAuteur(annonce.getAuteur());
        existingAnnonce.setPrix(annonce.getPrix());
        existingAnnonce.setDescriptionAnnonce(annonce.getDescriptionAnnonce());
        existingAnnonce.setConditionAnnonce(annonce.getConditionAnnonce());
        existingAnnonce.setDate(annonce.getDate());
        existingAnnonce.setUrlPhotoLivre(annonce.getUrlPhotoLivre());
        existingAnnonce.setEtat(annonce.getEtat());
        existingAnnonce.setAjouterFavorie(annonce.getAjouterFavorie());
        existingAnnonce.setCategorie(annonce.getCategorie());
        // existingAnnonce.setMembre(annonce.getMembre());
        // existingAnnonce.setAdmin(annonce.getAdmin());
        return repository.save(existingAnnonce);
    }


}
