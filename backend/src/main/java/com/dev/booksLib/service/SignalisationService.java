package com.dev.booksLib.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.booksLib.model.Admin;
import com.dev.booksLib.model.Annonce;
import com.dev.booksLib.model.Membre;
import com.dev.booksLib.model.Signalisation;
import com.dev.booksLib.repository.SignalisationRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SignalisationService {
    @Autowired
    private SignalisationRepository repository;

    public Signalisation add(Signalisation newSignalisation) {
        Signalisation existingSignalisation = find(newSignalisation.getMembre(), newSignalisation.getAnnonce());
        
        if(existingSignalisation==null){
            return repository.save(newSignalisation);
        }else{
            return update(existingSignalisation, newSignalisation);
        }
        
    }

    public Signalisation findById(int id) {
        return repository.findById(id).get();
    }
    
    public List<Signalisation> find(Annonce annonce) {
        return repository.findAll().stream()
                        .filter(signalisation -> signalisation.getAnnonce().getId()==annonce.getId())
                        .collect(Collectors.toList());
    }

    public List<Signalisation> find(Membre membre) {
        return repository.findAll().stream()
                        .filter(signalisation -> signalisation.getMembre().getId()==membre.getId())
                        .collect(Collectors.toList());
    }

    public List<Signalisation> find(Admin admin) {
        return repository.findAll().stream()
                        .filter(signalisation -> signalisation.getMembre().getAdmin().getId()==admin.getId())
                        .collect(Collectors.toList());
    }

    public Signalisation find(Membre membre, Annonce annonce) {
        try {
            return repository.findAll().stream()
                        .filter(Signalisation ->   Signalisation.getMembre().getId()==membre.getId() && Signalisation.getAnnonce().getId()==annonce.getId())
                        .collect(Collectors.toList()).get(0);
        } catch (Exception e) {
            return null;
        }
    }

    public String delete(int id) {
        Signalisation ea = repository.findById(id).get();
        if(ea!=null){
            repository.deleteById(id);
            return "{ \"id\": "+id+"}";
        }
        return "{}";
    }

    public Signalisation update(Signalisation Signalisation, Signalisation newSignalisation) {
        Signalisation existingSignalisation = repository.findById(Signalisation.getId()).get();
        existingSignalisation.setCommentaire(newSignalisation.getCommentaire());
        existingSignalisation.setDateSignaler(newSignalisation.getDateSignaler());
        return repository.save(existingSignalisation);
    }


}
