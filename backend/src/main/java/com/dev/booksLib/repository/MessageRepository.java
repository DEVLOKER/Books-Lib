package com.dev.booksLib.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.booksLib.model.Message;

public interface MessageRepository extends JpaRepository<Message,Integer> {
    
}

