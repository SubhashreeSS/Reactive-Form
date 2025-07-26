import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-form';
  name = new FormControl('UserName');
  email = new FormControl('UserEmail');

  onSubmit() {
    console.log('Name:', this.name.value);
    console.log('Email:', this.email.value);
  }
  setValues(){
    this.name.setValue('NewUserName');
    this.email.setValue('NewUserEmail');
    console.log('Updated Name:', this.name.value);
    console.log('Updated Email:', this.email.value);
  }
}
