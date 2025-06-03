import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactServiceService } from '../contact-service.service'; 
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  successMessage = '';
  errorMessage = '';

  constructor(private contactUser: ContactServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });


    this.contactUser.getUserDetails(this.contact).subscribe({
      next: (res) => {
        console.log('Success', res);
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = '';
        form.reset();
      },
      error: (err) => {
        console.error('Error sending', err);
        this.errorMessage = 'Failed to send message.';
        this.successMessage = '';
      }
    });


  }

}
