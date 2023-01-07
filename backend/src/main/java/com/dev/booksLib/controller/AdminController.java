package com.dev.booksLib.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dev.booksLib.model.Admin;
import com.dev.booksLib.service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService service;

    @PostMapping("/add")
    public Admin addAdmin(@RequestBody Admin admin) {
        return service.saveAdmin(admin);
    }

    @GetMapping("/all")
    public List<Admin> findAllAdmins() {
        return service.getAdmins();
    }

    @GetMapping("/byId/{id}")
    public Admin findAdminById(@PathVariable int id) {
        return service.getAdminById(id);
    }

    @PutMapping("/update")
    public Admin updateAdmin(@PathVariable int id, @RequestBody Admin admin) {
        return service.updateAdmin(id, admin);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAdmin(@PathVariable int id) {
        return service.deleteAdmin(id);
    }
}
