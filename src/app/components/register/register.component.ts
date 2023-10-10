import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, CustomValidators.isPasswordValid()]],
    country: [''],
    yob: [new Date().getFullYear(), [Validators.required, CustomValidators.checkNotMinor()]],
    phoneNumber: [''],
    gender: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
  }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // profileForm = this.fb.group({
  //   firstName: ['', [Validators.required, Validators.minLength(3)]],
  //   lastName: ['', [Validators.required, Validators.minLength(3), CustomValidators.checkFirstAndLastUppercase()]],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: ['', CustomValidators.checkAddressUSA()],
  //     zip: ['']
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });

  // constructor(private fb: FormBuilder) { }

  // onSubmit() {
  //   console.warn(this.profileForm.value);
  // }

  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street',
  //       city: 'New York'
  //     }
  //   });
  // }

  // getAliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.getAliases().push(this.fb.control(''));
  // }
}