package com.dev.booksLib.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dev.booksLib.model.Membre;
import com.dev.booksLib.model.Message;
import com.dev.booksLib.service.MembreService;
import com.dev.booksLib.service.MessageService;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService service;
    @Autowired
    private MembreService mservice;

    @PostMapping("/send/{expediteur}/{receveur}")
    public Message send(@RequestBody Message message, @PathVariable int expediteur, @PathVariable int receveur) {
        Membre exp = mservice.getMembreById(expediteur);
        Membre rcv = mservice.getMembreById(receveur);
        message.setExpediteur(exp);
        message.setReceveur(rcv);
        return service.send(message);
    }

    @GetMapping("/find/{membre}")
    public List<Message> findByMembre(@PathVariable Membre membre) {
        return service.findByMembre(membre);
    }

    @GetMapping("/sync/{membre}")
    public List<Message> findByExpediteurOrReceveur(@PathVariable Membre membre) {
        return service.sync(membre);
    }

    @GetMapping("/find/{expediteur}/{receveur}")
    public List<Message> findByExpediteurReceveur(@PathVariable Membre expediteur, @PathVariable Membre receveur) {
        return service.findByExpediteurReceveur(expediteur, receveur);
    }

    @GetMapping("/findByExpediteur/{expediteur}")
    public List<Message> findByExpediteur(@PathVariable Membre expediteur) {
        return service.findByExpediteur(expediteur);
    }

    @GetMapping("/findByReceveur/{receveur}")
    public List<Message> findByReceveur(@PathVariable Membre receveur) {
        return service.findByReceveur(receveur);
    }

}
