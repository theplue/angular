package com.example.angular.services;

import com.example.angular.models.Contact;

import java.util.List;


public interface ContactService {
    List<Contact> getAllContacts();
    Contact createContact(Contact contact);
    Contact getContact(String id);
    Contact updateContact(Contact contact);
    String deleteContact(String id);
}
