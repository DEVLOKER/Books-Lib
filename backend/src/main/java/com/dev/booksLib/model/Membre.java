package com.dev.booksLib.model;

import java.io.Serializable;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "membre")
public class Membre extends Utilisateur {
    // @Id
    // @GeneratedValue
    // private int idMembre;
    private String prenom;
    private String nom;
    private String pays;
    private String ville;
    private String adresse;
    private String numeroTelephone;
    private String province;
    private String codePostal;
    private String urlPhotoProfile;

    @Enumerated(EnumType.STRING)
    @Column(name="etat")
    private Etat etat;
    
    @ManyToOne(cascade = {CascadeType.ALL})
    // @JoinColumn(name="id_admin")
    private Admin admin;
    
    // constructor, setter, getter
}
