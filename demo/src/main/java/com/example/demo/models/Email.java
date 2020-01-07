package com.example.demo.models;

import java.time.LocalDateTime;
import java.util.Date;

public class Email {
    private String emailSender;
    private String emailSubject;
    private LocalDateTime emailTime;
    private String emailMessage;

    public Email() {
    }

    public Email(String emailSender, String emailSubject, LocalDateTime emailTime, String emailMessage) {
        this.emailSender = emailSender;
        this.emailSubject = emailSubject;
        this.emailTime = emailTime;
        this.emailMessage = emailMessage;
    }

    public String getEmailSender() {
        return emailSender;
    }

    public void setEmailSender(String emailSender) {
        this.emailSender = emailSender;
    }

    public String getEmailMessage() {
        return emailMessage;
    }

    public void setEmailMessage(String emailMessage) {
        this.emailMessage = emailMessage;
    }

    public String getEmailSubject() {
        return emailSubject;
    }

    public void setEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
    }

    public LocalDateTime getEmailTime() {
        return emailTime;
    }

    public void setEmailTime(LocalDateTime emailTime) {
        this.emailTime = emailTime;
    }
}
