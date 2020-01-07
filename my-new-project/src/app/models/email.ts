export class Email {
    emailSender: String;
    emailSubject: String;
    emailMessage: String;
    localDateTime: String;
    
    constructor (emailSender: String, emailSubject: String, emailMessage: String, localDateTime: String) {
        this.emailSender = emailSender;
        this.emailSubject = emailSubject;
        this.emailMessage = emailMessage;
        this.localDateTime = localDateTime;
    }
}