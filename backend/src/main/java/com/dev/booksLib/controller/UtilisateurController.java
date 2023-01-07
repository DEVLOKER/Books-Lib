package com.dev.booksLib.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dev.booksLib.model.Utilisateur;
import com.dev.booksLib.service.AdminService;
import com.dev.booksLib.service.MembreService;
import com.dev.booksLib.service.UtilisateurService;

import java.util.List;

@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("http://localhost:3000/")
public class UtilisateurController {

    @Autowired
    private UtilisateurService service;
    @Autowired
    private AdminService adminService;
    @Autowired
    private MembreService membreService;


    @PostMapping("/login")
    public Utilisateur login(@RequestBody Utilisateur u) {
        Utilisateur existUtilisateur = service.findUtilisateur(u);
        // return existUtilisateur;
        if(existUtilisateur!=null){
            Utilisateur membre = membreService.findMembreByIdUtilisateur(existUtilisateur.getId());
            if(membre!=null) return membre;
            Utilisateur admin = adminService.findAdminByIdUtilisateur(existUtilisateur.getId());
            if(admin!=null) return admin;
        }
        return null;
    }

    @GetMapping("/find/{utilisateur}")
    public Utilisateur findUtilisateurType(@PathVariable Utilisateur utilisateur) {
        Utilisateur existUtilisateur = service.findUtilisateur(utilisateur);
        if(existUtilisateur!=null){
            Utilisateur membre = membreService.findMembreByIdUtilisateur(existUtilisateur.getId());
            if(membre!=null) return membre;
            Utilisateur admin = adminService.findAdminByIdUtilisateur(existUtilisateur.getId());
            if(admin!=null) return admin;
        }
        return null;
    }

}
