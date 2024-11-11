// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service'; // Asegúrate de ajustar la ruta

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  logInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.logInForm.invalid) {
      return; // Manejo simple de errores
    }

    const { username, password } = this.logInForm.value;
    this.authService.logIn(username, password).subscribe({
      next: (data) => {
        console.log('Login successful:', data);
        // Aquí puedes manejar la respuesta y redirigir al usuario
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Maneja el error (por ejemplo, mostrar un mensaje)
      }
    });
  }
}
