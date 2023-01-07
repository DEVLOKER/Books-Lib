package com.dev.booksLib.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.booksLib.model.Annonce;
import com.dev.booksLib.model.Favorisation;
import com.dev.booksLib.model.Membre;
import com.dev.booksLib.repository.FavorisationRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavorisationService {
    
    @Autowired
    private FavorisationRepository repository;

    public Favorisation add(Favorisation newEvaluationAnnonce) {
        return repository.save(newEvaluationAnnonce);
    }

    public Favorisation find(Membre membre, Annonce annonce) {
        try {
            return repository.findAll().stream()
                        .filter(favorisation ->   favorisation.getMembre().getId()==membre.getId() && favorisation.getAnnonce().getId()==annonce.getId())
                        .collect(Collectors.toList()).get(0);
        } catch (Exception e) {
            return null;
        }
    }

        
    public List<Favorisation> find(Membre membre) {
        return repository.findAll().stream()
                        .filter(favorisation -> favorisation.getMembre().getId()==membre.getId())
                        .collect(Collectors.toList());
    }

    public Favorisation findById(int id) {
        return repository.findById(id).get();
    }

    public String delete(int id) {
        Favorisation f = repository.findById(id).get();
        if(f!=null){
            repository.deleteById(id);
            return "{ \"id\": "+id+"}";
        }
        return "{}";
    }


}
