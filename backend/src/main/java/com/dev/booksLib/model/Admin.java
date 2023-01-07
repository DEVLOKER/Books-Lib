package com.dev.booksLib.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Admin")
public class Admin extends Utilisateur {
    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAdmin;
    
    // constructor, setter, getter
}
