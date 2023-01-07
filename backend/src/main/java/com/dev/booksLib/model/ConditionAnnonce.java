package com.dev.booksLib.model;


public enum ConditionAnnonce {

    NEW("NEW"), 
    LIKE_NEW("LIKE_NEW"),
    GOOD_CONDITION("GOOD_CONDITION"),
    USED("USED");

    String conditionAnnonce;

    ConditionAnnonce(String conditionAnnonce) {
        this.conditionAnnonce =conditionAnnonce;
    }
}
