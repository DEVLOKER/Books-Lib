package com.dev.booksLib.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dev.booksLib.model.Annonce;
import com.dev.booksLib.model.EvaluationAnnonce;
import com.dev.booksLib.model.Membre;
import com.dev.booksLib.service.EvaluationAnnonceService;

import java.util.List;

@RestController
@RequestMapping("/evaluation")
public class EvaluationAnnonceController {

    @Autowired
    private EvaluationAnnonceService service;

    @PostMapping("/add/{membre}/{annonce}")
    public EvaluationAnnonce add(@RequestBody EvaluationAnnonce evaluationAnnonce, @PathVariable Membre membre, @PathVariable Annonce annonce) {
        evaluationAnnonce.setMembre(membre);
        evaluationAnnonce.setAnnonce(annonce);
        return service.add(evaluationAnnonce);
    }

    @GetMapping("/findById/{id}")
    public EvaluationAnnonce findById( @PathVariable int id) {
        return service.findById(id);
    }

    @GetMapping("/get/{annonce}")
    public List<EvaluationAnnonce> get(@PathVariable Annonce annonce) {
        return service.get(annonce);
    }

    @GetMapping("/find/{membre}/{annonce}")
    public EvaluationAnnonce find(@PathVariable Membre membre, @PathVariable Annonce annonce) {
        return service.find(membre, annonce);
    }


    @PutMapping("/update/{evaluationAnnonce}")
    public EvaluationAnnonce update (@PathVariable EvaluationAnnonce evaluationAnnonce, @RequestBody  EvaluationAnnonce newEvaluationAnnonce) {
        return service.update(evaluationAnnonce, newEvaluationAnnonce);
    }

    @DeleteMapping("/delete/{evaluationAnnonce}")
    public String delete(@PathVariable EvaluationAnnonce evaluationAnnonce) {
        return service.delete(evaluationAnnonce.getId());
    }
}
