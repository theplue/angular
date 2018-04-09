package com.example.angular;

import com.example.angular.controllers.ContactController;
import com.example.angular.models.Contact;
import com.example.angular.repositories.ContactRepository;
import com.example.angular.services.ContactService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class AngularApplicationTests {


    @Autowired
    private MockMvc mockMvc;
    private Contact testContact = new Contact("1", "Robert Slavik", "1234 Bellview rd", "Denver", "867-5309", "email@email.com");

    @Autowired
    private ContactRepository contactRepository;

    @Before
    public void deleteAllBeforeTests() throws Exception {
        contactRepository.deleteAll();

    }

    @Test
    public void shouldBeEmptyList() throws Exception {
        mockMvc.perform(get("/contacts")).andExpect(status().isOk());
    }

    @Test
    public void shouldCreateEntity() throws Exception {
        mockMvc.perform(post("/contacts").content(
                "{\"id\":\"123\",\"name\":\"Robert Slavik\",\"address\":\"1234 Bellview Ln\",\"city\":\"Denver\",\"phone\":\"8675309\",\"email\":\"robert.slavik@dummy.com\"}")).andExpect(
                status().isCreated()).andExpect( status().isCreated());
    }

}


