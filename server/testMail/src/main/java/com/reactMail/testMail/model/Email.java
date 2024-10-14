package com.reactMail.testMail.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Email {
    String to;
    String messageSubject;
    String messageBody;
}
