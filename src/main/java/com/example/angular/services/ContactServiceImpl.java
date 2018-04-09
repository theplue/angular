package com.example.angular.services;

import com.example.angular.models.Contact;
import com.example.angular.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

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
        if( contact.getId().isEmpty()){
            contact.setId(String.valueOf(ThreadLocalRandom.current().nextInt()));
            System.out.println(contact.getId());
        }
        return contactRepository.save(contact);
    }

    @Override
    public Contact getContact(String id) {
        Optional<Contact> c = contactRepository.findById(id);
        return c.orElseGet(Contact::new);
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
    public void deleteContact(String id) {
        Optional<Contact> contact = contactRepository.findById(id);
        contact.ifPresent(contact1 -> contactRepository.delete(contact1));
    }


}
