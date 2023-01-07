package com.dev.booksLib.model;


public enum Etat {
    
    ACTIVE("ACTIVE"), DISACTIVE("DISACTIVE");

    String etat;

    Etat(String etat) {
        this.etat =etat;
    }
}
