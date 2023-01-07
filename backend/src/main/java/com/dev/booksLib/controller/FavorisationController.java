package com.dev.booksLib.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dev.booksLib.model.Annonce;
import com.dev.booksLib.model.EvaluationAnnonce;
import com.dev.booksLib.model.Favorisation;
import com.dev.booksLib.model.Membre;
import com.dev.booksLib.service.EvaluationAnnonceService;
import com.dev.booksLib.service.FavorisationService;

import java.util.List;

@RestController
@RequestMapping("/favorisation")
public class FavorisationController {

    @Autowired
    private FavorisationService service;


    @PostMapping("/add/{membre}/{annonce}")
    public Favorisation add(@RequestBody Favorisation favorisation, @PathVariable Membre membre, @PathVariable Annonce annonce) {
        favorisation.setMembre(membre);
        favorisation.setAnnonce(annonce);
        return service.add(favorisation);
    }

    @GetMapping("/find/{membre}")
    public List<Favorisation> find(@PathVariable Membre membre) {
        return service.find(membre);
    }

    @GetMapping("/find/{membre}/{annonce}")
    public Favorisation find(@PathVariable Membre membre, @PathVariable Annonce annonce) {
        return service.find(membre, annonce);
    }

    @GetMapping("/findById/{id}")
    public Favorisation findById( @PathVariable int id) {
        return service.findById(id);
    }


    @DeleteMapping("/delete/{favorisation}")
    public String delete(@PathVariable Favorisation favorisation) {
        return service.delete(favorisation.getId());
    }
}
