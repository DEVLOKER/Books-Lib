package com.dev.booksLib.model;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "EvaluationAnnonce")
public class EvaluationAnnonce{
    @Id
    @GeneratedValue
    private int id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="annonce_id")
    private Annonce annonce;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="membre_id")
    private Membre membre;

    private LocalDate dateEvaluation;
    private String commentaire;
    
    @Enumerated(EnumType.ORDINAL)
    @Column(name="note")
    private Note note;

    // constructor, setter, getter
}
