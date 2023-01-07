package com.dev.booksLib.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.booksLib.model.Admin;
import com.dev.booksLib.repository.AdminRepository;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository repository;

    public Admin saveAdmin(Admin admin) {
        return repository.save(admin);
    }

    public List<Admin> getAdmins() {
        return repository.findAll();
    }

    public Admin getAdminById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Admin findAdminByIdUtilisateur(int id) {
        List<Admin> utilisateurs = repository.findAll();
        for(int i=0; i<utilisateurs.size(); i++){
            Admin utilisateur = utilisateurs.get(i);
            if(utilisateur.getId()==id ){
                return utilisateur;
            }
        }
        return null;
        // return repository.findAdminByIdUtilisateur(id);
    }


    public String deleteAdmin(int id) {
        repository.deleteById(id);
        return "Admin ["+id+"] supprimer !!";
    }

    public Admin updateAdmin(int id, Admin admin) {
        Admin existingAdmin = repository.findById(id).orElse(null);
        // existingAdmin.set(admin.);
        return repository.save(existingAdmin);
    }


}
