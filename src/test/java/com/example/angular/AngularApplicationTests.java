package com.example.angular;


import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.nio.charset.Charset;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class AngularApplicationTests {


    @Autowired
    private MockMvc mockMvc;
    private String testContact = "{\"id\":\"12377\",\"name\":\"Robert Slavik\",\"address\":\"1234 Bellview Ln\",\"city\":\"Denver\",\"phone\":\"8675309\",\"email\":\"robert.slavik@dummy.com\"}";
    private String nullContact = "{\"id\":null,\"name\":null,\"address\":null,\"city\":null,\"phone\":null,\"email\":null}";

    @Test
    public void shouldBeEmptyList() throws Exception {
        mockMvc.perform(get("/contacts"))
                .andExpect(status().isOk());
    }

    @Test
    public void shouldCreateEntity() throws Exception {
        mockMvc.perform(post("/contacts")
                .contentType(new MediaType(MediaType.APPLICATION_JSON.getType(), MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8")))
                .content(testContact))
                .andExpect(status().isCreated())
                .andExpect( status().isCreated());
    }

    @Test
    public void getContact() throws Exception {
        shouldCreateEntity();
        MvcResult result = this.mockMvc.perform(get("/contacts/12377")
                .accept("application/json"))
                .andReturn();
        Assert.assertTrue(result.getResponse().getContentAsString()
                .equals(testContact));
    }

    @Test
    public void deleteContact() throws Exception {
        shouldCreateEntity();
        mockMvc.perform(delete("/contacts/12377"))
                .andExpect(status().isAccepted());
        MvcResult result = this.mockMvc.perform(get("/contacts/12377")
                .accept("application/json"))
                .andReturn();
        Assert.assertTrue(result.getResponse().getContentAsString()
                .equals(nullContact));
    }

}


