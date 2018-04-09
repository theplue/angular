package com.example.angular.repositories;

import com.example.angular.models.Contact;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface ContactRepository extends CrudRepository<Contact, String> {


    @Override
    List<Contact> findAll();

    @Override
    void delete(Contact deleted);
}
