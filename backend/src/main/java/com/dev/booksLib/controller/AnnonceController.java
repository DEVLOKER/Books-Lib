package com.dev.booksLib.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.dev.booksLib.model.Annonce;
import com.dev.booksLib.model.CategorieAnnonce;
import com.dev.booksLib.model.Etat;
import com.dev.booksLib.model.Membre;
import com.dev.booksLib.service.AnnonceService;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Base64;

@RestController
@RequestMapping("/annonce")
public class AnnonceController {

    @Autowired
    private AnnonceService service;

    @PostMapping("/add/{categorie}/{membre}")
    public Annonce addAnnonce(@RequestBody Annonce annonce, @PathVariable CategorieAnnonce categorie, @PathVariable Membre membre) {
        annonce.setCategorie(categorie);
        annonce.setMembre(membre);
        return service.saveAnnonce(annonce);
    }

    @GetMapping("/findByEtat/{etat}")
    public List<Annonce> findByEtat(@PathVariable int etat) {
        switch (etat) {
            case 0:
                return service.findByEtat(Etat.DISACTIVE);
            case 1:
                return service.findByEtat(Etat.ACTIVE);
            default:
                return service.findByEtat(Etat.ACTIVE);
        }
    }

    @GetMapping("/findByCategorie/{categorie}")
    public List<Annonce> findByCategorie(@PathVariable CategorieAnnonce categorie) {
        return service.findByCategorie(categorie);
    }

    @GetMapping("/findByMembre/{membre}")
    public List<Annonce> findByMembre(@PathVariable Membre membre) {
        return service.findByMembre(membre);
    }

    @GetMapping("/findByTitreOrPrix/{word}")
    public List<Annonce> findByTitreOrPrix(@PathVariable String word) {
        return service.findByTitreOrPrix(word);
    }

    @GetMapping("/findById/{id}")
    public Annonce findById(@PathVariable int id) {
        return service.findById(id);
    }

    @PutMapping("/update/{categorie}/{id}")
    public Annonce updateAnnonce(@PathVariable int id, @RequestBody Annonce annonce, @PathVariable CategorieAnnonce categorie) {
        annonce.setCategorie(categorie);
        return service.updateAnnonce(id, annonce);
    }

    @PutMapping("/desactivate/{id}")
    public Annonce desactivateAnnonce(@PathVariable int id) {
        return service.deactivateAnnonce(id);
    }

    @PutMapping("/activate/{id}")
    public Annonce activateAnnonce(@PathVariable int id) {
        return service.activateAnnonce(id);
    }

    // @RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    // public String fileUpload(@RequestParam("file") MultipartFile file) throws IOException {
    //     File convertFile = new File(file.getOriginalFilename());
    //     convertFile.createNewFile();
    //     FileOutputStream fout = new FileOutputStream(convertFile);
    //     fout.write(file.getBytes());
    //     fout.close();
    //     return "File is upload successfully";
    // }


    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public String upload(@RequestBody Map<String, Object> payload) throws Exception {
        String filename = payload.get("name").toString();
        String base64 = payload.get("base64").toString();
        byte[] data = Base64.getDecoder().decode(base64);
        try{
            String path = "backend/src/main/resources/static/uploads";
            FileOutputStream fos = new FileOutputStream(new File(path+"/"+filename));
            fos.write(data);
            fos.close();
            return "image uploaded successfully";
        }
        catch (Exception e) {
            return "Couldn't write to file...";
        }
    }
    
}
