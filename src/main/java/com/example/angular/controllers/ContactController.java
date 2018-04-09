package com.example.angular.controllers;

import com.example.angular.models.Contact;
import com.example.angular.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class ContactController {

    @Autowired
    private ContactService contactService;

    @RequestMapping(method = RequestMethod.GET, value = "/contacts")
    @ResponseStatus(value = HttpStatus.OK)
    public Iterable<Contact> contact() {
        return contactService.getAllContacts();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/contacts")
    @ResponseStatus(value = HttpStatus.CREATED)
    public Contact save(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/contacts/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Contact show(@PathVariable String id) {
        return contactService.getContact(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/contacts/{id}")
    public Contact update(@PathVariable String id, @RequestBody Contact contact) {
        if(contact.getId().isEmpty()) {
            contact.setId(id);
        }
        return contactService.updateContact(contact);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/contacts/{id}")
    @ResponseStatus(value = HttpStatus.ACCEPTED)
    public void delete(@PathVariable String id) {
        contactService.deleteContact(id);
    }
}
