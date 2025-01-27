import { Component, Output, inject, signal, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogDirective } from '../log.directive';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives: [LogDirective]
})
export class AuthComponent {
  @Output() name = new EventEmitter<{n:string,d:Date}>();
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    if(this.authService.authenticate(this.email(), this.password())){
      this.name.emit({n:this.email(),d:new Date});
    }

  }
}
