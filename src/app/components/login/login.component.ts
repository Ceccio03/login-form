import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    password: ['', [Validators.required, CustomValidators.isPasswordValid()]],
  });

  constructor(private fb: FormBuilder, private storageServ: LocalStorageService) { }

  onSubmit() {
    if (this.loginForm.valid) {
      const password = this.loginForm.get('password') ? this.loginForm.get('password')!.value : '';
      console.log('Password:', password);
  
      // Ora puoi passare la password al tuo servizio
      this.storageServ.savePassword(password!);
    }
  }
}