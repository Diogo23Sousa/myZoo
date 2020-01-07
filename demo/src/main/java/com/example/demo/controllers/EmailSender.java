package com.example.demo.controllers;

import com.example.demo.models.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmailSender {

    @Autowired
    JavaMailSender javaMailSender;

    @PostMapping("/user/email/help/")
    public String sendHelpEmail(@RequestBody Email emailToSend) {
        emailToSend.setEmailTime(LocalDateTime.now());
        emailToSend.setEmailSubject("Help Message");

        SimpleMailMessage helpMsg = new SimpleMailMessage();
        helpMsg.setTo(emailToSend.getEmailSender());
        helpMsg.setSubject("Help Message" + emailToSend.getEmailTime());
        helpMsg.setText(emailToSend.getEmailMessage());
        javaMailSender.send(helpMsg);
        return "Message was received!";
    }
}
