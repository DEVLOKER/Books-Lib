package com.dev.booksLib.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "signalisation")
public class Signalisation {
    @Id
    @GeneratedValue
    private int id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="annonce_id")
    private Annonce annonce;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="membre_id")
    private Membre membre;

    private LocalDate dateSignaler;
    private String commentaire;
    
    // constructor, setter, getter
}
