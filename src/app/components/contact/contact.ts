import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  FormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitted = false;

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Données du formulaire:', this.FormData);
      this.isSubmitted = true;
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }
  }

  private isFormValid(): boolean {
    return (
      this.FormData.name.trim() !== '' &&
      this.FormData.email.trim() !== '' &&
      this.FormData.phone.trim() !== '' &&
      this.FormData.subject.trim() !== '' &&
      this.FormData.message.trim() !== ''
    );
  }
  private resetForm() {
    this.FormData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    this.isSubmitted = false;
  }
}
