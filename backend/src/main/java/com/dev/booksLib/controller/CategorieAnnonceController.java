package com.dev.booksLib.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dev.booksLib.model.CategorieAnnonce;
import com.dev.booksLib.service.CategorieAnnonceService;

import java.util.List;

@RestController
@RequestMapping("/categorieAnnonce")
public class CategorieAnnonceController {

    @Autowired
    private CategorieAnnonceService service;

    @PostMapping("/add")
    public CategorieAnnonce addCategoryAnnonce(@RequestBody CategorieAnnonce categoryAnnonce) {
        return service.saveCategorieAnnonce(categoryAnnonce);
    }

    @GetMapping("/all")
    public List<CategorieAnnonce> findAllCategoryAnnonces() {
        return service.getCategorieAnnonces();
    }

    @GetMapping("/byId/{id}")
    public CategorieAnnonce findCategoryAnnonceById(@PathVariable int id) {
        return service.getCategorieAnnonceById(id);
    }

    @PutMapping("/update/{id}")
    public CategorieAnnonce updateCategoryAnnonce (@PathVariable int id, @RequestBody CategorieAnnonce categorieAnnonce) {
        return service.updateCategorieAnnonce(id, categorieAnnonce);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCategoryAnnonce(@PathVariable int id) {
        return service.deleteCategorieAnnonce(id);
    }
}
