package com.example.angular.services;

import com.example.angular.models.Contact;
import com.example.angular.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {
    @Autowired
    ContactRepository contactRepository;

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact getContact(String id) {
        Optional<Contact> c = contactRepository.findById(id);
        if( c.isPresent()){
            return c.get();
        }
        return new Contact();
    }

    @Override
    public Contact updateContact(Contact contact) {
        Contact c = contactRepository.findById(contact.getId()).get();
        if(contact.getName() != null)
                c.setName(contact.getName());
        if(contact.getAddress() != null)
                c.setAddress(contact.getAddress());
        if(contact.getCity() != null)
                c.setCity(contact.getCity());
        if(contact.getPhone() != null)
                c.setPhone(contact.getPhone());
        if(contact.getEmail() != null)
                c.setEmail(contact.getEmail());
        contactRepository.save(c);
        return contact;
    }

    @Override
    public String deleteContact(String id) {
        Contact contact = contactRepository.findById(id).get();
        contactRepository.delete(contact);

        return "deleted";

    }


}
