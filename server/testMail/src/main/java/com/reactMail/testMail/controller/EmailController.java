package com.reactMail.testMail.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.reactMail.testMail.model.Email;
import com.reactMail.testMail.service.SendEmailService;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class EmailController {

    @Autowired
    private SendEmailService sendEmailService;

    // @GetMapping("/sendEmail")
    // public String sendEmail() {
    //     sendEmailService.sendEmail("bharatesh812@gmail.com", "test body", "test subject");
    //     return "Email sent successfully";
    // }
    



    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmail(@RequestBody Email email) {
        sendEmailService.sendEmail(email.getTo(), email.getMessageBody(), email.getMessageSubject());
        return ResponseEntity.ok("Email sent successfully");
    }

    @PostMapping("/sendAttachmentEmail")
    public ResponseEntity<String> sendAttachmentEmail(@RequestBody Email email) throws MessagingException {
        MimeMessage message = sendEmailService.createMimeMessage(email);
        sendEmailService.sendMimeMessage(message);
        return ResponseEntity.ok("Email with attachment sent successfully");
    }

}
